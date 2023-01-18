import React, {useState} from "react";
import './App.css';
import {Users} from "./components/Users/Users";
import {UserDetails} from "./components/UserDetails/UserDetails";

function App() {

    const [user, setUser] = useState(null);

    const getUser = (user) => {
        setUser(user)
    }

    return (
        <div className="App">
            <div className="main_wrapper">
                <div>
                    <Users getUser={getUser}/>
                </div>
                <div>
                    {user && <UserDetails user={user}/>}
                </div>
            </div>
        </div>
    );
}

export default App;
