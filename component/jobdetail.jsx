// import { useState } from "react";
// import amazon from "../src/assets/amazon.png";
// // import rating from "../src/assets/Ratings.png";
// import booked from "../src/assets/booked.png";
// import share from "../src/assets/share.png";
// import PropTypes from "prop-types";

// function Jobdetail({ list, onBookedToggle }) {
//   const [expandedJobId, setExpandedJobId] = useState(null);

//   const handleCardClick = (productId) => {
//     setExpandedJobId(expandedJobId === productId ? null : productId);
//   };

//   return (
// //     <div className="w-[1000px] h-[836px] relative top-30 left-30 rounded-[20px] bg-[#FFFFFF] shadow-2xl border-[#FFFFFF] text-[#2F2F2F]">
// //       {list.map((product) => (
// //         <div
// //           key={product.id}
// //           className={`w-[668px] h-[230px] border-1 justify-self-center relative top-5 rounded-[20px] mt-10 bg-[#FFFFFF] cursor-pointer transition-height duration-300 overflow-hidden ${
// //             expandedJobId === product.id ? "h-[auto]" : ""
// //           }`}
// //           onClick={() => handleCardClick(product.id)}
// //         >
// //           <div className="ml-10 mt-2 relative">
// //             {" "}
// //             {/* Added relative for absolute positioning of buttons */}
// //             <div className="absolute right-4 top-2 flex gap-6">
// //               <div className="w-5">
// //                 <button
// //                   className="hover:bg-amber-70"
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     onBookedToggle(product.id);
// //                   }}
// //                 >
// //                   <img
// //                     src={product.isbooked ? booked : booked} // Correct image logic (unbooked image was missing)
// //                     alt={product.isbooked ? "Unbooked" : "Booked"}
// //                   />
// //                 </button>
// //               </div>
// //               <div>
// //                 <button onClick={(e) => e.stopPropagation()}>
// //                   <img src={share} alt="Share" />
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="flex">
// //               <div>
// //                 <img
// //                   src={amazon}
// //                   alt={product.title}
// //                   className="w-[138px] h-[138px]"
// //                 />
// //               </div>
// //               <div className="ml-2">
// //                 <h2 className="text-[36px]">{product.describe.title}</h2>
// //               </div>
// //             </div>
// //             <div className="relative left-13">
// //               <div>
// //                 <h2 className="text-[20px] mt-[-10px]">
// //                   {product.describe.location}
// //                 </h2>
// //               </div>
// //               <div className="flex gap-4 text-[#000000]">
// //                 <h2 className="text-[20px] border-[#EBEBEB] rounded-[3px] bg-[#EBEBEB]">
// //                   {product.place}
// //                 </h2>
// //                 <h2 className="text-[20px] border-[#EBEBEB] rounded-[3px] bg-[#EBEBEB]">
// //                   {product.time}
// //                 </h2>
// //                 <h2 className="text-[20px] border-[#EBEBEB] rounded-[3px] bg-[#EBEBEB]">
// //                   {product.price}
// //                 </h2>
// //               </div>
// //               <div className="mt-5 w-[90%]">
// //                 <h2 className="break-words text-[#000000]">
// //                   {product.describe.brif}
// //                 </h2>
// //               </div>
// //             </div>
// //             {/* Expanded content (description and responsibilities) */}
// //             {expandedJobId === product.id && (
// //               <div className="w-[85%] justify-self-center ml-[-10px] mt-4">
// //                 <div className="flex">
// //                   <div className="flex flex-col gap-4 w-[20%]">
// //                     <div>
// //                       <h1 className="text-[24px]">Job type:</h1>
// //                       <p className="text-[20px]">
// //                         {product.describe.typebrif}
// //                       </p>{" "}
// //                       {/* Use optional chaining and default */}
// //                     </div>
// //                     <div>
// //                       <h1 className="text-[24px]">Location:</h1>
// //                       <p className="text-[20px]">
// //                         {product.describe.locationbrif}
// //                       </p>
// //                     </div>
// //                     <div>
// //                       <h1 className="text-[24px]">Experience:</h1>
// //                       <p className="text-[20px]">
// //                         {product.describe.experiencebrif}
// //                       </p>
// //                     </div>
// //                   </div>
// //                   <div className="w-[80%]">
// //                     <h1 className="text-[24px]">Job description</h1>
// //                     <p className="text-[20px] mt-3">
// //                       {product.describe.jobdescriptionbrif}
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="w-[80%] justify-self-center relative left-21.5">
// //                   <h1 className="text-[24px]">Key Responsibilities</h1>
// //                   <div className="w-[90%] relative left-5">
// //                     <ul className="list-disc text-[18px]"></ul>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // Jobdetail.propTypes = {
// //   list: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       photo: PropTypes.string.isRequired,
// //       title: PropTypes.string.isRequired,
// //       location: PropTypes.string.isRequired,
// //       place: PropTypes.string.isRequired,
// //       time: PropTypes.string.isRequired,
// //       price: PropTypes.string.isRequired,
// //       brif: PropTypes.string.isRequired,
// //       isbooked: PropTypes.bool.isRequired,
// //       id: PropTypes.number.isRequired,
// //       describe: PropTypes.shape({
// //         typebrif: PropTypes.string,
// //         locationbrif: PropTypes.string,
// //         experiencebrif: PropTypes.string,
// //         jobdescriptionbrif: PropTypes.string,
// //         responsibilitiesbrif: PropTypes.string,
// //         // ... other describe properties as needed
// //       }),
// //     })
// //   ).isRequired,
// //   onBookedToggle: PropTypes.func.isRequired,
// // };

// export default Jobdetail;
