import "./post.css"
import Pic1 from "./Vlog1.jpeg"
export default function Post() {
  return (
    <div className="post">
     <img className="postImg" src={Pic1} alt="" />
     <div className="postInfo">
       <div className="postCats">
        <span className="postCat">Music</span>
        <span className="postCat">Life</span>
       </div>
       <span className="postTitle">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatibus doloremque,
       </span>
       <hr />
       <span className="postDate">1 Hour Ago</span>
     </div>
     <p className="postDesc">Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Tenetur sint consectetur
       autem laudantium veniam animi molestiae modi, 
       amet eveniet delectus odit blanditiis a nobis nulla,
      cum quo necessitatibus. Aut, aliquid.
      Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Tenetur sint consectetur
       autem laudantium veniam animi molestiae modi, 
       amet eveniet delectus odit blanditiis a nobis nulla,
      cum quo necessitatibus. Aut, aliquid.
      Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Tenetur sint consectetur
       autem laudantium veniam animi molestiae modi, 
       amet eveniet delectus odit blanditiis a nobis nulla,
      cum quo necessitatibus. Aut, aliquid.</p>
      </div>
  )
}
