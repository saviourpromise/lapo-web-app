"use client"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Leftsidebar from "./(root)/(component)/Leftsidebar";
import Homepage from "./(root)/(pages)/page";
import CardProfile from "./(root)/(pages)/cardProfile/page";
import CardRequests from "./(root)/(pages)/cardRequests/page";

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cardProfile" element={<CardProfile />} />
        <Route path="/cardRequests" element={<CardRequests />} />
      </Routes>
    </Router>
  );
}
