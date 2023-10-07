import ChatApp from "../../screens/ChatScreen";
import Login from "../../screens/Login"
import Signup from "../../screens/Signup"
import Protected from "../../screens/protected";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



export default function AppRouter() {
    return (
        <Router>
            <>
                <Routes>
                   
                  
                    {/* <Route path="/" element={<Protected Screen={ChatApp} />} /> */}
                    <Route path="/" element={<ChatApp />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={< Signup />} />
                   
                </Routes>
            </>
        </Router>

    )
}