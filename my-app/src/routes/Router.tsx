import { lazy } from "solid-js";
import { Routes, Route, Link } from "solid-app-router"
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
} 
