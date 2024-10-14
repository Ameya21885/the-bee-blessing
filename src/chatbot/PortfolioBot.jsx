"use client";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import chatbotData from "./db.json";
import themeConfig from "./styledb.json";
import imgProfile from "../../public/assets/image.jpg";

// CustomMessage Component
const CustomMessage = ({ step }) => {
  const handleLinkClick = () => {
    console.log("Link clicked!");
  };
  
  const link = step.component?.props?.link; // Ensure that component and props exist
  
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLinkClick}
      >
        {link}
      </a>
    </div>
  );
};

const PortfolioBot = () => {
  const [chatSteps, setChatSteps] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    console.log("chatbotData:", chatbotData);
    setChatSteps(updateValidatorFunctions(chatbotData));
  }, []);

  // Validator function for dispute information
  const validateDisputeInformation = (value) => {
    const trimmedValue = value.trim();
    const words = trimmedValue.split(/\s+/);

    if (words.length < 5) {
      return "Please enter at least 5 words.";
    }

    return true;
  };

  // Validator function for payment date
  const validatePaymentDate = (value) => {
    const isValidDate = /^\d{2}\/\d{2}\/\d{4}$/.test(value);
    if (!isValidDate) {
      return "Invalid date format. Please use dd/MM/yyyy.";
    }

    const enteredDate = new Date(value);
    if (isNaN(enteredDate.getTime()) || enteredDate <= new Date()) {
      return "Date must be a valid future date.";
    }

    return true;
  };

  // Update steps with correct validator functions
  const updateValidatorFunctions = (steps) => {
    return steps.map((step) => {
      if (step.validator === "validatePaymentDate") {
        step.validator = validatePaymentDate;
      } else if (step.validator === "validateDisputeInformation") {
        step.validator = validateDisputeInformation;
      }
      return step;
    });
  };

  // Handle end of chatbot flow
  const handleEnd = (data) => {
    const apiData = {
      values: data.values,
      steps: data.steps,
    };
    submitDataToApi(apiData)
      .then((response) => {
        setSubmittedData(data);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  // API submission function
  // const submitDataToApi = async (apiData) => {
  //   const apiEndpoint = "https://example.com/api";
  //   return fetch(apiEndpoint, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(apiData),
  //   })
  //     .then((response) => response.json())
  //     .catch((error) => {
  //       throw error;
  //     });
  // };

  const submitDataToApi = async (apiData) => {
    const apiEndpoint = "https://example.com/api";
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });
  
      if (!response.ok) {
        // Handle server errors (e.g., 4xx, 5xx status codes)
        throw new Error(`Server Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error submitting data:", error.message);
      throw error; // Re-throw the error so it can be caught in the calling function
    }
  };
  

  return (
    <div>
      {chatSteps && (
        <ThemeProvider theme={themeConfig.theme}>
          <ChatBot
            botDelay={1000}
            styles={{ maxWidth: "60%" }}
            botAvatar="https://i.pinimg.com/564x/a2/e0/c6/a2e0c64d698d1555e9351487b9bc227e.jpg"
            headerTitle={<img src={imgProfile} alt="Fintaar" width="100px" />}
            recognitionEnable={true}
            steps={chatSteps.map((step) => ({
              ...step,
              component: step.component ? (
                <CustomMessage {...step.component.props} />
              ) : undefined,
            }))}
            floating={true}
            handleEnd={handleEnd}
            botAvatarStyle={themeConfig.theme.buttonStyle}
            userBubbleStyle={themeConfig.theme.buttonStyle}
          />
        </ThemeProvider>
      )}
    </div>
  );
};

export default PortfolioBot;
