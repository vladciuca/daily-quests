import React from "react";
import { Container, FadeOnScroll } from "./QuestSection.styles";
import { Quest } from "../Quest/Quest";

export const QuestSection = ({
  title,
  nrOfQuests,
  quests,
  handleDelete,
  handleComplete,
}) => {
  return (
    <Container>
      <h2>
        {title} Quests: {nrOfQuests}
      </h2>
      <FadeOnScroll>
        {quests.map((quest) => {
          if (!quest.complete && title === "Active") {
            return (
              <Quest
                key={quest._id}
                complete={quest.complete}
                text={quest.text}
                handleComplete={() =>
                  handleComplete(quest._id, quest.text, quest.complete)
                }
                handleDelete={() => handleDelete(quest._id, quest.text)}
              />
            );
          } else if (quest.complete && title === "Completed") {
            return (
              <Quest
                key={quest._id}
                complete={quest.complete}
                text={quest.text}
                handleComplete={() =>
                  handleComplete(quest._id, quest.text, quest.complete)
                }
                handleDelete={() => handleDelete(quest._id, quest.text)}
              />
            );
          }
        })}
      </FadeOnScroll>
    </Container>
  );
};
