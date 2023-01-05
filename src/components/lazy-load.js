/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles/typography";
import React from "react";
import { Spinner } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div`
max-width: 480px;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center
`

const CardCircular = styled.div`
max-width: 262px;
max-height: 262px;
position: absolute;
overflow: hidden;
background-color: #FFFFFF;
border-radius: 120px;
margin: auto;
`

const LogoImagen = styled.div`
max-width: 360px;
margin-top: 86px;
margin-bottom: 12px;
margin-left: 40px;
margin-right: 40.51px;
`

const FraseLogo = styled.div`
font-size: 10px;
color: orange;
margin-bottom: 26.08px;
font-family: ${fonts.secondary};
line-height: 8.68px;
font-weight: 600;
`

function ComponentLazyLoad() {
	return (
		<Wrapper>
			<img src={require("../static/img/lazy-load/fondoLazy.png")}/>
			<CardCircular>
			<div css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				`}>
				<LogoImagen>
					<img src={require("../static/Eatable.png")}/>
				</LogoImagen>
				<FraseLogo>Food for Everyone</FraseLogo>
				<Spinner css={css`margin-bottom: 40.39px;`} color="warning"/>
				</div>
			</CardCircular>
		</Wrapper>
	);
}

export default ComponentLazyLoad;