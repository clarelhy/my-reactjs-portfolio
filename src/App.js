import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Home,
  Contact,
  ProjectList,
  StackExperience,
  Header,
  // Footer,
} from "./components/";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Home />
        <About />
        <StackExperience />
        <ProjectList />
        <Contact />
      </main>
    </BrowserRouter>
  );
}

export default App;
