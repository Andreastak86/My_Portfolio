import React from "react";
import { Headline, StyleContent } from "../Components/Styles/stylesheet";
import profilepic from "../img/person.jpg";

function ArbeidPage() {
  return (
    <content>
      <Headline>Mitt Arbeid</Headline>
      <StyleContent>
        <img alt='picofme' src={profilepic}></img>
        <ul>
          <li>KodeHode FrontEnd Student</li>
          <li>Assisterende Butikksjef</li>
          <li>Acount Manager</li>
          <li>Salgsleder</li>
          <li>Distriktsansvarlig Selger</li>
          <li>Salgskonsulent</li>
        </ul>
      </StyleContent>
    </content>
  );
}

export default ArbeidPage;
