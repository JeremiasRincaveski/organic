import './input.css'

const Input = (props) => {
    return (
        <div>
            <label className='label' for={props.label}>{props.label}</label>
            <input required={props.obrigatorio} className='input' id={props.label} placeholder={props.placeholder} />
        </div>
    )
}

export default Input