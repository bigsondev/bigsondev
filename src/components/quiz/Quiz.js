import React, { useState, useEffect } from 'react';

import { shuffle } from '~utils';

import { Post } from '..';
import { NotStarted } from './NotStarted';
import { InProgress } from './InProgress';
import { Completed } from './Completed';

const STAGE_MAPPER = {
  notStarted: 'NOT_STARTED',
  inProgress: 'IN_PROGRESS',
  completed: 'COMPLETED',
};

export const Quiz = ({ data: initialData, title, desc, next }) => {
  const [data, setData] = useState(undefined);
  const [selections, setSelection] = useState([]);
  const [stage, setStage] = useState(STAGE_MAPPER.notStarted);
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
    setStage(STAGE_MAPPER.inProgress);

    startTimer();
  };

  const handleAnswerClick = (index) => {
    if (selections.length + 1 === data.length) {
      clearInterval(timer);
      setTimer(undefined);
      setSelection([...selections, index]);

      return setStage(STAGE_MAPPER.completed);
    }

    setSelection([...selections, index]);
  };

  const handleTryAgainClick = () => {
    setSelection([]);
    setTimeElapsed(0);
    startTimer();
    setStage(STAGE_MAPPER.inProgress);
  };

  if (!data) {
    return null;
  }

  const stages = {
    [STAGE_MAPPER.notStarted]: (
      <NotStarted
        title={title}
        desc={desc}
        questionsCount={data.length}
        onStartClick={handleStartClick}
      />
    ),
    [STAGE_MAPPER.inProgress]: (
      <InProgress
        title={title}
        data={data}
        selections={selections}
        onAnswerClick={handleAnswerClick}
      />
    ),
    [STAGE_MAPPER.completed]: (
      <Completed
        data={data}
        title={title}
        selections={selections}
        timeElapsed={timeElapsed}
        next={next}
        onTryAgainClick={handleTryAgainClick}
      />
    ),
  };

  return (
    <Post title={title} desc={stage === STAGE_MAPPER.notStarted ? desc : null}>
      {stages[stage]}
    </Post>
  );
};
