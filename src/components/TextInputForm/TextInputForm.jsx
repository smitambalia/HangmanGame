import Button from "../Button/Button";
import TextBoxInput from "../TextboxInput/TextBoxInput";

export default function TextInputForm({handleFormSubmit,handleTextInputChange}) {
  
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextBoxInput
                    placeholder="Enter a word or a phrase hear..."
                    label="Enter a word or a phrase hear..."
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <Button 
                    type="button"
                    text="Show/Hide"
                    styleType="warning"
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