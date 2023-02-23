import { AuthContext } from "../../context/authContext";
import "./Stories.scss";
import {useContext} from "react";

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    const stories = [{
        id:1,
        name: "Jhon Doe",
        img: "https://images.pexels.com/photos/5356249/pexels-photo-5356249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:2,
        name: "Jhon Doe",
        img: "https://images.pexels.com/photos/5356249/pexels-photo-5356249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:3,
        name: "Jhon Doe",
        img: "https://images.pexels.com/photos/5356249/pexels-photo-5356249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:4,
        name: "Jhon Doe",
        img: "https://images.pexels.com/photos/5356249/pexels-photo-5356249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
];

  return (
    <div className="stories">
        <div className="story">
            <img src={currentUser.profilePic}/>
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
            <img src={story.img}/>
            <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
