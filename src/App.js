import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/";
import { About, Home, Contact, ProjectList, StackExperience } from "./scenes";
import { useApplicationContext } from "./contexts/ApplicationContext";
import { log } from "./Utility";

function App() {
  const applicationContext = useApplicationContext();

  useEffect(() => {
    if (window.innerWidth > 500) {
      if (window.innerWidth < 1025) {
        // iPad Pro size is 1024
        applicationContext.isMobile = false;
        applicationContext.isTablet = true;
        applicationContext.isDesktop = false;
      } else {
        // bigger than 1024 will be desktop/laptop
        applicationContext.isMobile = false;
        applicationContext.isTablet = false;
        applicationContext.isDesktop = true;
      }
    } else {
      // most smart phone widths are smaller than 500px
      applicationContext.isMobile = true;
      applicationContext.isTablet = false;
      applicationContext.isDesktop = false;
    }

    log("App", applicationContext);
  }, [applicationContext]);
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
