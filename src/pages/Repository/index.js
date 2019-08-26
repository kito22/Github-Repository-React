import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { Loading, Owner, IssuesList, IssueState, Pagination } from './styles';
import api from '../../services/api';
import Container from '../../components/Container/index';

export default class Repository extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filters: [
      { state: 'all', label: 'Todas' },
      { state: 'open', label: 'Abertas' },
      { state: 'closed', label: 'Fechadas' },
    ],
    filterIndex: 0,
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);
    const { filterIndex, filters } = this.state;

    const [response, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filters[filterIndex].state,
          per_page: 10,
        },
      }),
    ]);

    this.setState({
      repository: response.data,
      issues: issues.data,
      loading: false,
    });
  }

  loadIssues = async () => {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);
    const { page, filters, filterIndex } = this.state;

    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filters[filterIndex].state,
        per_page: 10,
        page,
      },
    });
    this.setState({ issues: issues.data });
  };

  handleSelect = async filterIndex => {
    await this.setState({ filterIndex });
    this.loadIssues();
  };

  handlePagination = async action => {
    const { page } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
    });
    this.loadIssues();
  };

  render() {
    // eslint-disable-next-line
    const { issues, repository, loading, page, filters, filterIndex } = this.state;

    if (loading) {
      return <Loading>Loading</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <IssueState active={filterIndex}>
          {filters.map((filter, index) => (
            <button
              type="button"
              key={filter.label}
              onClick={() => this.handleSelect(index)}
            >
              {filter.label}
            </button>
          ))}
        </IssueState>
        <IssuesList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssuesList>
        <Pagination>
          <button
            type="button"
            title="Página anterior"
            disabled={page < 2}
            onClick={() => this.handlePagination('back')}
          >
            <MdChevronLeft size={18} color="#fff" />
          </button>
          <button
            type="button"
            title="Próxima página"
            onClick={() => this.handlePagination('next')}
          >
            <MdChevronRight size={18} color="#fff" />
          </button>
        </Pagination>
      </Container>
    );
  }
}
