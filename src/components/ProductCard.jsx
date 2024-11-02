const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg shadow-lg overflow-hidden m-4 bg-white transition-transform duration-300 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="font-semibold text-lg text-blue-500">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
