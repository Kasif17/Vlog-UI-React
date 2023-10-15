import "./header.css"
import img1 from "../header/messi.jpg"
export default function Header() {
  return (
    <div className="header">
        <div className="headerTittles">
            <span className="headerTittleSm">React & Node</span>
            <span className="headerTittleLg">Vlog</span>
        </div>
        <img className="headerImg" src={img1} alt="" />
    </div>
  )
}
