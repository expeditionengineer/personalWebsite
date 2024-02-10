import { NavBarContext } from "./index.tsx";
import { useContext } from "react";

export default function Content() {
  const { content } = useContext(NavBarContext);
  return (

      <div>{content}</div>
      
  )
}
