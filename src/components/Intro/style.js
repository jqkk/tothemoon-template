import styled from 'styled-components';

export const Intro = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
`;

export const Image = styled.div`
  height: 6rem;
  margin: 0 auto;

  .img {
    font-size: 4.5rem;
    color: var(--color-indianred);
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const Detail = styled.p`
  margin: 30px;
  text-align: center;
  font-size: 1.25rem;
  color: #6c757d;
  line-height: 1.5;
  font-weight: 400;
`;
