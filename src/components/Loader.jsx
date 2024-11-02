const Loader = () => {
    return (
        <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
            <span className="ml-2 text-gray-700">Loading ...</span>
        </div>
    );
};

export default Loader;
