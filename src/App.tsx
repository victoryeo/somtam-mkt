import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What can I do in the Somtam Dapp?",
    answer:
      "The Somtam Dapp is a web3 dashboard where you can connect your wallet, mint and redeem SOMTAM against supported collateral, check balances, and request test tokens from the faucet on supported networks.",
  },
  {
    question: "What is the Somtam AI project?",
    answer:
      "Somtam AI is our AI project focused on bringing intelligent automation and insight to the Somtam ecosystem. More details and launch information will be shared soon.",
  },
  {
    question: "What backs SOMTAM Coin?",
    answer:
      "SOMTAM is backed by a carefully curated portfolio of leading USD-pegged stablecoins, including USDT, USDC, and others, for maximum stability and transparency.",
  },
];

export default function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
      <header className="w-full bg-[#FDFDFC] dark:bg-[#0a0a0a] py-4">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <img
              src="/images/somtam-logo.png"
              alt="Somtam Logo"
              className="h-8 w-8"
            />
            <span className="text-2xl sm:text-3xl font-semibold">Somtam</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://app.somtam.space"
              className="bg-[#1b1b18] text-white dark:bg-[#EDEDEC] dark:text-[#0a0a0a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-sm sm:text-base hover:bg-opacity-90 transition duration-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]"
            >
              Launch dApp
            </a>            
            <a
              href="#ai"
              className="rounded-lg border border-[#e3e3e0] px-3 sm:px-4 py-1.5 sm:py-2 text-sm font-medium transition duration-200 hover:bg-[#f5f5f3] sm:text-base dark:border-[#3E3E3A] dark:hover:bg-[#1f1f1e]"
            >
              Explore AI
            </a>
          </div>
        </div>
      </header>
      <div className="flex w-full flex-col items-center justify-center opacity-100 transition-opacity duration-750">
        <main className="flex w-full max-w-[335px] flex-col items-center lg:max-w-4xl px-6 lg:px-8">
          <section className="w-full text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
              Somtam Web3 &amp; AI
            </h1>
            <p className="text-xl text-[#706f6c] dark:text-[#A1A09A] max-w-2xl mx-auto">
              A stablecoin (SOMTAM Coin) dApp paired with an AI project built to
              make the Somtam ecosystem smarter, faster, and easier to use.
            </p>
          </section>
          <img
            src="/images/somtam.jpg"
            alt="Somtam Illustration"
            className="w-full max-w-[600px] rounded-lg shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] mb-12 mx-auto"
          />
          <section className="w-full mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Our Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="flex flex-col rounded-lg bg-white p-8 text-left shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                <span className="mb-4 inline-block w-fit rounded-full bg-[#1b1b18] px-3 py-1 text-xs font-medium uppercase tracking-wide text-white dark:bg-[#EDEDEC] dark:text-[#0a0a0a]">
                  Live
                </span>
                <h3 className="text-2xl font-semibold mb-3">Somtam Dapp</h3>
                <p className="text-lg text-[#706f6c] dark:text-[#A1A09A] flex-1">
                  Connect your wallet to mint and redeem SOMTAM Coin against
                  supported collateral, manage balances, and grab test tokens
                  from the faucet in one dashboard.
                </p>
                <a
                  href="https://app.somtam.space"
                  className="mt-6 inline-block w-fit rounded-lg bg-[#1b1b18] px-4 py-2 font-medium text-white transition duration-200 hover:bg-opacity-90 dark:bg-[#EDEDEC] dark:text-[#0a0a0a]"
                >
                  Launch dApp
                </a>
              </article>
              <article className="flex flex-col rounded-lg bg-white p-8 text-left shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                <span className="mb-4 inline-block w-fit rounded-full bg-[#EDEDEC] px-3 py-1 text-xs font-medium uppercase tracking-wide dark:bg-[#2a2a28]">
                  In development
                </span>
                <h3 className="text-2xl font-semibold mb-3">Somtam AI</h3>
                <p className="text-lg text-[#706f6c] dark:text-[#A1A09A] flex-1">
                  An AI project designed to bring intelligent automation and
                  actionable insight to the Somtam protocol. Details and launch
                  information are coming soon.
                </p>
                <a
                  href="#ai"
                  className="mt-6 inline-block w-fit rounded-lg border border-[#e3e3e0] px-4 py-2 font-medium transition duration-200 hover:bg-[#f5f5f3] dark:border-[#3E3E3A] dark:hover:bg-[#1f1f1e]"
                >
                  Discover Somtam AI
                </a>
              </article>
            </div>
          </section>
          <section className="w-full mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Why Choose Somtam Coin?
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
                <h3 className="text-2xl font-semibold mb-4">
                  dApp-Native Experience
                </h3>
                <p className="text-lg text-[#706f6c] dark:text-[#A1A09A]">
                  Mint, redeem, and manage collateral from one clean web3
                  dashboard with faucet support for test networks.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  AI-Enhanced Intelligence
                </h3>
                <p className="text-lg text-[#706f6c] dark:text-[#A1A09A]">
                  Somtam AI explores intelligent automation and insight to make
                  the protocol easier to use and more efficient.
                </p>
              </div>
            </div>
          </section>
          <div className="flex-1 w-full rounded-lg bg-white p-6 text-lg leading-[24px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:p-20 dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
            <section id="dapp" className="mb-10">
              <h2 className="text-3xl font-semibold mb-2">
                Somtam Dapp
              </h2>
              <p className="text-xl text-[#706f6c] dark:text-[#A1A09A] mb-4">
                The Somtam Dapp is the home of SOMTAM Coin, a next-generation
                USD-pegged stablecoin built for decentralized finance. Connect a
                supported web3 wallet to interact with the protocol directly
                from your browser.
              </p>
              <ul className="list-disc space-y-2 pl-6 text-xl text-[#706f6c] dark:text-[#A1A09A]">
                <li>Mint and redeem SOMTAM against supported collateral.</li>
                <li>Track your SOMTAM and collateral balances.</li>
                <li>Request test tokens from the faucet on test networks.</li>
                <li>
                  Everything runs on-chain with transparent, audited reserves.
                </li>
              </ul>
            </section>
            <section id="ai" className="mb-10 scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-2">Somtam AI</h2>
              <p className="text-xl text-[#706f6c] dark:text-[#A1A09A]">
                Somtam AI is our AI project, built to bring intelligent
                automation and deeper insight to the Somtam ecosystem. We are
                exploring how machine learning can improve protocol
                monitoring, surface useful on-chain information, and make the
                dApp easier to navigate. Full details and launch information
                will be shared soon.
              </p>
            </section>
            <section>
              <h2 className="text-3xl font-semibold mb-2">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    className="border border-[#e3e3e0] dark:border-[#3E3E3A] rounded-lg"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-4 font-medium text-[#1b1b18] text-xl dark:text-[#EDEDEC] focus:outline-none"
                    >
                      {faq.question}
                      <span className="float-right text-3xl">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="p-4 text-[#706f6c] text-base dark:text-[#A1A09A]">
                        {faq.answer}
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
            © {new Date().getFullYear()} Somtam. All rights reserved. |
            <a
              href="https://app.somtam.space"
              className="text-[#1b1b18] dark:text-[#EDEDEC] hover:underline mx-1"
            >
              Dapp
            </a>
            |
            <a
              href="#ai"
              className="text-[#1b1b18] dark:text-[#EDEDEC] hover:underline mx-1"
            >
              AI
            </a>
            |
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
