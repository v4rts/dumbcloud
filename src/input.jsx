import React from 'react';
import './input.css';
import { useState } from 'react';

let Input = (props) => {

    const [dstate, setDstate] = useState(false);

    let deleteThis = () => {
        setDstate(true);
    }

    if (!dstate){
        return(
            <div className='form-inputs-wrapper'>
                <input className="del5 form-input" type="text" size="10" placeholder="Название"/>
                <input className="del5 form-input" type="text" size="10" placeholder="Жанр" list = "role"></input>
                    <datalist id="role">
                        {props.rolelist.map( (item) => <option value={item}/>)}
                    </datalist>

                <input className="del5 form-input" type="text" size="10" placeholder="Автор"/>
                <input className="del5 form-input" type="text" size="10" placeholder="Год"/>
                <input className="del5 form-input" type="text" size="10" placeholder="Оценка"/>
                <input type="button" className='xbutton' onClick={deleteThis} value="X"/>
                <br></br>
            </div>
        )
    } else {
        return (<div></div>);
    }

}

export default Input;