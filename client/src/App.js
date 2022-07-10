import React, { useState, useEffect } from "react";
import axios from "axios";
import GlobalStyle, { AppContainer } from "./GlobalStyle";
import { QuestSection } from "./components/QuestSection/QuestSection";
import { FooterSection } from "./components/FooterSection/FooterSection";
import { useNotification } from "./components/Notifications/NotificationsProvider";

const API_BASE = "http://localhost:3001/quests";

function App() {
  const [quests, setQuests] = useState([]);
  const [nrOfCompletedQuests, setNrOfCompletedQuests] = useState("");
  const [nrOfActiveQuests, setNrOfActiveQuests] = useState("");
  const [newQuest, setNewQuest] = useState("");
  const [popupActive, setPopupActive] = useState(false);
  const dispatch = useNotification();

  const handleNotification = (type, notification, title) => {
    dispatch({
      type,
      message: notification,
      title,
    });
  };

  const handleCloseModal = () => {
    setPopupActive(false);
    setNewQuest("");
    handleNotification("ERROR", newQuest, "New Quest Abandoned!");
  };

  useEffect(() => {
    getQuests();
  }, []);

  useEffect(() => {
    getNrOfCompletedQuests();
    getNrOfActiveQuests();
  }, [quests]);

  const getNrOfCompletedQuests = () => {
    const result = quests.filter((quest) => quest.complete);
    setNrOfCompletedQuests(result.length);
  };

  const getNrOfActiveQuests = () => {
    const result = quests.filter((quest) => !quest.complete);
    setNrOfActiveQuests(result.length);
  };

  const getQuests = async () => {
    try {
      const { data } = await axios.get(API_BASE);
      setQuests(data);
    } catch (error) {
      handleNotification("ERROR", error.message);
    }
  };

  const completeQuest = async (id, text, complete) => {
    try {
      const { data } = await axios.put(API_BASE + "/complete/" + id);
      setQuests((quests) =>
        quests.map((quest) => {
          if (quest._id === data._id) {
            quest.complete = data.complete;
          }
          return quest;
        })
      );

      if (!complete) {
        handleNotification("COMPLETED", "<" + text + "/>", "Quest Completed!");
      }
      if (complete) {
        handleNotification("CREATED", "<" + text + "/>", "Quest Reactivated!");
      }
    } catch (error) {
      handleNotification("ERROR", error.message);
    }
  };

  const deleteQuest = async (id, text) => {
    try {
      const { data } = await axios.delete(API_BASE + "/delete/" + id);
      setQuests((quests) => quests.filter((quest) => quest._id !== data._id));

      handleNotification("ERROR", "<" + text + "/>", "Quest Abandoned!");
    } catch (error) {
      handleNotification("ERROR", error.message);
    }
  };

  const addQuest = async () => {
    if (newQuest === "") {
      handleNotification("ERROR", "You must add a quest description first!");
      return;
    } else {
      try {
        handleNotification(
          "CREATED",
          "<" + newQuest + "/>",
          "New Quest Started!"
        );
        const { data } = await axios.post(API_BASE + "/new", {
          text: newQuest,
        });
        setQuests([...quests, data]);

        setPopupActive(false);
        setNewQuest("");
      } catch (error) {
        handleNotification("ERROR", error.message);
      }
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <QuestSection
          title="Active"
          nrOfQuests={nrOfActiveQuests}
          quests={quests}
          handleComplete={completeQuest}
          handleDelete={deleteQuest}
          typeOfQuest={!quests.complete}
        />
        <QuestSection
          title="Completed"
          nrOfQuests={nrOfCompletedQuests}
          quests={quests}
          handleComplete={completeQuest}
          handleDelete={deleteQuest}
          typeOfQuest={quests.complete}
        />
        <FooterSection
          handlePopupActive={popupActive}
          handleCloseModal={handleCloseModal}
          handleOpenModal={() => setPopupActive(true)}
          handleChange={(e) => setNewQuest(e.target.value)}
          handleValue={newQuest}
          handleAddNewQuest={addQuest}
        />
      </AppContainer>
    </>
  );
}

export default App;
