// import { NextResponse } from 'next/server';
// import axios from 'axios';

// export async function GET() {
//   try {
//     // Uniswap data fetching function
//     const fetchUniSwapData = async () => {
//       const query = `{
//         uniswapDayDatas (first: 10) {
//           feesUSD
//           tvlUSD
//           volumeETH
//           txCount
//           volumeUSDUntracked
//           volumeUSD
//           date
//         }
//       }`;
//       const graphapi = process.env.GRAPH_API
//       const response = await axios.post(
//         `https://gateway.thegraph.com/api/${graphapi}/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV`,
//         { query }
//       );
//       return response.data.data.uniswapDayDatas;
//     };

//     // Llama insights fetching function
//     const fetchLlamaInsights = async (data: any[]) => {
//       const dataString = data
//         .map(
//           (d) => `On ${d.date}, Fees in USD: ${d.feesUSD}, Transaction Value in USD: ${d.tvlUSD}, Volume in ETH: ${d.volumeETH}, Transactions: ${d.txCount}, Untracked Volume in USD: ${d.volumeUSDUntracked}, Tracked Volume in USD: ${d.volumeUSD}`
//         )
//         .join('\n');

//       const prompt = `Here's the data from Uniswap: ${dataString}. Please provide me insights about this data?`;

//       const response = await axios.post(
//         'https://llama.us.gaianet.network/v1/chat/completions',
//         {
//           model: 'llama',
//           messages: [
//             {
//               role: 'system',
//               content: 'You are a helpful assistant that analyzes Uniswap data and provides insights.',
//             },
//             { role: 'user', content: prompt },
//           ],
//         }
//       );

//       return response.data.choices[0].message.content;
//     };

//     // Run the app
//     const data = await fetchUniSwapData();
//     const insights = await fetchLlamaInsights(data);

//     return NextResponse.json({ data, insights });
//   } catch (error) {
//     console.error('Error in API route:', error);
//     return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
//   }
// }
