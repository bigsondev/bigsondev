import React, { useState, useEffect } from 'react';

import { shuffle } from '~utils';

import {
  didYouKnowQuestionButtonNotification,
  quizResultsSavedMessage,
} from '..';
import { NotStarted } from './NotStarted';
import { InProgress } from './InProgress';
import { Completed } from './Completed';

const STAGES = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
};

export const Quiz = ({ data: initialData, title, desc, next }) => {
  const [data, setData] = useState(undefined);
  const [selections, setSelection] = useState([]);
  const [stage, setStage] = useState(STAGES.NOT_STARTED);
  const [timer, setTimer] = useState(undefined);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    setData(shuffle(initialData));
  }, [initialData]);

  const startTimer = () => {
    const timer = setInterval(() => {
      setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
    }, 1000);

    setTimer(timer);
  };

  const handleStartClick = () => {
    setStage(STAGES.IN_PROGRESS);

    startTimer();
  };

  const handleAnswerClick = (index) => {
    if (selections.length + 1 === data.length) {
      clearInterval(timer);
      setTimer(undefined);
      setSelection([...selections, index]);

      quizResultsSavedMessage();
      didYouKnowQuestionButtonNotification();

      return setStage(STAGES.COMPLETED);
    }

    setSelection([...selections, index]);
  };

  const handleTryAgainClick = () => {
    setSelection([]);
    setTimeElapsed(0);
    startTimer();
    setStage(STAGES.IN_PROGRESS);
  };

  if (!data) {
    return null;
  }

  const stagesMap = {
    NOT_STARTED: (
      <NotStarted
        title={title}
        desc={desc}
        questionsCount={data.length}
        onStartClick={handleStartClick}
      />
    ),
    IN_PROGRESS: (
      <InProgress
        data={data}
        selections={selections}
        onAnswerClick={handleAnswerClick}
      />
    ),
    COMPLETED: (
      <Completed
        data={data}
        selections={selections}
        timeElapsed={timeElapsed}
        next={next}
        onTryAgainClick={handleTryAgainClick}
      />
    ),
  };

  return stagesMap[stage];
};
