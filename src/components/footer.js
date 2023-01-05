import styled from "@emotion/styled";
import { TiHome } from "react-icons/ti";
import { BiUser } from "react-icons/bi";
import { BiHistory } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = styled("footer")`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px 16px;
  gap: 45px;
  width: 100%;
  height: 100%;
  box-shadow: 0px -2px 0px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
`;

function Footer() {
  return (
    <Navbar>
      <Link to={"/products"}>
        <TiHome style={{height:43,width:43,color:"#BDBDBD"}}/>
      </Link>
      <Link to={"/"}>
        <BiUser style={{height:43,width:43,color:"#828282"}}/>
      </Link>
      <Link to={"/orders"}>
        <BiHistory style={{height:43,width:43,color:"#BDBDBD"}} />
      </Link>
    </Navbar>
  );
}

export default Footer;
