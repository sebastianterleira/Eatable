import styled from "@emotion/styled";

const ContainerCard = styled("div")`
  display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(2, 156px);
	grid-auto-rows: minmax(212px, auto);
`

const CardData = styled("div")`
overflow: hidden;
background-color: #FFFFFF;
border-radius: 20px;
margin-bottom: 45px;
margin-top: 9px;
box-shadow: 5px 5px 5px #48529944;
position: relative;
`;

const ImagenProduct = styled("img")`
left: 13px;
position: absolute;
left: 8.33%;
right: 8.33%;
top: 0%;
bottom: 48%;
width: 130px;
height: 130px;
border-radius: 65px;
`

function ProductList({products}) {
	console.log(products)
	return (
		<ContainerCard>
				{products &&
						products.map((product)=>(
						<CardData key={product.id}>
							<ImagenProduct src={product.picture_url}/>
							<p>{product.name === null ? "No content" : product.name}</p>
						</CardData>
					))}
		</ContainerCard>
	);
}

export default ProductList;