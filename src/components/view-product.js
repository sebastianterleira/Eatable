/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../styles/typography";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { useEffect, useState } from "react";
import { showProduct } from "../services/product-services";

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
			<ImagenProduct/>
		</Wrapper>
	);
}

export default ProductPreview