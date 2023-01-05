/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Input from "./input";
import { colors } from "../styles";
import styled from "@emotion/styled";
import { fonts } from "../styles/typography";

const ButtonSingUp = styled.button`
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
margin-top: 100px;
margin-bottom: 40px;
&:hover{
  background: #ff8c00;
}
`

function SignupForm() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    signup(formData);
  }

  return (
    <div>
      <form css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
      `}
      onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="my_mail@mail.com"
          label="Email address"
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="*******"
          label="Password"
        />
        <ButtonSingUp type="submit">Create Account</ButtonSingUp>
      </form>
    </div>
  );
}

export default SignupForm;
