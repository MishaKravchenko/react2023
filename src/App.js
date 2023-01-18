import React, {useState} from "react";
import './App.css';
import {Users} from "./components/Users/Users";
import {UserDetails} from "./components/UserDetails/UserDetails";
import {Posts} from "./components/Posts/Posts";

function App() {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user)
        setUserId(null)
    }

    const getUserId = (id) => {
        setUserId(id)
    }

    return (
        <div className="App">
            <div className="main_wrapper">
                <div>
                    <Users getUser={getUser}/>
                    {user && <UserDetails user={user} getUserId={getUserId}/>}
                </div>
                <div>
                    <Posts userId={userId}/>
                </div>
            </div>
        </div>
    );
}

export default App;
