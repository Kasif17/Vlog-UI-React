import "./topbar.css"
import img from "./images.png"
import { Link } from "react-router-dom"
export default function Topbar() {
  const user =false;
  return (
    <div className='top'>
       <div className="topLeft">
       <i  className="topIcon fa-brands fa-facebook"></i>
       <i className="topIcon fa-brands fa-instagram"></i>
       <i className="topIcon fa-brands fa-twitter"></i>
       <i className="topIcon fa-brands fa-pinterest"></i>
       </div>
       <div className="topCenter">
       <ul className="topList">
        <li className="topListItem">
          <Link className="link" to="/">Home</Link>
          </li>
        <li className="topListItem">
        <Link className="link" to="/about">About</Link>
        </li>
        <li className="topListItem">
        <Link className="link" to="/">CONTECT</Link>
        </li>
        <li className="topListItem" to ="/write">
        <Link className="link" to="/write">WRITE</Link>
        </li>
        <li className="topListItem">
       {user && "LOGOUT"}
        </li>
       </ul>
       </div>
       <div className="topRight">
        {
          user ?(
            <img src={img} alt="" className="topImg" />
          ) :(
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to ="/login">LOGIN
                </Link>
              </li>
              <li>
                <Link className="link" to ="/register">REGISTER
                </Link>
              </li>
            </ul>
          )
        }
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div> 
    </div>
  )
}
