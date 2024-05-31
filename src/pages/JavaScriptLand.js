// src/pages/Realm.js

import React from 'react';
import { useHistory } from 'react-router-dom';

const Realm = () => {
  const history = useHistory();

  const handleTakeQuiz = () => {
    history.push('/quiz');
  };

  return (
    <div>
      <h1>Welcome to the Realm</h1>
      <button onClick={handleTakeQuiz}>Take Quiz</button>
    </div>
  );
};

export default Realm;
