
import React, { useEffect, useState } from "react";

import axios from "axios";
import UserCard from '../Components/UserCard';



const UserList = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data));
        
        

    }, []);

    return (
        <div  className="list">

            {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
          
          
        </div>
      );


}

    export default UserList;