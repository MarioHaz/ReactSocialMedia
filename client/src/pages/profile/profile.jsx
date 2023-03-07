import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";


const Profile = () => {
  return (
  <div className="profile">
    <div className="images">
      <img src="https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="cover"/>
      <img src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="profilePic"/>
    </div>
    <div className="profileContainer">
      <div className="uInfo">
        <div className="left">
          <a href="http://facebook.com">
            <FacebookTwoToneIcon fontSize="medium"/>
          </a>
          <a href="http://facebook.com">
            <LinkedInIcon fontSize="medium"/>
          </a>
          <a href="http://facebook.com">
            <InstagramIcon fontSize="medium"/>
          </a>
          <a href="http://facebook.com">
            <PinterestIcon fontSize="medium"/>
          </a>
          <a href="http://facebook.com">
            <TwitterIcon fontSize="medium"/>
          </a>
        </div>
        <div className="center">
          <span>Legal Tech</span>
          <div className="info">
            <div className="item">
              <PlaceIcon/>
              <span>Medellin, ANT</span>
            </div>
            <div className="item">
              <LanguageIcon/>
              <span>Emp.dev</span>
            </div>
          </div>
          <button>Me interesa</button>
        </div>
        <div className="right">
          <EmailOutlinedIcon/>
          <MoreVertIcon/>
        </div>
      </div>
      <Posts/>
    </div>
    
  </div>
  )
};

export default Profile;
