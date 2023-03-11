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
