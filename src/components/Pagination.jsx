import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`px-4 py-2 rounded-lg border ${currentPage === index + 1
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-black hover:bg-blue-100'
                        } transition duration-200`}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
