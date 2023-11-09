import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Home.css";
import delicious from "../navbar/assets/v1.png";



const Home = () =>{
    return(
      <>
      <div className="home">
        <div className="main-menu">
          <h2>Welcome To Our Restaurant !</h2>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, ut est iste odit reiciendis vero vitae tempora molestias dolore, quos ducimus<br/> cupiditate earum voluptatem et accusamus explicabo placeat quidem nobis!</p>
          <div className="read">Read more...</div>
         <div className="shopping"><AiOutlineShoppingCart/>
         </div>
          <h1>Place your order.</h1>
        </div>
        
        <hr/>

        <div className="side-picture">
          <h2>Is This Your Favourite !</h2>
          <p>So We are Here To Make You Happy With Our Care And Skills For Cooking A Delicious One.</p>
          <div className="img"><img src={delicious}/>
          <h1>(1) Burger</h1>
          </div>
        </div>
      </div>
      </>
    )
  };
  
  export default Home;