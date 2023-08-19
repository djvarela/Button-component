import { Link } from "react-router-dom";
import  logo from "../assets/devchallenges.png" 

export const Aside = () => {
  return (
    <aside>
      <div className="log">

     <img src={logo} width="40px" alt="" />

      </div>
     
      <nav>
        <ul>
       
          <li>
            <Link to={"/"}>Buttons</Link>  
          </li>
          <li>
            <Link to={"./inputs"}>Inpus</Link>
          </li>
        
        </ul>
      </nav>
    </aside>
  );
};
