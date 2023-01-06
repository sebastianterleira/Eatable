/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles/typography";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../styles";
import { useAuth } from "../context/auth-context";
import { useState } from "react";

const Wrapper = styled.div`
max-width: 480px;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center
`

const ContentTittle = styled.div`
display: flex;
align-items: center;
padding: 50px;
`

const Tittle = styled.div`
font-family: ${fonts.secondary};
font-weight: 600;
font-size: 22px;
line-height: 27.65px;
margin-right: 70px;
`

const ContentUpdated = styled.div`
display: flex;
align-items: center;
gap: 100px; 
`

const TextParraf = styled.div`
font-family: ${fonts.secondary};
font-weight: 600;
font-size: 18px;
line-height: 22.63px;
`

const CardWhite = styled.div`
left: 42px;
top: 144px;
width: 315px;
height: 197px;
overflow: hidden;
background-color: #FFFFFF;
border-radius: 20px;
margin-bottom: 45px;
margin-top: 9px;
`

const NameUser = styled.div`
margin-top: 18px;
margin-left: 16px;
font-family: ${fonts.secondary};
font-weight: 600;
font-size: 18px;
line-height: 22.63px;
`

const InfoUser = styled.div`
font-family: ${fonts.secondary};
font-weight: 400;
font-size: 16px;
line-height: 20.11px;
margin-top: 10px;
margin-left: 14px;
color: #B8B8BB;
padding: 0;
`

const HorizontalLine = styled.div`
	border-top: 1px solid #B8B8BB;
	height: 2px;
	padding: 0;
	margin: 5px auto 0 auto;
	width: 280px;
`

const CardWhiteHistory = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
left: 42px;
top: 144px;
width: 315px;
height: 60px;
overflow: hidden;
background-color: #FFFFFF;
border-radius: 20px;
`

const WrapperButton = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 202px;
`

const ButtonText = styled.div`
font-family: ${fonts.secondary};
font-weight: 600;
font-size: 18px;
line-height: 22.63px;
`

const ButtonLogout = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
  background: #ff8000;
  border-radius: 30px;
  border:none;
	width: 310px;
	gap: 10px;
	height: 70px;
  color: ${colors.white};
	font-family: ${fonts.third};
	line-height: 22.63px;
	font-weight: 600;
  padding: 12px, 16px, 12px, 16px;
  &:hover{
    background: #ff8c00;
  }
`


function ProfilePage() {
	const history = useNavigate()
	const { logout } = useAuth();
  const {user, setUser} = useAuth();
	const [data, setData] = useState({...user, password:""})

	return(
		<Wrapper>
			<ContentTittle>
				<div css={css`margin-right: 60px;`}>
					<button onClick={() => history(-1)} css={css`border-width: 0; padding: 0;`}>
						<MdArrowBackIosNew/>
					</button>
				</div>
				<Tittle>
					My Profile
				</Tittle>
			</ContentTittle>
			<ContentUpdated>
				<TextParraf>
					Personal Details
				</TextParraf>
				<Link css={css`
				text-decoration:none;
				color: #FA4A0C;
				&:hover,
				&:focus {
					color: #ff8c00;
				};
				`} to={"/updated-profile"}>
					change
				</Link>
			</ContentUpdated>
			<CardWhite>
				<div css={css`
				display: flex;
				flex-direction: column;
				`}>
					<NameUser>{data.name === null ? "No tengo Nombre" : data.name}</NameUser>
					<InfoUser>{data.email === null ? "No tengo email" : data.email}</InfoUser>
					<HorizontalLine/>
					<InfoUser>{data.phone === null ? "No tengo phone" : data.phone}</InfoUser>
					<HorizontalLine/>
					<InfoUser>{data.address === null ? "No tengo address" : data.address}</InfoUser>
				</div>
			</CardWhite>
			<div css={css`
			display: flex;
			flex-direction: column;
			gap: 285px;
			`}>
			<Link css={css`
				text-decoration:none;
				color: #000;
				&:hover,
				&:focus {
					color: #000;
				};
				`}
			to={"/history"}
			>
			<CardWhiteHistory>
				<WrapperButton>
					<ButtonText>History</ButtonText>
					<MdArrowForwardIos/>
				</WrapperButton>
			</CardWhiteHistory>
			</Link>
			<ButtonLogout onClick={() => logout()}>Logout</ButtonLogout>
			</div>
		</Wrapper>
	);
}

export default ProfilePage;