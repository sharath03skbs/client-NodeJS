import React from "react";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { createGlobalStyle } from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  // const BlueText = styled.div`
  //   color: #eeeeee;
  //   * {
  //     color: inherit;
  //   }
  // `;
  const BackgroundColor = createGlobalStyle`
  body{
  background-color : ${(props) => (props.light ? "#f2f2f2" : "#333")}
  }
`;
  return (
    <>
      <Container fluid>
        <BackgroundColor light />
        <ToastContainer />
        <NavBar />
        <Container className="mt-1 ">{children}</Container>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
