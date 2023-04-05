import './input.css'

const Input = (props) => {
    return (
        <div className="input">
            <label for={props.label}>{props.label}</label>
            <input id={props.label} placeholder={props.placeholder} />
        </div>
    )
}

export default Input