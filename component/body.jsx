import { useEffect, useState } from "react";
import Design from "../component/design.jsx";
import Savedjob from "../component/savedjob.jsx";
import Filter from "../component/Filter.jsx";

function Body() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1); // Add totalPages state

  useEffect(() => {
    const fetchjobs = async () => {
      try {
        const response = await fetch(
          `https://joblisting-rd8f.onrender.com/api/jobs?page=${currentPage}&limit=5`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setProductList(data.jobs);
        setTotalPages(Math.ceil(data.totalJobs / 5)); // Calculate totalPages
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchjobs();
  }, [currentPage]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleBookedToggle = (productId) => {
    setProductList((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, isbooked: !product.isbooked };
        }
        return product;
      })
    );
  };

  return (
    <div className="flex float-right mr-20 gap-10 max-sm:flex-col max-md:flex-col max-xs:mr-0">
      <Filter />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : productList.length > 0 ? (
        <>
          <Design
            list={productList}
            onBookedToggle={handleBookedToggle}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages} // Pass totalPages
          />
          <Savedjob list={productList} onBookedToggle={handleBookedToggle} />
        </>
      ) : (
        <div>No jobs found.</div>
      )}
    </div>
  );
}

export default Body;
