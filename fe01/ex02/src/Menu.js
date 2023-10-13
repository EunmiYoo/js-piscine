import {Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import "./Menu.css"
import Login from './Login';

export default function Menu(){
    return (
        <div>
        <ul>
            <li><Link to="/login">로그인</ Link></li>
            <li><Link to="/home">홈</ Link></li>
        </ul>
        <Routes>
            <Route path="/login"element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
        </Routes>
    </div>
    )
}