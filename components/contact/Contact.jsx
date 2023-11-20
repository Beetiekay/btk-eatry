import "../contact/Contact.css";


const Contact = () =>{
    return(
      <>
        <div className="contact">
         <div className="contact-container">
            <div className="first-text">
                <h1>Feel Free To</h1>
                <h2><span>Conatct</span> Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem dignissimos. 
                consectetur adipisicing elit.<br/> Sapiente, quidem dignissimos.Inventore alias earum eligendi?</p>
            </div>
            <div className="second-form">
                <div className="form-inner">
                    <div className="first-input">
                        <input type="name" name="name" placeholder=" firsrt name"/>
                        <input type="name" name="Sname" placeholder=" second name"/>
                    </div>
                    <div className="second-input">
                       <input type="email" name="email" placeholder=" Enter your email"/>
                       <input type="password" name="password" placeholder=" Password"/>
                    </div>
                </div>
                <textarea placeholder=" Write a Message Here..."></textarea>
            </div>
            <button type="send" className="btn">Send Message</button>
         </div>
        </div>
      </>
    )
  };
  
  export default Contact;