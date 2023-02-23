import "./posts.scss"
import Post from "../../components/post/Post"

const Posts = () => {

  const posts = [
    {
      id:1,
      name: "Jhon Doe",
      userId:1,
      profilePic: "https://images.pexels.com/photos/5356249/pexels-photo-5356249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc:"kjdfhsd ksdfkjskdfj osdfasdlfkasldkfjl",
      img:"https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:2,
    name: "Jhon Doe",
    userId:2,
    profilePic: "https://images.pexels.com/photos/5356249/pexels-photo-5356249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc:"kjdfhsd ksdfkjskdfj osdfasdlfkasldkfjl",
    
  },
  
  ];

  return <div className="posts">
      {posts.map(post=>(
        
          <Post post={post} key={post.id}/>
        
      ))}
    </div>
  
}

export default Posts
