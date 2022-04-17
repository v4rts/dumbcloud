import React from 'react';
import './input.css';
import { useState } from 'react';

let Input = (props) => {

    const [dstate, setDstate] = useState(false);
    const [book, setBook] = useState("");
    const [score, setScore] = useState(1);


    let booklist = {};

    let deleteThis = () => {
        setDstate(true);
    }

    let addThis = () => {
        let a = props.savebooks;
        a.push({"book" : book, "score": score});
        props.setSavebooks(a);
        console.log(props.savebooks);
    }

    if (!dstate){
        return(
            <div className='form-inputs-wrapper'>
                <input onInput={e => setBook(e.target.value)} className="del5 form-input" type="text" size="20" placeholder="Автор, название" list = "role"></input>
                    <datalist id="role">
                        {props.rolelist.map( (item) => <option value={item.BookName+", "+item.AuthorName}/>)}
                    </datalist>
                <span>  Score: </span>
                <select id="select" onChange={e => setScore(e.target.value)}> 
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                
                <input type="button" className='xbutton' onClick={addThis} value="O"/>
                <input type="button" className='xbutton' onClick={deleteThis} value="X"/>
                <br></br>
            </div>
        )
    } else {
        return (<div></div>);
    }

}

export default Input;