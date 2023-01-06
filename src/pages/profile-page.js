/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles/typography";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";


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

function ProfilePage() {
	const history = useNavigate()
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
		</Wrapper>
	);
}

export default ProfilePage;