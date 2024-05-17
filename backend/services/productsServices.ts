import productsData from "../assets/mock/products.json";

export const getAllProducts = () => {
    return productsData;
};

export const searchProducts = (search) => {
    const lowerCaseSearch = search.toLowerCase();
    return productsData.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearch) ||
        product.brand.toLowerCase().includes(lowerCaseSearch)
    );
};
