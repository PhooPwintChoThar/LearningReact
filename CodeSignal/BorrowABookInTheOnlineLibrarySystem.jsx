// TODO: Define a 'Book' component that accepts 'onBorrow' prop and calls it when the borrow button is clicked
import { useState } from 'react';

function Book({onBorrow}){

    return <button onClick={onBorrow}>borrow</button>;
    
}

// TODO: Define a 'Library' component that alerts the name of the borrowed book using the 'handleBorrow' function and renders the 'Book' component
function Library(){
    const [book, setBook]=useState()
    const handleBorrow=()=>{
        alert(`Borrowed ${book}`)
    }
    return <div>
            <input value={book} onChange={e =>setBook(e.target.value)} type='text'/>
            <Book onBorrow={handleBorrow}/>
            </div>
    
}

export default Library;
// TODO: Export the 'Library' component as the default export
