// 'use client'

// import Link from "next/link";
// import React from "react";
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// const Navbar = () => {

//    return (
//     <div className="fixed font-sans-serif inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-slate-900 py-2">
//       <div className="flex items-center justify-between px-8 mx-auto max-w-7xl">
//         <div className="flex items-center gap-8">
//           <Link href={"/"} className="flex items-center">
//             <p className="rounded-lg text-red-500 border-2 border-b-4 border-r-4 border-black px-2 py-1 text-2xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
//               B r a t B o t
//             </p>
//           </Link>
//         </div>        
//         <div className="flex items-center gap-8">
//           <div className="p-2 border-2 border-gray-300 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
          
//           <ConnectButton />
//           </div>
//         </div>
//       </div>
//     </div>
   
//   );

//  };
// export default Navbar; 



'use client'

import Link from "next/link";
import React from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {

  return (
    <div className="fixed font-sans-serif inset-x-0 top-0 bg-yellow-200 z-[10] h-fit border-b border-slate-900 py-2">
      <div className="flex items-center justify-between px-8 mx-auto max-w-7xl">
        <div className="flex items-center gap-8">
          <Link href={"/"} className="flex items-center">
            <p className="rounded-lg text-red-500 border-2 border-b-4 border-r-4 border-black px-2 py-1 text-2xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
               EinsteinAI
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <div className="border-white text-yellow-50">
          </div>
          {/* Custom Render ConnectButton */}
          <ConnectButton.Custom>
            {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
              const ready = mounted && account && chain;
              const connected = ready && account;

              return (
                <div
                  className={`p-2 border-2 border-gray-300 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 ${
                    connected ? "w-auto" : "w-40"
                  }`}
                >
                  {connected ? (
                    <div className="flex items-center gap-2">
                      <p className="text-base font-sans text-black dark:text-white">
                        {account.displayName}
                      </p>
                      <button
                        onClick={openAccountModal}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-all hover:bg-blue-600"
                      >
                        Account
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={openConnectModal}
                      className="flex bg-gray-800 pl-2 justify-center items-center text-white rounded-lg transition-all"
                    >
                      Connect Wallet
                    </button>
                  )}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
