import React from "react";
import { AddNewQuest, QuestIcon } from "./NewQuest.styles";

export const NewQuest = ({ handleClick }) => (
  <AddNewQuest onClick={handleClick}>
    <h1>Start a new Quest</h1>
    <QuestIcon>!</QuestIcon>
  </AddNewQuest>
);
