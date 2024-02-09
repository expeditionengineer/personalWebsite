import { useContext }  from 'react';

import { NavBarContext } from './index.js';



export default function NavBar() {
  const {setContent} = useContext(NavBarContext);
  function handleClick(event) {
    const clickedText = event.target.textContent;
    
    switch (clickedText) {
      case "Home":
        setContent("Home");
        break;
      case "About me":
        setContent("About me");
        break;
      case "Projects":
        setContent("Projects");
        break;
      case "Blog":
        setContent("Blog");
        break;
      default:
        // Handle any other cases if needed
        break;
    }
  }
  return(
    <div>
      <ul>
        <a href="#" onClick={handleClick}><li>Home</li></a>
        <a href="#" onClick={handleClick}><li>About me</li></a>
        <a href="#" onClick={handleClick}><li>Projects</li></a>
        <a href="#" onClick={handleClick}><li>Blog</li></a>
      </ul>
    </div>
  )
}
