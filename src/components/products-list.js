/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles/typography";

const ContainerCard = styled("div")`
  display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(2, 156px);
	grid-auto-rows: minmax(212px, auto);
`

const CardData = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
background-color: #FFFFFF;
border-radius: 20px;
margin-bottom: 45px;
margin-top: 9px;
position: relative;
overflow: hidden;
  transition: all 400ms ease;
  &:hover {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transform: translateY(-3%);
  }
`;

const ImagenProduct = styled("img")`
left: 13px;
left: 8.33%;
right: 8.33%;
top: 0%;
bottom: 48%;
width: 130px;
height: 130px;
border-radius: 65px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`


const ProductName = styled.p`
margin-left: 13px;
margin-right: 13px;
margin-top: 12px;
margin-bottom: 8px;
font-family: ${fonts.secondary};
font-weight: 600;
font-size: 22px;
line-height: 27.65px;
text-align: center;
`

const ProductPrice = styled.p`
margin-bottom: 30px;
font-family: ${fonts.secondary};
font-weight: 600;
font-size: 22px;
line-height: 27.65px;
color: orange;
`

function ProductList({products}) {
	console.log(products)
	return (
		<ContainerCard>
				{products &&
						products.map((product)=>(
						<CardData key={product.id}>
							<ImagenProduct src={product.picture_url}/>
							<div css={css`display: flex;`}>
								<ProductName>{product.name === null ? "No content" : product.name}</ProductName>
							</div>
							<ProductPrice>{String(product.price).split("").length === 3 ? "$" + String(product.price).split("").slice(0, -2).join("") + "," + String(product.price).split("").slice(1).join("") : String(product.price).split("").length === 2 ? "$" + String(product.price).split("").slice(0, -1).join("") + "," + String(product.price).split("").slice(1).join("") + "0" : "$" + String(product.price).split("").slice(0, -2).join("") + "," + String(product.price).split("").slice(2).join("")}</ProductPrice>
						</CardData>
					))}
		</ContainerCard>
	);
}

export default ProductList;