import React , {useState , useEffect} from 'react';
import { Button , FormControl , InputLabel , Input} from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {

  const [input , setInput] = useState('');
  const [messages , setMessages] = useState([
    {username : "nabeel" , text : "hey guys"} , 
    {username : "ansil" , text : "hoi mass"}]);

  const [username , setUsername] = useState('');

  //useState - variable in REACT
  //useEffect - Run code on a condition 

  
  useEffect(() => {
    //run Code here...
    setUsername(prompt('please enter your name'));
  }, []); //condition

  const sendMessage = (event => {
    event.preventDefault();
  setMessages([...messages , {username : username , text : input}
  ]);
  setInput('');

  });

  return (
    <div className="App">
      <h1>Hello react lovers..</h1>
      <h2>Welcome {username}</h2>
      <form>
       <FormControl>
         <InputLabel >Enter a message...</InputLabel>
         <Input  value={input} onChange={event => setInput(event.target.value)}/>
         <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send message</Button>
       </FormControl>  
      </form>

      {messages.map(message => (
        <Message username={message.username}  text={message.text}/>
      ))
      }
    </div>
  );
}

export default App;
