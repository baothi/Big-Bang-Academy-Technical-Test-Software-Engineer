import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NumberCounter from './components/NumberCounter';
import UserList from './components/UserList';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<UserList />} />
          <Route path='counter' element={<NumberCounter />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
