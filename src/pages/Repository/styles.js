import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: #7159c1;
    font-size: 16px;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 10px;
  }

  h1 {
    font-size: 24px;
    margin: 10px;
  }

  p {
    max-width: 400px;
    color: #666;
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
  }
`;

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border-radius: 4px;
    border: 1px solid #eee;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    div {
      flex: 1;
      margin-left: 10px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          margin-left: 10px;
          background: #eee;
          color: #333;
          padding: 4px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
        }
      }
      p {
        color: #888;
        font-size: 12px;
        margin-top: 5px;
      }
    }
  }
`;

export const IssueState = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;

  button {
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    margin: 0 0.25rem;

    &:nth-child(${props => props.active + 1}) {
      background: #576574;
      color: white;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    background: #7151c9;
    border-radius: 50%;
    width: 30px;
    height: 30px;

    & + button {
      margin-left: 30px;
    }
  }
`;
