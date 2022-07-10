import React from "react";
import { QuestContainer } from "../Quest/Quest.styles";
import { Button } from "../Button/Button";
import {
  ModalContainer,
  ActionContainer,
  InputContainer,
} from "./NewQuestModal.styles";

export const NewQuestModal = ({
  handleCloseModal,
  handleChange,
  handleValue,
  handleAddNewQuest,
}) => (
  <>
    <h2>New Quest</h2>

    <ModalContainer>
      <QuestContainer>
        <InputContainer>
          <input type="text" onChange={handleChange} value={handleValue} />
        </InputContainer>
        <ActionContainer>
          <Button
            text={"Create Quest"}
            type={"primary"}
            action={handleAddNewQuest}
          />
          <Button text={"Abandon"} type={"danger"} action={handleCloseModal} />
        </ActionContainer>
      </QuestContainer>
    </ModalContainer>
  </>
);
