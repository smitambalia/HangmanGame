// created new container which takes care only logic for the form container
import TextInputForm from "./TextInputForm";

export default function TextInputFormContainer() {
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted!");
    }
    function handleTextInputChange(event) {
        console.log("text input changed-> ", event.target.value);
    }

    return (

        <TextInputForm 
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
        />

    );
}