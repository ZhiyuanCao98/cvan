import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './styles/styles.scss';
import AppRouter from './routers/AppRouters'

function App() {

  return (
     <AppRouter/>
  );
}

export default App;
