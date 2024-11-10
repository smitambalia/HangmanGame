// created new container which takes care only logic for the form container
import { useState } from "react";
import TextInputForm from "./TextInputForm";

export default function TextInputFormContainer() {

    let [inputType,setInputType] = useState("password");
    const [input, setInput] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted!",input);
    }
    function handleTextInputChange(event) {
        console.log("text input changed-> ", event.target.value);
        setInput(event.target.value);
    }
    function handleShowHideHandler() {

      if(inputType == "password") setInputType("text");
      else setInputType("password");
      console.log("Input Type -> ",inputType);

    }
    return (
      <TextInputForm
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideHandler={handleShowHideHandler}
      />
    );
}