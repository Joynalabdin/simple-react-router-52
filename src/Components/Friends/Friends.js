import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        const url= "https://jsonplaceholder.typicode.com/users";
        fetch(url)
        .then((response) =>response.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div>
            <h1> Total Friends: {friends.length}</h1>
            <div className="friend-container">
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
            </div>
        </div>
    );
};

export default Friends;