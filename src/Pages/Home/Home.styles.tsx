import styled from "styled-components";

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;

  @media (max-width: 1140px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .main-title {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 25px;
    font-size: 12px;
  }

  .main-content{
    display: flex;
    margin-top: 50px;
    gap: 15px;

    .main-list{
      display:flex;
      flex-direction: column;
    }
  }
`;
