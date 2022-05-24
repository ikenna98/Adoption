import React, {useState} from 'react'

function Modal({toggle}) {
    const [refresh, setRefresh] = useState(false)


    const handleSubmit = async e => {
        e.preventDefault();
        let username = localStorage.getItem('username');
        const b = e.target
        const options = {
            method : 'POST', 
            body: JSON.stringify({
                name: b.name.value,
                description: b.desc.value,
                age: b.age.value,
                q1: b.q1.value,
                q2:b.q2.value,
                q3:b.q3.value,
                q4:b.q4.value,
                q5:b.q5.value,
                q6:b.q6.value,
                q7:b.q7.value,
                q8:b.q8.value,
                username: username
            }),
            headers: {'Content-Type': 'application/json'}, withCredentials: true
        }
        await fetch(`http://127.0.0.1:8000/posts/`, options)
        setRefresh(!refresh)
    }

  return (
    <div style={{display: !toggle ? 'None' : 'Block'}} >
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <input type='text' name='name' placeholder='Name of cat...'/>
            <input type='number' name='age' placeholder='Enter age..'/>
            <textarea rows='4' name='desc' cols='40' placeholder='Description...' />
            <select name="q1" id="q1">
                {/* # What kind of animal are you looking for? */}
                <option >Cat</option>
                <option >Dog</option>
                <option >I don't mind</option>
            </select>
            <select name="q2" id="q2">
                {/* # Big or Small? */}
                <option >Small</option>
                <option >Medium</option>
                <option >Big</option>
                <option >Size doesn't matter</option>
            </select>
            <select name="q3" id="q3">
                {/* # Are you an active person */}
                <option >Couch Potato</option>
                <option >Reasonably</option>
                <option >Very</option>
            </select>
            <select name="q4" id="q4">
                {/* # Do you have any children at home  */}
                <option >Yes - Young Children</option>
                <option >Yes - Teenagers</option>
                <option >No - Thank God</option>
            </select>
            <select name="q5" id="q5">
                {/* Do you have other pets */}
                <option >Yes - A Cat</option>
                <option >Yes - A Dog</option>
                <option >Nope</option>
            </select>
            <select name="q6" id="q6">
                {/* Do you have fenced in garden */}
                <option >Yes</option>
                <option >No - But there is a green space close by</option>
                <option >No - I live in the city</option>
            </select>
            <select name="q7" id="q7">
                {/* How much time will your pet have to spend alone */}
                <option >None - wfh</option>
                <option >Some - But I can arrange care</option>
                <option >Reasonable - I work a lot</option>
            </select>
            <select name="q8" id="q8">
                {/* Would you be able to take a pet that needs extra training */}
                <option >Nope</option>
                <option >Minor</option>
                <option >Some</option>
                <option >I like a challenge</option>
            </select>
            
            <button type="submit">Add Animal</button>
        </form>
    </div>
  )
}

export default Modal