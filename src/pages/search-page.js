/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fonts } from "../styles/typography";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonList from "../components/button-list";
import ProductList from "../components/products-list";

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
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [tablaProducts, setTablaproducts] = useState([]);
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
			setTablaproducts(response.data);
			setCategories(allCategories) 
		}).catch(error=>{
			console.log(error);
		})
	}
	
	useEffect(() => {
		getProductsUser();
	}, [])

	const filterSearch =(terminoBusqueda) => {
		var searchResults=tablaProducts.filter((elemento) => {
			if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
				return elemento;
			}
		});
		setProducts(searchResults);
	}

	const allCategories = ['All', 'soups', 'mexican', 'sushi', 'italian', 'snack', 'Korean food', 'French food'];
	console.log(allCategories);

	const filterCategory = (category) => {
		if(category === "All") {
			setProducts(tablaProducts)
			return
}

		const filteredData = tablaProducts.filter(product => product.category === category)
		setProducts(filteredData)
	}

	const NoData = styled.div`
	
	`

	return (
		<>
		<Wrapper>
			<ContentSearch>
				<div css={css`margin-right: 20px;`}>
						<FiSearch/>
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
		<ButtonList categories={categories} filterCategory={filterCategory}/>
					{products.length === 0 && "NoData"}
	<ProductList products={products} />
	</>
	);
}

export default SearchPage;