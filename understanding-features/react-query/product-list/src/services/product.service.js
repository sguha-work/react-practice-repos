export const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    const result = await response.json();
    return result;
};
export const getProductDetails = async (id) => {
    const stream = await fetch("http://localhost:3000/products/" + id);
    const productDetails = await stream.json();
    return productDetails;
}