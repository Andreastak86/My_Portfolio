import React from "react";
import { Headline, StyleContent } from "../Components/Styles/stylesheet";
import profilepic from "../img/person.jpg";

function KontaktPage() {
  return (
    <content>
      <Headline>Kontakt Meg</Headline>
      <StyleContent>
        <img alt='picofme' src={profilepic}></img>
        <ul>
          <li>GitHub</li>
          <li>Discord</li>
          <li>LinkedIn</li>
          <li>Mail</li>
          <li>Mobile</li>
        </ul>
      </StyleContent>
    </content>
  );
}

export default KontaktPage;
