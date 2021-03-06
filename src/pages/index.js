import React from "react";
import PropTypes from "prop-types";
// import { grapgql } from "gatsby";
import Layout from "../components/Layout";
import styled, { injectGlobal } from "styled-components";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { theme } from "../styles";

injectGlobal`
  html{
    box-sizing:border-box;
  }
  *,*:before,*:after{
    box-sizing:border-box;
  }
  body{
    margin:0;
    padding:0;
    font-family: Cabin,"Segoe UI";
  }
  a,h1,h2,h3,p,li,ul{
    margin:0;
  }
`;

const MainContainer = styled.div`
  display: block;
  width: 100%;
  padding: 30px 0 0 150px;
  @media screen and (max-width: ${theme.screenSizes.desktop}px) {
    padding: 30px 0 0 80px;
  }
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
    padding: 50px;
  }
  @media screen and (max-width: ${theme.screenSizes.phablet}px) {
    padding: 20px;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <MainContainer>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact/>
      </MainContainer>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object
};

export default IndexPage;
