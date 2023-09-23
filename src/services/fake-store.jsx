const FakestoreAPI={
    fetchAllProducts:async ()=>{
        const response = await fetch(`https://fakestoreapi.com/products`);
        return await response.json();
    },
    fetchProductById:async ()=>{
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        return await response.json();
    },
    fetchProductBySearchQuery:async ()=>{
        const response = await fetch (`https://fakestoreapi.com/products`);
        const result = response.json();
        return result.filter((product)=>{
            return product.title.toLowerCase().includes(query)
    })
    }
}
export default FakestoreAPI;