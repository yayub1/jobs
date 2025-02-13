import { useEffect, useState } from "react";
import Design from "../component/design.jsx";
import Savedjob from "../component/savedjob.jsx";
import Filter from "../component/Filter.jsx";

import PropTypes from "prop-types";

function Body({
  inp,
  // setInp,
  // gett,
  fillterfun,
  getfil,
  setgetfil,
  location,
  setlocation,
  getlocation,
  level,
  setlevel,
  getlevel,
  currency,
  setcurrency,
  getcurrency,
  reset,
}) {
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  // const [Alljobs, setAlljobs] = useState([]);

  useEffect(() => {
    const fetchjobs = async () => {
      try {
        const response = await fetch(
          `https://joblisting-rd8f.onrender.com/api/jobs?page=${currentPage}&limit=4`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        setProductList(data.jobs);

        setTotalPages(Math.ceil(data.totalJobs / 5));
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchjobs();
  }, [currentPage]);
  const filteredJobs = productList.filter((job) => {
    if (!job || !job.title) {
      return false;
    }

    const Jobcurrency = job.currency.toLowerCase();

    const usercurrency = currency.toLowerCase();
    const matchcurrency =
      usercurrency === "" || Jobcurrency.includes(usercurrency);

    const JobexperienceLevel = job.experienceLevel.toLowerCase();

    const jobuser = level.toLowerCase();

    const matchexperienceLevel =
      jobuser === "" || JobexperienceLevel.includes(jobuser);

    const searchTerm = inp.toLowerCase();
    const jobTitle = job.title.toLowerCase();

    const joblocation = location.toLowerCase();
    const JobLocation = job.location.toLowerCase();
    const matchlocation =
      joblocation === "" || JobLocation.includes(joblocation);
    const matchesSearch = searchTerm === "" || jobTitle.includes(searchTerm);

    const matchesFilter =
      !getfil ||
      getfil.length === 0 ||
      getfil.some((type) => type.toLowerCase() === job.type.toLowerCase());

    return (
      matchesSearch &&
      matchesFilter &&
      matchlocation &&
      matchexperienceLevel &&
      matchcurrency
    );
  });

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
  console.log(productList);
  console.log(productList);
  return (
    <div className="flex float-right mr-20 gap-10 max-sm:flex-col max-md:flex-col max-xs:mr-0 read-only:">
      <Filter
        selectedJobTypes={selectedJobTypes}
        setSelectedJobTypes={setSelectedJobTypes}
        fillterfun={fillterfun}
        getfil={getfil}
        setgetfil={setgetfil}
        location={location}
        setlocation={setlocation}
        getlocation={getlocation}
        level={level}
        setlevel={setlevel}
        getlevel={getlevel}
        currency={currency}
        seetcurrency={setcurrency}
        getcurrency={getcurrency}
        reset={reset}
      />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : filteredJobs.length > 0 ? (
        <>
          <Design
            list={filteredJobs} // Use filteredJobs instead of productList
            onBookedToggle={handleBookedToggle}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
            selectedJobTypes={selectedJobTypes}
            setSelectedJobTypes={setSelectedJobTypes}
          />
          <Savedjob
            list={filteredJobs} // Use filteredJobs instead of productList
            onBookedToggle={handleBookedToggle}
          />
        </>
      ) : (
        <div>No jobs found.</div>
      )}
    </div>
  );
}
Body.propTypes = {
  inp: PropTypes.string.isRequired,
  setInp: PropTypes.func.isRequired,
  gett: PropTypes.any, // You might need a more specific type if known
  fillterfun: PropTypes.func.isRequired,
  getfil: PropTypes.array.isRequired, // Assuming it's an array
  setgetfil: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  setlocation: PropTypes.func.isRequired,
  getlocation: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  setlevel: PropTypes.func.isRequired,
  getlevel: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  setcurrency: PropTypes.func.isRequired,
  getcurrency: PropTypes.string.isRequired,
  reset: PropTypes.string.isRequired,
};
export default Body;
