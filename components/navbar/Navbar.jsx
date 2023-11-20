import "../navbar/Navbar.css";
import logo from "../navbar/assets/v10.png";
import {AiFillApple, AiFillFacebook, AiFillInstagram, AiOutlineClose, AiOutlineMenu} from "react-icons/ai";



const Navbar = () =>{
    return(
      <>
        <div className="nav-bar">
          <div className="logo-header"><img src={logo}/> <h2><span>Btk</span>-eatery</h2>
       </div>
            <div className="link">
             <a href="#"><AiFillApple/></a>               
             <a href="#"><AiFillInstagram/></a>              
             <a href="#"><AiFillFacebook/> </a>             
            </div>
             <input type="checkbox" id="check"></input>

              <span className="menu">
              <a href="#">Home</a>
              <a href="#">Gallery</a>
              <a href="#">Emails</a>
              <a href="#">About</a>
        <label For="check" className="close-menu"><AiOutlineClose/></label>
      </span>
          <label For="check" className="open-menu"><AiOutlineMenu/></label>
     </div>
      </>
    )
  };
  
  export default Navbar;