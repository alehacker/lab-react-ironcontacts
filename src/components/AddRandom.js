import { useState } from "react"

const AddRandom = ({data}) =>{
    
    const [ contacts, setContacts ] = useState(data)

    console.log("Here is the whole DATA", contacts)

    let first5 = contacts.slice(0, 5)
    
    let randNumber = contacts[Math.floor(Math.random()* contacts.length)]
    let randContact = contacts[randNumber]
    
    const AddContact = () =>{
        first5 = first5.push(randContact)
    }
    
    return(

        <button onClick = {() => AddContact(randContact)}>
            Add Random Contact
        </button>
    )
}

export default AddRandom

