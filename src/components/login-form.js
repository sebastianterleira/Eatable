import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Input from "./input";
import styled from "@emotion/styled";
import { colors } from "../styles";
import { fonts } from "../styles/typography";

const Form =styled.form`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  `

const ButtonLogin = styled.button`
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

function LoginForm() {
  const { login } = useAuth();
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

    login(formData);
  }

  return (
      <Form onSubmit={handleSubmit}>
        <DivContainer>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="my_mail@mail.com"
            label="Email address"
          />
        </DivContainer>
        <DivContainer>
          <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="*******"
          label="Password"
          />
        </DivContainer>
        <ButtonLogin type="submit">Login</ButtonLogin>
      </Form>
  
  );
}

export default LoginForm;
