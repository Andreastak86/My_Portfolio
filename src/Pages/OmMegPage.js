import React from "react";
import { Headline, StyleContent } from "../Components/Styles/stylesheet";
import profilepic from "../img/person.jpg";

function OmMegPage() {
  return (
    <content>
      <Headline>Om Meg</Headline>
      <StyleContent>
        <img alt='picofme' src={profilepic}></img>
        <ul>
          <li>35 år</li>
          <li>Bor på Os</li>
          <li>4 Barn</li>
          <li>Kone</li>
          <li>Bikkje</li>
          <li>To-manns bolig</li>
          <li>Stasjonsvogn</li>
          <li>Liker: Fiske, Båt, Musikk, Matlaging og Foto</li>
        </ul>
      </StyleContent>
    </content>
  );
}

export default OmMegPage;
