/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles/typography";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { useEffect, useState } from "react";
import { showProduct } from "../services/product-services";
import { colors } from "../styles";

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
margin-right: 245px;
`

const ImagenProduct = styled("img")`
left: 13px;
left: 8.33%;
right: 8.33%;
top: 0%;
bottom: 48%;
width: 241px;
height: 241px;
border-radius: 50%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
margin-bottom: 91px;
`

const NameDish = styled.p`
font-family: ${fonts.secondary};
font-weight: 600;
font-size: 28px;
line-height: 35.2px;
`

const ProductPrice = styled.p`
margin-top: 10px;
margin-bottom: 27px;
font-family: ${fonts.secondary};
font-weight: 600;
font-size: 28px;
line-height: 35.2px;
color: #FA4A0C;
`

const ContainerDescription = styled.div`
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

const Content = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
`

const Tittle = styled.p`
font-family: ${fonts.secondary};
font-weight: 600;
font-size: 18px;
line-height: 22.63px;
`

const Description = styled.p`
font-family: ${fonts.secondary};
font-weight: 400;
font-size: 16px;
line-height: 20.11px;
`

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

function ProductPreview() {
	const history = useNavigate();
	const { id } = useParams();
	const [state, setState] = useState({
		status: null,
		data: null,
		error: null,
	});
	const {status, data: dish, error} = state;

	useEffect(()=> {
		setState({
		status: "pending",
		data: null,
		error: null,
		});
		showProduct(id)
			.then((data) => {
				setState({ status: "success", data: data, error: null });
			})
			.catch((error) => {
				setState({
					status: "error",
					data: null,
					error: "Intenta de nuevo o perdio Conexion 💀",
				});
			});
	}, []);

	console.log(dish)
	console.log(id)
  return (
		<Wrapper>
			<ContentTittle>
			<button onClick={() => history(-1)} css={css`border-width: 0; padding: 0;`}>
				<MdArrowBackIosNew/>
			</button>
			</ContentTittle>
			<ImagenProduct src={dish?.picture_url} alt={dish?.name}/>
			<NameDish>{dish?.name}</NameDish>
			<ProductPrice>{String(dish?.price).split("").length === 3 ? "$" + String(dish?.price).split("").slice(0, -2).join("") + "," + String(dish?.price).split("").slice(1).join("") : String(dish?.price).split("").length === 2 ? "$" + String(dish?.price).split("").slice(0, -1).join("") + "," + String(dish?.price).split("").slice(1).join("") + "0" : "$" + String(dish?.price).split("").slice(0, -2).join("") + "," + String(dish?.price).split("").slice(2).join("")}</ProductPrice>
			<ContainerDescription>
				<Content>
					<Tittle>Description</Tittle>
					<Description>{dish?.description}</Description>
				</Content>
			</ContainerDescription>

			<ButtonSingUp>Add to card</ButtonSingUp>
		</Wrapper>
	);
}

export default ProductPreview