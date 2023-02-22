import contacts from './contacts.json'
import ContactList from './components/ContactList';

import './App.css';
import AddRandom from './components/AddRandom';

function App() {
  return (
    
    <div className="App">
        <h1> Iron Contacts</h1>
        <ContactList data={contacts}/>

    </div>
  );
}

export default App;


