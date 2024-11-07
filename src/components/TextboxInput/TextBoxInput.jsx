
export default function  TextBoxInput({label,type="text",onChangeHandler,placeholder="Enter your input here"}) {
    return (
        <label>
            <span>
                {label}
            </span>
            <input
                type={type}
                onChange={onChangeHandler}
                placeholder={placeholder}
                className="px-4 py-4 border border-gray-500 rounded-md w-full"
            />
        </label>
    )
}