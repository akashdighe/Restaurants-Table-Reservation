import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Success from "./Pages/Success/Success";
import "./App.css";
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";
import ProtectedRoute from "./components/ProtechtedRoute";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* ✅ Protected Route */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
