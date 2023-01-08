/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { typography } from "../styles"; 
import { fonts } from "../styles";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
	max-width: 480px;
  display: flex;
  flex-direction: row;
	overflow-x: auto;
	&::-webkit-scrollbar {
    width: 8px;     /* Tamaño del scroll en vertical */
    height: 8px;    /* Tamaño del scroll en horizontal */
}
	&::-webkit-scrollbar-thumb {
		background: #FA4A0C;
    border-radius: 4px;
	}
`;

const CustomButton = styled.button`
background: none;
border:none;
color: #000
font-size: 16px;
font-weight: 700;
line-height: 20px;
display: flex;
flex-direction: row;
align-items: center;
gap: 40px;
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
    color: orange;
		opacity: 1;
		width: 100%;
  }
	.activo::before {
		opacity: 1;
		width: 100%;
	}
`;

function ButtonList({categories, filterCategory}) {
	console.log(categories)
	return (
		<Wrapper>
				<CustomButton>
			{ categories?.map((category) => (
					<StyledNavLink
					key={`dish ${category}`}
					type="button"
					onClick={() => filterCategory(category)}
					>
						{category}
						</StyledNavLink>
				))}
				</CustomButton>
		</Wrapper>
	);
}

export default ButtonList;