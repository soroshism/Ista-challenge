import { useState, useEffect } from 'react';
import { generateProducts } from './utils/productGenerator'; 

const TOTAL_PAGES = 10; 
const PRODUCTS_PER_PAGE = 20;

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const loadProducts = () => {
            setLoading(true);
            const newProducts = generateProducts(currentPage);
            setProducts((prevProducts) => [...prevProducts, ...newProducts]); 
            setLoading(false);
        };

        loadProducts();
    }, [currentPage]);

    return { products, loading, setCurrentPage, currentPage };
};

export default useProducts;
