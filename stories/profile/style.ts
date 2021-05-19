import styled from "@emotion/styled";
import Image from "next/image";

export const Header = styled.div`
  width: 100vw;
  margin: 0px;
  padding: 0px;
  height: 30vh;
  background-color: #f00;
  display: grid;
`;

export const Center = styled.div`
  width: 20vh;
  height: 20vh;
  border-radius: 150px;
  display: block;
  margin: auto;
  /* grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3; */
  background-color: #ff0;
`;

export const ImageDisplay = styled(Image)`
  width: 100%;
  height: 100%;
`;
