import { Link } from "react-router-dom";
import  logo from "../assets/devchallenges.png" 

export const Aside = () => {
  return (
    <aside>
      <div className="logo">

     <img src={logo} width="40px" alt="devChallenges.io logo" />
    <a href="https://devchallenges.io" target="_blanck"><span>dev</span>Challenges.io</a>
      </div>
     
      <nav>
        <ul>
       
          <li>
            <a href="./index.html">Buttons</a>
   
          </li>
          {/* <li>
         
            <a href="./inputs">Inputs</a>
          </li> */}
        
        </ul>
      </nav>
    </aside>
  );
};
