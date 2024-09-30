// //  function  Home(){

// //     return(
// //         <div>
// //             <h1>Hello</h1>
// //             <p>{}</p>
// //         </div>
// //     )
// // }

// // export default Home
// 'use client'
// import React, { useEffect, useState } from 'react';

// const Home = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch data from the API route
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/fetchData'); // API route
//         const result = await response.json();

//         if (response.ok) {
//           setData(result); // Store data in state
//         } else {
//           setError(result.error || 'Error fetching data');
//         }
//       } catch (err) {
//         setError('Error fetching data', err);
//       }
//     };

//     fetchData();
//   }, []);

//   // Render the data or an error message
//   return (
//     <div>
//       {/* <h1>Hello</h1> */}
//       {error && <p>Error: {error}</p>}
//       {data ? (
//         <div>
//           <h2>Uniswap Data:</h2>
//           <ul>
//             {data.data.map((item: any, index: number) => (
//               <li key={index}>
//                 Date: {item.date}, Fees USD: {item.feesUSD}, TVL USD: {item.tvlUSD}, 
//                 Volume ETH: {item.volumeETH}, Transactions: {item.txCount}
//               </li>
//             ))}
//           </ul>

//           <h2>Llama Insights:</h2>
//           <p>{data.insights}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Home;
