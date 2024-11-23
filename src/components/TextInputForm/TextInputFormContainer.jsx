// created new container which takes care only logic for the form container
import { useState , useEffect } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

export default function TextInputFormContainer() {
  let [inputType, setInputType] = useState("password");
  const [input, setInput] = useState("");
  const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted!", input);
    if (input) {
      navigate("/play", {
        state: {
          word: input,
        },
      });
    }
  }
  function handleTextInputChange(event) {
    console.log("text input changed-> ", event.target.value);
    setInput(event.target.value);
  }
  function handleShowHideHandler() {
    if (inputType == "password") setInputType("text");
    else setInputType("password");
    console.log("Input Type -> ", inputType);
  }

  useEffect(() => {
    console.log("Component Updated and Loaded !")
  },[inputType])

  useEffect(() => {
    console.log("Component only Loaded !")
  },[])

  return (
    <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideHandler={handleShowHideHandler}
    />
  );
}
