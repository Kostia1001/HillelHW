import { useContext } from "react";
import { Context } from "../App";

const Card = () => {
  const user = useContext(Context);

  return <div>Card: {user.name}</div>;
};

export default Card;
