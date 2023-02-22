import { useState } from 'react'

const ContactList = ({ data }) => {

    let award = '🏆'
    let noAward = ''

    const [ contacts, setContacts ] = useState(data.slice(0,5))
    
    const addContact = () => { 

        let remaining = data.filter((contact) => {
            return !contacts.some((remainingContact) => remainingContact.id === contact.id)
        })
     

        if (remaining.length === 0 ){
            return
        }
     
        let newContacts = [...contacts]
    
        newContacts.push(remaining[Math.floor(Math.random()* remaining.length)])
    
        setContacts(newContacts)
    
        
    }

    const sortByName = () =>{
        let sorted = [...contacts].sort((a,b) => a.name.localeCompare(b.name))

        setContacts(sorted)

    }

    const sortByPopularity = () =>{
        let sorted = [...contacts].sort((a,b) => b.popularity - a.popularity)

        setContacts(sorted)

    }

    const deleteContact = (contactId) =>{
        const filteredContacts = contacts.filter((contact) => {
            return contact.id !== contactId;
          });
      
          setContacts(filteredContacts);

    }



    return (
        <div>   
            <button onClick = {addContact}>
                Add Random Contact
            </button>
            <button onClick = {sortByPopularity}>
                Sort by Popularity
            </button>
            <button onClick = {sortByName}>
                Sort by Name
            </button>
      

        <table>

            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won Ocscar</th>
                    <th>Won Emmy</th>

                </tr>
            </thead>

            <tbody>
                {
                    contacts.map((contact) => {
                        return (
                            <tr key={contact.id}>
                                <td><img src={contact.pictureUrl} alt='contact' /></td>
                                <td>{contact.name}</td>
                                <td>{parseFloat(contact.popularity).toFixed(2)}</td>
                                {contact.wonOscar ? <td> {award}</td> : <td> {noAward}</td> }
                                {contact.wonEmmy ? <td> {award}</td> : <td> {noAward}</td> }
                                {}
                                <td><button onClick= {() => deleteContact(contact.id)}>Delete</button>
                                </td>
                            </tr>

                        )
                    })
                }              
            </tbody>

        </table>

        </div>

    )
  

}

export default ContactList


