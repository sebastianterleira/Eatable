/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { fonts } from "../styles/typography";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../styles";
import { useAuth } from "../context/auth-context";
import { updateUser } from "../services/user-services";
import { tokenKey } from "../config";
import Input from "../components/input";

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
height: 250px;
overflow: hidden;
background-color: #FFFFFF;
border-radius: 20px;
margin-bottom: 45px;
margin-top: 9px;
padding: 15px;
gap: 2px;
`

const Form = styled.form`
display:flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 32px;
`

const HorizontalLine = styled.div`
	border-top: 1px solid #000;
	height: 2px;
	padding: 0;
	margin: 5px auto 0 auto;
	width: 280px;
`

const LabelForm = styled.label`
	font-family: ${fonts.secondary};
	color: #B8B8BB;
	line-height: 16.8px;
	font-weight: 600;
	font-size: 14px;
`
const StyledInput = styled("input")`
	background-color: #FFFFFF;
	::placeholder {
		line-height: 22.63px;
		font-weight: 400;
		font-size: 18px;
		font-family: ${fonts.third};
		color: #333333;
	}
	outline: none;
	border-style: none;
`;

const ButtonSubmit = styled.button`
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

function UpdatedProfile({item}) {
	const history = useNavigate()
	const {user, setUser} = useAuth();
  const [data, setData] = useState({...user, password:""})
  
  function handleSubmit(event){
    updateUser(data).then((response =>{
      setUser(response)
    })).catch(error=> console.log(error))
    sessionStorage.removeItem(tokenKey)
  }

  function handleChange(event){
    event.preventDefault();
    setData({...data, [event.target.name]: event.target.value})
  }

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
					Update personal Details
				</TextParraf>
			</ContentUpdated>
			<Form onSubmit={handleSubmit}>
			<CardWhite>
			<div css={css`
				display: flex;
				flex-direction: column;
				`}>
				<LabelForm htmlFor="name">Username</LabelForm>
        <StyledInput
          name="name"
          type="text"
          value={data.name === null ? "No tengo Nombre" : data.name}
          onChange={handleChange}
          placeholder={data.name === null ? "No tengo Nombre" : data.name}
        />
				<HorizontalLine/>
				<LabelForm htmlFor="name">Email</LabelForm>
        <StyledInput
          name="email"
          type="email"
          value={data.email === null ? "No tengo email" : data.email}
          onChange={handleChange}
          placeholder={data.email === null ? "No tengo email" : data.email}
        />
				<HorizontalLine/>
				<LabelForm htmlFor="name">Phone</LabelForm>
        <StyledInput
          name="phone"
          type="phone"
          value={data.phone === null ? "No tengo phone" : data.phone}
          onChange={handleChange}
					placeholder={data.phone === null ? "No tengo phone" : data.phone}
        />
				<HorizontalLine/>
				<LabelForm htmlFor="name">Address</LabelForm>
        <StyledInput
          name="address"
          type="address"
          value={data.address === null ? "No tengo address" : data.address}
          onChange={handleChange}
					placeholder={data.address === null ? "No tengo address" : data.address}
        />
				<HorizontalLine/>
				</div>
			</CardWhite>
        <ButtonSubmit type="submit">Update</ButtonSubmit>
      </Form>
		</Wrapper>
	);
}

export default UpdatedProfile;