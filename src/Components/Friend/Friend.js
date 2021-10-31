import React from 'react';
import { Link ,useHistory} from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {id,name,email} = props.friend;

    const history = useHistory()
    
  const url = `/friend/${id}`

  const handleClick = () => {
  history.push(`/friend/${id}`)

  }
    return (
        
            <div className= "friend">
            <h3> ID: {id}</h3>
            <h5> Name: {name}</h5>
            <h5> Email: {email}</h5>
            <Link to={`/friend/${id}`} >Visit Our Village</Link>
            <br />
            <Link to={url} ><button className="btn btn-primary">Friend Details</button></Link>
            <br />
            <button className="btn btn-danger"onClick={handleClick} >Click me </button>
            </div>
    
    );
};

export default Friend;