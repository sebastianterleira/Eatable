/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "./styles/typography";
import { colors, typography } from "../src/styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";

const Wrapper = styled.div`
max-width: 480px;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center
`

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
	gap: 131px;
`;

const CardWhite = styled.div`
border-bottom-left-radius: 30px;
border-bottom-right-radius: 30px;
box-shadow: 15px 5px 10px #48529944;
overflow: hidden;
background-color: #FFFFFF;
max-width: 100%;
margin-bottom: 50px;
`

const LogoImagen = styled.div`
max-width: 360px;
margin-top: 140px;
margin-bottom: 12px;
margin-left: 117px;
margin-right: 116.51px;
`

const FraseLogo = styled.div`
font-size: 10px;
color: orange;
margin-bottom: 119px;
font-family: ${fonts.secondary};
line-height: 8.68px;
font-weight: 600;
`

const CustomButton = styled.button`
background: none;
border:none;
color: #2
font-size: 16px;
font-weight: 700;
line-height: 20px;
`

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  display: flex;
  gap: 0.75rem;
  text-decoration: none;
  ${typography.text.md};
	font-family: ${fonts.secondary};
  color:	#000;
  font-weight: 500;
  align-items: center;
  border-radius: 0.375rem;
  text-decoration: none;
	position: relative;
  &:before {
		content: "";
		border-bottom: 3px solid orange;
		position: absolute;
		bottom: -0.50px;
		width: 60%;
		left: 0;
		opacity: 0;
		transition: 0.2s;
  }

	&:hover::before {
		opacity: 1;
		width: 100%;
  }
	.activo::before {
		opacity: 1;
		width: 100%;
	}
`;

function NavLoginSignUp() {
  const nave = [
		{
			id: "nv1",
			name: "Login",
			to: "/login",
		},
		{
			id: "nv2",
      name: "Sign-up",
      to: "/signup",
    },
  ];

  return (
    <Wrapper2>
      {nave.map((nav) => (
    <StyledNavLink
			key={nav.id}
      to={nav.to}
      style={({ isActive }) => {
        if (!isActive) return;
        return {
        };
      }}
    >
      {nav.icon}
      {nav.name}
    </StyledNavLink>
      ))}
    </Wrapper2>
  );
}

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState(true);

  function handleLinkChange(event) {
    event.preventDefault();
    setShowLogin(!showLogin)
  }

  return (
    <Wrapper>
			<CardWhite>
				<div css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				`}>
					<LogoImagen>
						<img src={require("../src/static/Eatable.png")}/>
					</LogoImagen>
					<FraseLogo>Food for Everyone</FraseLogo>
					<CustomButton onClick={handleLinkChange}>
						<NavLoginSignUp/>
					</CustomButton>
				</div>
			</CardWhite>
			<Routes>
					<Route path="/">
						<Route exact path="login" activeClassName="activo" element={<LoginForm/>} />
						<Route exact path="signup" activeClassName="activo" element={<SignupForm/>} />
					</Route>
    </Routes>
    </Wrapper>
  )
}

export default UnauthenticatedApp;