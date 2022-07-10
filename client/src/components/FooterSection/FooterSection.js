import React from "react";
import { FooterContainer } from "./FooterSection.styles";
import { NewQuest } from "../NewQuest/NewQuest";
import { NewQuestModal } from "../NewQuestModal/NewQuestModal";

export const FooterSection = ({
  handleCloseModal,
  handleOpenModal,
  handlePopupActive,
  handleChange,
  handleValue,
  handleAddNewQuest,
}) => (
  <FooterContainer>
    {handlePopupActive ? (
      <NewQuestModal
        handleCloseModal={handleCloseModal}
        handleChange={handleChange}
        handleValue={handleValue}
        handleAddNewQuest={handleAddNewQuest}
      />
    ) : (
      <NewQuest handleClick={handleOpenModal} />
    )}
  </FooterContainer>
);
