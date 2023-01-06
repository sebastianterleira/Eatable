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
  padding: 0.5rem;
  gap: 121px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

function Footer() {
  return (
    <Navbar>
      <Link to={"/"}>
        <TiHome style={{height:24.8,width:24.76,color:"#ADADAF"}}/>
      </Link>
      <Link to={"/profile-page"}>
        <BiUser style={{height:24.8,width:24.76,color:"#ADADAF"}}/>
      </Link>
      <Link to={"/history"}>
        <BiHistory style={{height:21.75,width:25.38,color:"#ADADAF"}}/>
      </Link>
    </Navbar>
  );
}

export default Footer;
