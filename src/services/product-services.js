import collectionClient from "./collection-client";

export async function showProduct(id){
	const { ...dish } = await collectionClient(`/products/${id}`);

	return dish;
}