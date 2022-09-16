import React from "react";
import { Content, Headline } from "../Components/Styles/stylesheet";
import csslogo from "../img/css3.svg";
import javascriptlogo from "../img/javascript.svg";
import htmllogo from "../img/html5.svg";

function Home() {
  return (
    <div>
      <Headline>Velkommen til min Portfolio</Headline>
      <Content>
        <p>Jeg er en FrontEnd Student som jobber med:</p>
        <img alt='css-logo' src={csslogo}></img>
        <img alt='javascript-logo' src={javascriptlogo}></img>
        <img alt='html-logo' src={htmllogo}></img>
      </Content>
    </div>
  );
}

export default Home;
