import { useEffect, useState } from "react";
import ProductDetailsComponent from "../product-details/product-details.component";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/product.service";
function ProductListComponent() {
    const title = "Product List";
    const { data: productList, isLoading, refetch, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        placeholderData: [],
    });
    return (
        <div>
            <h2>{title}</h2>
            {!productList && (
                <p>No product list found</p>
            )}
            {productList && !productList.length && (
                <p>No product list found</p>
            )}
            {productList.length && (
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productList.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td style={{ cursor: "pointer" }} onClick={(event) => {
                                        loadProductDetails(event, product.id);
                                    }}>{product.title}</td>
                                    <td>{product.type}</td>
                                    <td>{product.price}</td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            )}
            

        </div>
    )
}

export default ProductListComponent