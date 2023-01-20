import React, { Component, useState, useEffect } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/menubar";
import Content from "./components/Content";
import Descriptions from "./components/Descriptions";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  );
};

export default Layout;
