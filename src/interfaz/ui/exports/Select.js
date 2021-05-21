import React, { useState } from 'react'

export const Select = ({options,Selection,setSelection,home= false}) => {

    const [Active, setActive] = useState(false)

    const Selected = (value) => {
        setSelection(value)
        setActive(false)
    }
    return (
        <div id={(home)?"Select_home":""} className="Select">

            <div className="Select_selection" onClick={() => {setActive(!Active)}}>
                <span>{Selection}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7613 5.25318C13.0796 5.58227 13.0796 6.11004 12.7613 6.43913L8.5946 10.7468C8.26808 11.0844 7.73192 11.0844 7.4054 10.7468L3.23874 6.43913C2.92042 6.11004 2.92042 5.58227 3.23874 5.25318C3.56526 4.91561 4.10141 4.91561 4.42793 5.25318L8 8.94615L11.5721 5.25318C11.8986 4.91561 12.4347 4.91561 12.7613 5.25318Z" fill="#EF3340"/>
                </svg>
            </div>

            {(Active) && <Options options={options} Selected={Selected}/>}
        </div>
    )
}

export const Options = ({Selected,options}) => {
    return (
        <div className="Options">
            {options.map( o => (
                <div
                    key={o}
                    onClick={() => Selected(o)} 
                    className="Options_item">
                    {o}
                </div>
            ))}
        </div>
    )
}