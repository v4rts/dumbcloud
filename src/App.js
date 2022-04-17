import './App.css';
import Input from "./input";
import React, {useState, useEffect} from 'react';

let App = () => {

  const [manualInput, setManualInput] = useState([1]);
  const [condition, setCondition] = React.useState("1");
  const [items, setItems] = useState(2);
  const [rolelist, setRolelist] = useState([]);

  const [reglogin, setReglogin] = useState("")
  const [regpass, setRegpass]= useState("")
  const [inlogin, setInlogin] = useState("")
  const [inpass, setInpass] = useState("")

  let signInRedirect = () => {
    setCondition("2");
  }

  let signUp = async e => {
    if (reglogin != "" && regpass != "") {

      let regexp = /^[a-z\d]+$/i;
      if (regexp.test(String(reglogin)) && regexp.test(String(regpass))) {
        if (String(reglogin).length < 24 && String(reglogin).length > 8 && String(regpass).length < 24 && String(regpass).length > 8){
          
          fetch('http://127.1:8080/api/v1/register', {method: 'POST', headers: {
            'Content-Type': 'application/json'}, body: JSON.stringify({"user": reglogin, "password": regpass})})
          .then(response => response.json())
          .then(result => {

            console.log(result); // debug
        })

        } else {
          alert("Пароль и логин должны быть не менее 8 символов и не более 24");
        }
      } else {
        alert("Пожалуйста используйте только латинские буквы и цифры");
      }
    }else{
      alert("Поля не могут быть пустыми!");
    }

 
  }

  let signIn = () => {
    if (inlogin != "" && inpass != "") {

      let regexp = /^[a-z\d]+$/i;
      if (regexp.test(String(inlogin)) && regexp.test(String(inpass))) {
        if (String(inlogin).length < 24 && String(inlogin).length > 8 && String(inpass).length < 24 && String(inpass).length > 8){
          setCondition("3");
          alert("Успешный вход");
        } else {
          alert("Пароль и логин должны быть не менее 8 символов и не более 24");
        }
      } else {
        alert("Пожалуйста используйте только латинские буквы и цифры");
      }
    }else{
      alert("Поля не могут быть пустыми!");
    }
  }

  let deleteList = () => {
    alert("Список успешно удален")
    setCondition("3")

  }

  let addBooks = () => {
    setCondition("4")
  }

  let addItem_flag = 1;

  let goBack = () => {
    setCondition(String(condition-1))
  }

  let manualUpload = () => {
    setCondition("3")
    setItems(2)
  }
  
  let AddItem = ()  => {
      setItems(items+1);
      let arr = [];
      for (let i = 0; i < items; i++){
          arr.push(addItem_flag);
          addItem_flag++;
      }
      setManualInput(arr);
  }

  const deleteAll = () => {
      setManualInput([1]);
      setItems(2);
  }

  if (condition == "1"){
    return (
      <div>
        <div className='fullsizewrapper'>
          
          <div className='form-wrapper'>
            <div className='form'>
              <h1>Регистрация</h1>
              <div className='label-wrapper'>
                <p>Логин</p>
              </div>      
              <input onInput={e => setReglogin(e.target.value)} className='form-input' type="text" size="10" placeholder="8-24 символов"/>
              <div className='label-wrapper'>
                <p>Пароль</p>
              </div> 
              <input onInput={e => setRegpass(e.target.value)} className='password form-input' size="14" placeholder="8-24 символов"/>
              <div className='form-btns-container'>
                <input className='btn' type="button" onClick={signInRedirect} value="Войти"/>
                <input className='btn' type="button" onClick={signUp} value="Зарегистрироваться"/>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    )
  } else
  if (condition == "2"){
    return(
      <div>
        <input type="image" onClick={goBack} src="https://cdn-icons-png.flaticon.com/512/2223/2223615.png" className='back-button'></input>
      <div className='fullsizewrapper'>
        <div className='form-wrapper'>
          <div className='form'>
            <h1>Вход</h1>
            <div className='label-wrapper'>
              <p>Логин</p>
            </div>      
            <input onInput={e => setInlogin(e.target.value)} className='form-input' type="text" size="10" placeholder="8-24 символов"/>
            <div className='label-wrapper'>
              <p>Пароль</p>
            </div> 
            <input onInput={e => setInpass(e.target.value)} className='password form-input' size="14" placeholder="8-24 символов"/>
            <div className='center form-btns-container'>
              <input className='btn' type="button" onClick={signIn} value="Войти"/>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    ) 
  } else if (condition == 3){
      return(
        <div>
          <input type="image" onClick={goBack} src="https://cdn-icons-png.flaticon.com/512/2223/2223615.png" className='back-button'></input>
          <div className='wrapper'>
          
          <div className='lists-container'>
            <div className='user-list'>
              <h1>Ваши книги</h1>
              <div className='list-item user-list-item'></div>
              <div className='list-item user-list-item'></div>
              <div className='list-item user-list-item'></div>
              <div className='container'>
                <div className='form-btns-container'>
                  <input className='btn' type="button" onClick={deleteList} value="Удалить список"/>
                  <input className='btn' type="button" onClick={addBooks} value="Добавить книгу"/>
                </div>
              </div>
            </div>
            <div className='recommended-list'>
              <h1>Рекомендуем прочитать</h1>
              <div className='list-item recommended-list-item'></div>
            </div>
          </div>
        </div>
        </div>
        
      )
  } else if (condition == 4){
      return(
        <div>
          <input type="image" onClick={goBack} src="https://cdn-icons-png.flaticon.com/512/2223/2223615.png" className='back-button'></input>
        <div className='wrapper'>
          
          <div className='manual-input-container'>
            <h1>Добавление ваших книг в список</h1>
              {manualInput.map( (item) => <Input id={item} rolelist={rolelist}/>)}
              <div className="manual-input-btns">
                <input className="btn" type="button" value="Добавить книгу" onClick={AddItem} id="add"/>
                <div className='interval'></div>
                <input className="btn" type="button" value="Сохранить" onClick={manualUpload} />
              </div>
          </div>
        </div>
        </div>
      )
  } else{
    console.log(condition)
    return(<div>
      <h1>Oops...Something is going wrong</h1>
    </div>)
  }

}

export default App;
