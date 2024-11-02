import React, { useEffect } from 'react';
import useProducts from './useProducts';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';
import Loader from './components/Loader';

const App = () => {
  const { products, loading, setCurrentPage, currentPage } = useProducts();

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (currentPage < 10) { 
        setCurrentPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {loading && <Loader />}
      </div>
      {currentPage >= 10 && (
        <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
      )}
    </div>
  );
};

export default App;
