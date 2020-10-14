import React , {useState , useEffect} from 'react';
import { Button , FormControl , InputLabel , Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';


function App() {

  const [input , setInput] = useState('');
  const [messages , setMessages] = useState([]);

  const [username , setUsername] = useState('');

  //useState - variable in REACT
  //useEffect - Run code on a condition 

  useEffect(() => {
    db.collection('messages').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });
  }, []); 

  
  useEffect(() => {
    //run Code here...
    setUsername(prompt('please enter your name'));
  }, []); //condition

  const sendMessage = (event => {
    event.preventDefault();

    db.collection('messages').add({
      message : input,
      username : username,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    });
  setMessages([...messages , {username : username , message : input}
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
        <Message username={username}  message={message}/>
      ))
      }
    </div>
  );
}

export default App;
