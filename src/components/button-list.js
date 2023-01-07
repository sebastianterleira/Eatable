import styled from "@emotion/styled";
import { typography } from "../styles"; 
import { fonts } from "../styles";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
	gap: 4px;
`;

const CustomButton = styled.button`
background: none;
border:none;
color: #000
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
			<div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
			{ categories.map((category) => (
				<CustomButton>
					<StyledNavLink
					key={`dish ${category}`}
					type="button"
					onClick={() => filterCategory(category)}
					>
						{category}
					</StyledNavLink>
				</CustomButton>
				))}
			</div>
		</Wrapper>
	);
}

export default ButtonList;