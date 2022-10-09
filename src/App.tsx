import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/login" />
      <Route path="courses">
        <Route index />
        <Route path=":courseId" />
      </Route>
    </Routes>
  );
}

export default App;
