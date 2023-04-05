const Select = () => {
    
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    
    return (
        <div>
            <label className='label' for='times'>Time</label>
            <select className='input' id='times'>
                {times.map(time => <option key={time}>{time}</option>)}
            </select>
        </div>
    )
}

export default Select