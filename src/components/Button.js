import styled from "styled-components";

const ButtonA =styled.button`
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Montserrat", sans-serif !important;
  font-size: 1.4rem;
  background: transparent;
  border: 0.15rem solid var(--lightColor);
  padding: 0.5rem 1rem;
  color: var(--lightColor);
  border-radius: 0.5rem;
  margin: 0.2 rem 0.5rem 0;
  transition: all 0.25s ease-in-out;
  &:hover {
    background: rgb(145, 145, 145, 0.5);
    color: var(--lightColor);
  }
`;

const ButtonB = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Montserrat", sans-serif !important;
  font-size: 1.4rem;
  background: var(--lightColor);
  border: 0.15rem solid var(--lightColor);
  padding: 0.5rem 1rem;
  color: var(--normalBlue);
  border-radius: 0.5rem;
  margin: 0.2 rem 0.5rem 0;
  transition: all 0.25s ease-in-out;
  &:hover {
    background: rgb(145, 145, 145, 0.5);
    color: var(--lightColor);
  }
`;

export { ButtonA, ButtonB };
// utilizar &:hover dentro del styled-component, hará dirigir todas las acciones siguientes al styled-component dentro del cual estamos trabajando, utilizando en este caso la pseudoclase :hover
