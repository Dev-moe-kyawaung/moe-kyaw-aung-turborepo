import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Apps from "./pages/Apps";
import GitHubCollections from "./pages/GitHubCollections";
import LovableApps from "./pages/LovableApps";
import Socials from "./pages/Socials";
import Emails from "./pages/Emails";
import Certificates from "./pages/Certificates";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";

import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/github-collections" element={<GitHubCollections />} />
        <Route path="/lovable-apps" element={<LovableApps />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/emails" element={<Emails />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
