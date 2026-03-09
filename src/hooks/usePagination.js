import { useState } from "react";

const usePagination = ( data, itemsPerPage) => {

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItem = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    return {
        currentItem, currentPage, totalPages, nextPage, prevPage
    };
};
 
export default usePagination;