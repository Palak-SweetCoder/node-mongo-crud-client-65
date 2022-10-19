import React from "react";

const AddUser = () => {
    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name, email};

        //send data to the server side
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('data send succes', data);
            alert('User added successfully to the mongodb.');
            e.target.reset();
        })
    }
    return(
        <div>
            <h1>Please add a user</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="name" placeholder="user name" required/>
                <br/>
                <input type="email" name="email" id="email" placeholder="user email" required/>
                <br/>
                <input type="submit" value="Create user"/>
            </form>
        </div>
    );
};

export default AddUser;