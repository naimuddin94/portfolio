import styled from "styled-components";

export const NavSpan = styled.span`
  display: inline-block;
  font-size: 15px;
  color: #0296a1;
  font-weight: 600;
  margin-left: 35px;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0;
  animation: slideTop 1s ease forwards;
  animation-delay: calc(0.2s * ${(props) => props.delayTime});
  :hover {
    color: #0ef;
  }
  @keyframes slideTop {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 70px 10% 0;
`;

export const MediaSpan = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background: transparent;
  border: 1px solid #0e7a82;
  border-radius: 50%;
  font-size: 20px;
  color: #0e7a82;
  margin: 30px 15px 30px 0;
  transition: 0.2s ease-in-out;
  opacity: 0;
  animation: slideLeft 1s ease forwards;
  animation-delay: calc(0.2s * ${(props) => props.delayTime});

  /* Animation */
  @keyframes slideLeft {
    0% {
      transform: translateX(100px);
      opacity: 0;
    }

    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  &:hover {
    background: #0e7a82;
    color: azure;
    box-shadow: 0 0 20px #0e7a82;
  }
`;
