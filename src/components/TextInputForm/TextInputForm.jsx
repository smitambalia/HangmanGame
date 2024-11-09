import Button from "../Button/Button";
import TextBoxInput from "../TextboxInput/TextBoxInput";

export default function TextInputForm({inputType,handleFormSubmit,handleTextInputChange,handleShowHideHandler}) {
  
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextBoxInput
                    type={inputType}
                    placeholder="Enter a word or a phrase hear..."
                    label="Enter a word or a phrase hear..."
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <Button 
                    type="button"
                    text={(inputType) =="text" ? "hide" : "show"}
                    styleType="warning"
                    onClickHandler={handleShowHideHandler}
                />
            </div>
            <div>
                <Button 
                    type="submit"
                    text="Submit"
                    styleType="primary"
                />
            </div>
        </form>
    )
}