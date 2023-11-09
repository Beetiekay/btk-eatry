import "../about/About.css";
import image1 from "./assets/p5.jpg";
import image2 from "./assets/p6.jpg";



const About = () =>{
    return(
      <>
      <div className="about-container">

        <div className="about-text">
                 <h1>Know More</h1>
                 <h2>Everything</h2>
                 <span>About Us</span>
          <p>
            Lorem ipsum dolor sit amet, consecteturadipisicing elit.
            <br/>obcaecati earum odio sit veritatis magnam 
            <br/>saepe vel maxime, tempora iu
          </p>
                       <button type="" className="btn">Know More</button>
        </div>

        <div className="about-image"> 
            <div className="left-img"><img src={image2}/></div>
        </div>
      </div>
      </>
    )
  };
  
  export default About;