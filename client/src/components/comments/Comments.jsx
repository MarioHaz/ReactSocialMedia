import "./comments.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Comments = () => {

  const { currentUser } = useContext(AuthContext);

    const comments = [
        {
          id:1,
          name: "Jhon Doe",
          userId:1,
          profilePicture: "https://images.pexels.com/photos/5356249/pexels-photo-5356249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          desc:"kjdfhsd ksdfkjskdfj osdfasdlfkasldkfjl",
          
      },
      {
        id:2,
        name: "Jhon Doe",
        userId:2,
        profilePicture: "https://images.pexels.com/photos/5356249/pexels-photo-5356249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"kjdfhsd ksdfkjskdfj osdfasdlfkasldkfjl",
        
      },
      
      ];
  return (
    <div className="comments">
      <div className="write">
      <img src={currentUser.profilePic} alt=""/>
      <input type="text" placeholder="Escribe tu comentario..."/>
      <button>Enviar</button>
      </div>
      {comments.map(comment =>(
            <div className="comment">
                <img src={comment.profilePicture} alt=""/>
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">Hace 1 hora</span>
            </div>
        ))
        }
    </div>
  )
}

export default Comments
