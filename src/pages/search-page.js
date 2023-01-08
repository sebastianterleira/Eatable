/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { MdArrowBackIosNew } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fonts } from "../styles/typography";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonList from "../components/button-list";
import ProductList from "../components/products-list";
import { colors } from "../styles";

const Wrapper = styled.div`
max-width: 480px;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center
`

const ContentSearch = styled.div`
display: flex;
align-items: center;
padding: 30px;
`

const Input = styled.input`
background-color: #F2F2F2;
::placeholder {
	line-height: 22.63px;
	font-weight: 400;
	font-size: 18px;
	font-family: ${fonts.third};
	color: #ADADAF;
}
outline: none;
border-style: none;
  `
	
	function SearchPage({ onProfile }) {
	const [products, setProducts] = useState([]);
	const [tablaProducts, setTablaProducts] = useState([]);
  const [query, setQuery] = useState("");
	const [state, setState] = useState({
    status: "idle",
    data: null,
    error: null,
  });
  const { status, data: item, error } = state;
	
	useEffect(() => {
		if (query === "") return;
		setState({ status: "pending" })
		getProductsUser(query)
		.then((data) => {
				onProfile(data)
				setState({
					status: "success",
					data: data,
					error: null,
				});
			})
			.catch((error) => {
				console.log(error);
				setState({
					status: "error",
					data: null,
					error: "El usuario no existe! Intenta de nuevo o perdio Conexion 💀",
				});
			});
	}, [onProfile, query]);
	console.log(query)

	const getProductsUser = async()=> {
		await axios.get("https://react-eatable-api.herokuapp.com/products/")
		.then(response=>{
			setProducts(response.data);
			setTablaProducts(response.data);
		}).catch(error=>{
			console.log(error);
		})
	}
	
	useEffect(() => {
		getProductsUser();
		setState({ status: "success" })
	}, [])

	const filterSearch =(terminoBusqueda) => {
		var searchResults=tablaProducts.filter((elemento) => {
			if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
				return elemento;
			}
		});
		setProducts(searchResults);
	}

	console.log(filterSearch)

	let allCategories = products.reduce((accu, current) => {
    if (!accu.includes(current.category)) accu.push(current.category);

		return accu;
  }, ["All"]);

	console.log(allCategories)

	const filterCategory = (category) => {
		if(category === "All") {
			setProducts(tablaProducts)
			return;
}

		const filteredData = tablaProducts.filter(product => product.category === category)
		setProducts(filteredData);
	}

	const NoData = (
    <div css={css`margin-top: 210px; margin-bottom: 260px;`}>
      <FiSearch css={css`font-size: 110px; margin-bottom: 12px`} color={colors.gray} />
      <p css={css`font-size: 28xp; line-height: 35px; font-weight: 600; font-family: ${fonts.third};`}>No products found</p>
    </div>
  );

	return (
		<>
		<Wrapper>
			<ContentSearch>
				<div css={css`margin-right: 20px;`}>
				{products.length === 26 && (
				<FiSearch/>)}
				{products.length <= 25 && (
				<button onClick={() => window.location.reload()} css={css`border-width: 0; padding: 0;`}>
				<MdArrowBackIosNew color={colors.black} />
				</button>
				)}
						<Input
					onChange={(event) => filterSearch(event.target.value)}
          placeholder="Search"
					/>
        {status === "pending" && "DataPending" }
        {status === "error" && <p style={{ color: "red" }}>{error}</p>}
					<FiShoppingCart css={css`margin-left: 30px;`}/>
				</div>
			</ContentSearch>
		</Wrapper>
		{products.length === 26 && (
			<ButtonList categories={allCategories} filterCategory={filterCategory}/>
		)}
		{products.length <= 25 && products.length >= 1 && (
			<p css={css`
			margin-top: 32px;
			margin-bottom: 37px;
			font-family: ${fonts.secondary};
			font-weight: 600;
			font-size: 28px;
			line-height: 35.2px
			`}>{`Fount ${products.length} results`}</p>
		)}
		{products.length === 0 && NoData}
		<ProductList products={products} />
	</>
	);
}

export default SearchPage;