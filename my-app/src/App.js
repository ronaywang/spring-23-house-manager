import React, { Component, useState, useEffect } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/menubar";
import Content from "./components/Content";
import Descriptions from "./components/Descriptions";
import Assignments from "./components/Assignment";
import Layout from "./main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="descriptions" element={<Descriptions />} />
          <Route path="assignments" element={<Assignments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
