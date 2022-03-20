import './App.css';
import Input from "./input";
import React, {useState, useEffect} from 'react';

let App = () => {

  const [manualInput, setManualInput] = useState([1]);
  const [condition, setCondition] = React.useState("1");
  const [items, setItems] = useState(2);
  const [rolelist, setRolelist] = useState([]);

  let signInRedirect = () => {
    setCondition("2");
  }

  let signUp = () => {
    setCondition("3");
  }

  let signIn = () => {
    setCondition("3")
  }

  let deleteList = () => {
    setCondition("3")
  }

  let addBooks = () => {
    setCondition("4")
  }

  let addItem_flag = 1;


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
              <input className='form-input' type="text" size="10" placeholder="8-24 символов"/>
              <div className='label-wrapper'>
                <p>Пароль</p>
              </div> 
              <input className='password form-input' size="14" placeholder="8-24 символов"/>
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
      <div className='fullsizewrapper'>
        <div className='form-wrapper'>
          <div className='form'>
            <h1>Вход</h1>
            <div className='label-wrapper'>
              <p>Логин</p>
            </div>      
            <input className='form-input' type="text" size="10" placeholder="8-24 символов"/>
            <div className='label-wrapper'>
              <p>Пароль</p>
            </div> 
            <input className='password form-input' size="14" placeholder="8-24 символов"/>
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
      )
  } else if (condition == 4){
      return(
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
      )
  } else{
    console.log(condition)
    return(<div>
      <h1>Oops...Something is going wrong</h1>
    </div>)
  }

}

export default App;
