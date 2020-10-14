import React , {useState , useEffect} from 'react';
import { Button , FormControl , InputLabel , Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {

  const [input , setInput] = useState('');
  const [messages , setMessages] = useState([]);

  const [username , setUsername] = useState('');

  //useState - variable in REACT
  //useEffect - Run code on a condition 

  useEffect(() => {
    db.collection('messages').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id , message : doc.data()})));
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
    <img width="100" height="100" src="https://i.pinimg.com/originals/3f/15/06/3f1506cc4c75f0fd5ac6aead47bb2417.png"/>
      <h1>Hello react lovers..</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
       <FormControl className="app__formControl">
         {/* <InputLabel >Enter a message...</InputLabel> */}
         <Input className="app__input" placeholder="Enter a message here..." value={input} onChange={event => setInput(event.target.value)}/>
         <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
           <SendIcon />
         </IconButton>
       </FormControl>  
      </form>

      <FlipMove>
      {
        messages.map(({id , message}) => (
        <Message key={id} username={username}  message={message}/>
      ))
      }
      </FlipMove>

    </div>
  );
}

export default App;


//deploy on FIREBASE 
// -> firebase init -> npm run build -> firebase deploy
