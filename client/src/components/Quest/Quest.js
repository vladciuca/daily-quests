import React from "react";
import { Button } from "../Button/Button";
import {
  QuestContainer,
  RoundCheckbox,
  QuestDescription,
} from "./Quest.styles";

export const Quest = ({ complete, text, handleComplete, handleDelete }) => (
  <QuestContainer>
    <QuestDescription complete={complete} onClick={handleComplete}>
      <RoundCheckbox complete={complete} />
      <div>
        {"<"}
        {text}
        {"/>"}
      </div>
    </QuestDescription>
    <Button text={"Abandon"} type={"danger"} action={handleDelete} />
  </QuestContainer>
);
