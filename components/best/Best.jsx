import "../best/Best.css";
import { BsQrCodeScan} from "react-icons/bs";


const Best = () =>{
    return(
      <>
        <div className="best-content">
          <div className="container-b">
             <h1>Tasty Style</h1>
             <h2>Why We The Best</h2>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita dolore, ratione facilis fuga  perspiciatis explicabo earum quo nesciuntLorem ipsum dolor sit,<br/> amet consectetur adipisicing elit. Expedita dolore, ratione facilis fuga  perspiciatis explicabo earum quo nesciunt!</p>
             <div className="icon"><BsQrCodeScan/>
             <p>Scan Us</p></div>
       </div>
      </div>
          
      </>
    )
  };
  
  export default Best;