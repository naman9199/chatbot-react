import React, { useState } from "react";
// @ts-ignore
import Chatbot from "react-simple-chatbot";
import { steps } from "./chatbotSteps";
import { theme } from "./chatbotTheme";
import { ThemeProvider } from "styled-components";

export default function Chatbotbd() {
  const [openCB, setOpenCB] = useState(false);

  const toggleFloating = ({ opened }: any) => {
    setOpenCB(opened);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Chatbot
          steps={steps}
          floating={true}
          opened={openCB}
          toggleFloating={toggleFloating}
          headerTitle="Builtdesign"
        />
      </ThemeProvider>
    </div>
  );
}
