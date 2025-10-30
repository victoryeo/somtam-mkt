import { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
      <header className="w-full bg-[#FDFDFC] dark:bg-[#0a0a0a] py-4">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <img
              src="/images/somtam-logo.png"
              alt="SomtamCoin Logo"
              className="h-8 w-8"
            />
            <span className="text-2xl sm:text-3xl font-semibold">
              SomtamCoin
            </span>
          </div>
          <a
            href="https://app.somtam.xyz"
            className="bg-[#1b1b18] text-white dark:bg-[#EDEDEC] dark:text-[#0a0a0a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-sm sm:text-base hover:bg-opacity-90 transition duration-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]"
          >
            Launch dApp
          </a>
        </div>
      </header>
      <div className="flex w-full flex-col items-center justify-center opacity-100 transition-opacity duration-750">
        <main className="flex w-full max-w-[335px] flex-col items-center lg:max-w-4xl px-6 lg:px-8">
          <img
            src="/images/somtam.jpg"
            alt="SomtamCoin Illustration"
            className="w-full max-w-[600px] rounded-lg shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] mb-6 mx-auto"
          />
          <section className="w-full mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Why Choose SomtamCoin?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  Rock-Solid Stability
                </h3>
                <p className="text-lg text-[#706f6c] dark:text-[#A1A09A]">
                  Pegged 1:1 to the USD, backed by trusted stablecoins like USDT
                  and USDC for unmatched reliability.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">DeFi-Optimized</h3>
                <p className="text-lg text-[#706f6c] dark:text-[#A1A09A]">
                  Seamlessly integrate with DeFi platforms for fast, low-cost
                  transactions and high-yield opportunities.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  Transparent & Secure
                </h3>
                <p className="text-lg text-[#706f6c] dark:text-[#A1A09A]">
                  Built on blockchain with audited reserves, ensuring trust and
                  security for every transaction.
                </p>
              </div>
            </div>
          </section>
          <div className="flex-1 w-full rounded-lg bg-white p-6 text-lg leading-[24px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:p-20 dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
            <section className="mb-6">
              <h2 className="text-3xl font-semibold mb-2">
                Welcome to SomtamCoin
              </h2>
              <p className="text-xl text-[#706f6c] dark:text-[#A1A09A]">
                SomtamCoin is a next-generation USD-pegged stablecoin designed
                for the future of decentralized finance. Backed by a robust
                portfolio of leading stablecoins like USDT and USDC, SomtamCoin
                delivers unwavering stability, transparency, and efficiency.
                Whether you're trading, investing, or exploring DeFi, SomtamCoin
                empowers you with a secure, reliable, and versatile digital
                asset that bridges traditional finance and the blockchain world.
              </p>
            </section>
            <section className="mb-6">
              <h2 className="text-3xl font-semibold mb-2">
                Unlock the Power of SomtamCoin
              </h2>
              <p className="text-xl text-[#706f6c] dark:text-[#A1A09A]">
                SomtamCoin redefines what a stablecoin can do. By leveraging
                trusted stablecoin reserves, it eliminates volatility risks
                while maintaining full decentralization. Enjoy lightning-fast
                transactions, minimal fees, and seamless integration with your
                favorite DeFi protocols. From yield farming to cross-chain
                transfers, SomtamCoin is your gateway to a smarter, more secure
                crypto experience. Join the revolution and take control of your
                financial future today.
              </p>
            </section>
            <section>
              <h2 className="text-3xl font-semibold mb-2">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((index: number) => (
                  <div
                    key={index}
                    className="border border-[#e3e3e0] dark:border-[#3E3E3A] rounded-lg"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-4 font-medium text-[#1b1b18] text-xl dark:text-[#EDEDEC] focus:outline-none"
                    >
                      {index === 1
                        ? "What makes SomtamCoin stable?"
                        : index === 2
                        ? "Which stablecoins back SomtamCoin?"
                        : "How can I use SomtamCoin in DeFi?"}
                      <span className="float-right text-3xl">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="p-4 text-[#706f6c] text-base dark:text-[#A1A09A]">
                        {index === 1
                          ? "SomtamCoin maintains its 1:1 USD peg by using a diversified reserve of trusted stablecoins like USDT and USDC, ensuring consistent value even in volatile markets."
                          : index === 2
                          ? "SomtamCoin is backed by a carefully curated portfolio of leading USD-pegged stablecoins, including USDT, USDC, and others, for maximum stability and transparency."
                          : "SomtamCoin is designed for DeFi, enabling fast, low-cost transactions across platforms like Uniswap, Aave, and more, perfect for trading, lending, or yield farming."}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
        <footer className="w-full py-6 mt-12 text-center text-sm text-[#706f6c] dark:text-[#A1A09A] border-t border-[#e3e3e0] dark:border-[#3E3E3A]">
          <p>
            © {new Date().getFullYear()} SomtamCoin. All rights reserved. |
            <Link
              to="/privacy"
              rel="noopener noreferrer"
              className="text-[#1b1b18] dark:text-[#EDEDEC] hover:underline ml-1"
            >
              Privacy Policy
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
