import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CoursesPage from './pages/CoursesPage';
import CoursePage from './pages/CoursePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="courses" element={<Layout />}>
        <Route index element={<CoursesPage />} />
        <Route path=":courseId" element={<CoursePage />} />
      </Route>
    </Routes>
  );
}

export default App;
