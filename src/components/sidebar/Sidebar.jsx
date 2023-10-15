import "./sidebar.css"
import messi1 from "./messi1.jpg"
export default function Sidebar() {
  return (
    <div className="sidebar">
     <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img className="sidebarImg" src={messi1} alt="" /> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, sint! Ullam voluptas, eaque nihil nesciunt accusamus veniam harum, hic totam quibusdam dicta ipsum excepturi suscipit fuga a ducimus quod odit?</p>    
     </div>
     <div className="sidebarItem">
        <span className="sidebarTitle">Catagories</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
     </div>
     <div className="sidebarItem">
        <span className="sidebarTitle">Follow US</span>
        <div className="sidebarSocail">
        <i  className="sidebarIcon fa-brands fa-facebook"></i>
       <i className="sidebarIcon fa-brands fa-instagram"></i>
       <i className="sidebarIcon fa-brands fa-twitter"></i>
       <i className="sidebarIcon fa-brands fa-pinterest"></i>
        </div>
     </div>
    </div>
  )
}
