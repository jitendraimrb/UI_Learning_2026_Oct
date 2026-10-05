import "./App.css";
import { useState } from "react";
import LoginComponent from "./components/LoginComponent";
import EmployeeComponent from "./components/EmployeeComponent";

function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <>
            {
                loggedIn
                    ? <EmployeeComponent onLogout={handleLogout} />
                    : <LoginComponent onLoginSuccess={handleLogin} />
            }
        </>
    );
}

export default App;