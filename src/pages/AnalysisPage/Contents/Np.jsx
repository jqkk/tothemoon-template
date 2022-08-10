import React from 'react';
import styled from 'styled-components';
import { NpChart } from '../../../components';
import { NpMock } from '../../../mock';

function Np() {
  return (
    <Container>
      <NpChart data={NpMock} />
      <CommentContainer>
        <Title>COMMENTS</Title>
        <Navbar>
          <Nav backgroundColor="rgb(153, 102, 255)">공포</Nav>
          <Nav backgroundColor="rgb(54, 162, 235)">중립</Nav>
        </Navbar>
        <table width="100%" style={{ marginTop: '30px', color: '#6c757d' }}>
          <colgroup>
            <col style={{ width: '40%' }} />
            <col style={{ width: '60%' }} />
          </colgroup>
          <thead>
            <tr>
              <th
                scope="col"
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  textAlign: 'initial',
                }}
              >
                작성자 아이디
              </th>
              <th
                scope="col"
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  textAlign: 'initial',
                }}
              >
                댓글
              </th>
            </tr>
          </thead>
        </table>
        <ScrollContainer>
          <table width="100%" style={{ color: '#6c757d' }}>
            <colgroup>
              <col style={{ width: '40%' }} />
              <col style={{ width: '60%' }} />
            </colgroup>
            <tbody>
              <tr style={{ height: '110px' }}>
                <td
                  style={{
                    borderBottom: '0.5px solid #6c757d',
                    paddingTop: '45px',
                  }}
                >
                  OOOOOO
                </td>
                <td
                  style={{
                    borderBottom: '0.5px solid #6c757d',
                    paddingBottom: '10px',
                  }}
                >
                  긍정적인 댓글입니다
                </td>
              </tr>
              <tr style={{ height: '110px' }}>
                <td
                  style={{
                    borderBottom: '0.5px solid #6c757d',
                    paddingTop: '45px',
                  }}
                >
                  OOOOOO
                </td>
                <td
                  style={{
                    borderBottom: '0.5px solid #6c757d',
                    paddingBottom: '10px',
                  }}
                >
                  긍정적인 댓글입니다
                </td>
              </tr>
              <tr style={{ height: '110px' }}>
                <td
                  style={{
                    borderBottom: '0.5px solid #6c757d',
                    paddingTop: '45px',
                  }}
                >
                  OOOOOO
                </td>
                <td
                  style={{
                    borderBottom: '0.5px solid #6c757d',
                    paddingBottom: '10px',
                  }}
                >
                  긍정적인 댓글입니다
                </td>
              </tr>
              <tr style={{ height: '110px' }}>
                <td
                  style={{
                    borderBottom: '0.5px solid #6c757d',
                    paddingTop: '45px',
                  }}
                >
                  OOOOOO
                </td>
                <td
                  style={{
                    borderBottom: '0.5px solid #6c757d',
                    paddingBottom: '10px',
                  }}
                >
                  긍정적인 댓글입니다
                </td>
              </tr>
              <tr style={{ height: '110px' }}>
                <td
                  style={{
                    borderBottom: '0.5px solid #6c757d',
                    paddingTop: '45px',
                  }}
                >
                  OOOOOO
                </td>
                <td
                  style={{
                    borderBottom: '0.5px solid #6c757d',
                    paddingBottom: '10px',
                  }}
                >
                  긍정적인 댓글입니다
                </td>
              </tr>
            </tbody>
          </table>
        </ScrollContainer>
      </CommentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5rem;
`;

const CommentContainer = styled.div`
  margin-left: 120px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 0.5rem;
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0.5rem 0;
  gap: 5px;
`;

const Nav = styled.div`
  border-radius: 10px;
  color: white;
  padding: 0.8rem 1rem;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  display: block;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
`;

const ScrollContainer = styled.div`
  height: 400px;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #292424;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(128, 128, 128, 0.219);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export default Np;
