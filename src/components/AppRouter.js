import React, { useState } from "react";
import { Routes, Router, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({ isLoggedIn }) => {
  console.log("AppRouter: isLoggedIn=", isLoggedIn);
  return (
    <>
      AppRouter
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {}
        </Routes>
      </Router>
    </>
  );
};
export default AppRouter;

/* {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />}></Route>
          </>
        ) : (
          <Route path="/" element={<Auth />}></Route>
        )} */
