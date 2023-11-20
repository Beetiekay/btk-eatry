import "../menu/Menu.css";


const Menu = () =>{
    return (
        <>
       <div className="body">
        <ul className="accordion">
            <li>
                <input type="radio" name="accordion" id="first" checked/>
                <label for="first">Products</label>
                <div className="content">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quas in temporibus voluptatem fugit distinctio fugiat voluptates, eligendi quibusdam, pariatur tempore modi nihil. Tenetur esse voluptatem voluptatum veritatis ipsum sequi eius repellat est, minima, doloribus placeat. Impedit voluptatem eum ipsum.</p>
                </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="second"/>
                <label for="second">Information</label>
                <div className="content">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quas in temporibus voluptatem fugit distinctio fugiat voluptates, eligendi quibusdam, pariatur tempore modi nihil. Tenetur esse voluptatem voluptatum veritatis ipsum sequi eius repellat est, minima, doloribus placeat. Impedit voluptatem eum ipsum.</p>
                </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="third"/>
                <label for="third">Questions</label>
                <div className="content">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quas in temporibus voluptatem fugit distinctio fugiat voluptates, eligendi quibusdam, pariatur tempore modi nihil. Tenetur esse voluptatem voluptatum veritatis ipsum sequi eius repellat est, minima, doloribus placeat. Impedit voluptatem eum ipsum.</p>
                </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="fourth"/>
                <label for="fourth">Guides</label>
                <div className="content">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quas in temporibus voluptatem fugit distinctio fugiat voluptates, eligendi quibusdam, pariatur tempore modi nihil. Tenetur esse voluptatem voluptatum veritatis ipsum sequi eius repellat est, minima, doloribus placeat. Impedit voluptatem eum ipsum.</p>
                </div>
            </li>

        </ul>
       </div>
        </>
)
};


export default Menu;