import React, { useEffect, useState } from "react";

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleUserDelete = id => {
        const proced = window.confirm('Are you sure you want to delete?');
        if (proced) {
            console.log('Deleting user with id:', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = users.filter(u => u._id !== id);
                        setUsers(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h1>This is our Home Page</h1>
            <p>Total users: {users.length}</p>
            <ul>
                {
                    users.map(u => <li key={u._id}>Name: {u.name}
                        <button onClick={() => handleUserDelete(u._id)}>x</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;