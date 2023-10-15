import "./singlePost..css"
import pic2 from "../post/vlog2.jpg"
export default function SinglePost() {
  return (
    <div className="singlePost">
    <div className="singlePostWrapper">
        <img className="singlePostImg" src={pic2} alt="" />
        <h1 className="singlePostTitle">Lorem, ipsum.
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlPostAuthor">Author: <b>Mohd. Kasif Khan</b></span>
            <span className="singlPostDate">2 Hour Ago</span>       
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem sint, excepturi fuga ut magni assumenda vero distinctio quos reprehenderit magnam repudiandae dignissimos impedit a cumque vel quam, placeat pariatur doloribus illum deserunt. Ut quidem sit assumenda quis molestias magni neque asperiores dignissimos, autem expedita consequuntur eius! Expedita velit quibusdam labore quaerat dolores cupiditate ab reprehenderit possimus soluta, sapiente unde consequatur tempore nisi perspiciatis, cumque rem, deleniti dolor nobis amet culpa inventore nihil! Quae quo optio veritatis enim ducimus fuga voluptatem saepe maxime. Laudantium, ab sint odit perferendis voluptatibus nesciunt voluptas inventore atque quas. Delectus repellendus sunt repudiandae commodi, fugiat culpa debitis, eligendi inventore pariatur reiciendis quibusdam id dolorum ipsum exercitationem autem quisquam praesentium iusto? Recusandae et, autem totam est, accusantium repellendus sit labore laboriosam veniam quaerat voluptatum quia ipsum! Molestias sunt, deserunt rerum quasi quas dolorum cumque maiores numquam officiis nemo quaerat, ea expedita fugit minima ex commodi ipsa nobis debitis provident ratione nam at! Vero minus non quas nisi culpa voluptatibus hic nemo modi eius error ullam recusandae ipsa, voluptatem dolores, amet nostrum veritatis repudiandae? Et, odio molestiae. Laudantium, repellat. Vero quis cumque, vel, expedita magni incidunt cum alias sit quaerat itaque recusandae voluptatum quod nam aut harum consequatur.
        </p>
    </div>

    </div>
  )
}
