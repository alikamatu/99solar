"use client";

import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/navigation';


export default function Home() {
    const router = useRouter();

    const LightningIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const getStarted = () => {
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
        localStorage.setItem('userId', '298546ec-4025-49fb-bbaf-0e82012a5652'); 
        localStorage.setItem('userRole', 'admin');
        router.push('/dashboard');
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-primary-50">
      <Head>
        <title>99Solar - Bid Processing System</title>
        <meta name="description" content="Automated bid processing system for solar energy solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="absolute w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <LightningIcon className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-2xl font-bold text-primary-700">99Solar</span>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-black px-6 py-2 rounded-lg font-medium cursor-pointer"
              onClick={getStarted}
            >
              Dashboard
            </motion.button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Streamline Your <span className="text-primary-600">Bid Processing</span> Workflow
                </h1>
                <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                  Automate CSV to Excel conversions, bid aggregation, and invoice generation for your Amazion bid managemnt.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <div onClick={getStarted}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 cursor-pointer border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium text-lg"
                    >
                        Get Started
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-[url('/avatars/wall.jpg')] bg-cover border-2 border-dashed rounded-xl w-full h-96 lg:h-[500px]" />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Bid processed!</p>
                      <p className="text-sm text-gray-500">$5,428 generated</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        </main>
      </div>
  );
}