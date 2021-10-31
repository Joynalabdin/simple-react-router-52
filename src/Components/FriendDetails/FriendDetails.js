import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetails = () => {
    const [friend, setFriend] = useState({})


    const {friendId} = useParams()
    const history = useHistory()


    const handleClick = () => {
        history.push('/friends')
    }
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <h1>Friend Details: {friendId}</h1>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h4>{friend.website}</h4>
            <p>Works at: {friend.company?.name}</p>
            <button className="btn btn-danger" onClick={handleClick} >See All Friend</button>
        </div>
    );
};

export default FriendDetails;