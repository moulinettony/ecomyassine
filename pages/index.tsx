import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Particles from "./particles"; 
import dynamic from "next/dynamic";
import { red } from "@mui/material/colors";
import PricingTab, { PricingTable } from "@/components/pricing-table";
export default function Home() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>("option1");
  const [selectedOption2, setSelectedOption2] = useState<string>("option1");
  const [selectedOption3, setSelectedOption3] = useState<string>("option1");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption2(event.target.value);
  };
  const handleOptionChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption3(event.target.value);
  };
  
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null);
    };

  return (
    <div className="overflow-hidden">
      <Head>
        <title>EcomYesIn</title>
        <meta name="description" content="E-commerce description" />
        <meta property="og:title" content="E-commerce" />
        <meta property="og:description" content="E-commerce survey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles
        className="absolute inset-0 z-[1] animate-fade-in"
        quantity={100}
      /> 
      <section className="flex w-full flex-col items-center justify-between">
        <div className="relative flex h-auto w-full flex-col items-center justify-center">
          <div className="relative isolate">
            <div className="container relative mx-auto my-4 w-full max-w-7xl rounded-3xl px-4 pt-16 sm:my-10 sm:px-6 sm:pt-24 md:px-8 lg:pt-28">
              <div className="mb-8 flex justify-center">
                <a href="flex size-auto items-center justify-start bg-none">
                  <img
                    src="/images/ECOMSIN.png"
                    width={250}
                    height={50}
                    alt=""
                  />
                </a>
              </div>
              <div className="mb-8 flex justify-center">
                <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                  Master Program
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl">
                  The Birthplace & Master Program of Revolutionary COD in
                  Europe.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-400">
                  Dive into the heart of COD innovation with the EV
                  MasterProgram, Europe's premier gateway to mastering Cash on
                  Delivery strategies for online business growth.
                </p>
                <div className="relative mt-10 flex flex-row items-center justify-center gap-2">
                  <a
                    href="#"
                    className="z-20 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-blue-500 bg-white font-bold text-blue-500 shadow-2xl shadow-blue-500/50 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 h-11 px-8 rounded-full"
                  >
                    Get a Place
                  </a>
                  <a
                    href="#"
                    className="z-20 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-blue-600 bg-gray-950 font-bold text-blue-500 shadow-2xl shadow-blue-500/50 hover:bg-gray-900 hover:text-blue-600 active:bg-blue-950 active:text-blue-500 h-11 px-8 rounded-full"
                  >
                    Become a Partner
                  </a>
                </div>
                <div className="relative mt-20 flex flex-col items-center justify-center gap-5">
                  <div className="flex w-full flex-row items-center justify-center">
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/1.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/2.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/3.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/4.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/5.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/6.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="group  relative -mr-4">
                      <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
                        <img
                          src="/images/you.webp"
                          className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <p className="max-w-md text-sm text-gray-400">
                    We'd love to welcome you to the Moroccan community of
                    entrepreneurs radically improving Their COD business models.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 flex w-full flex-col items-center justify-between md:mt-20">
        <div className="relative flex h-auto w-full flex-col items-center justify-center">
          <div className="relative isolate">
            <div className="container relative mx-auto mt-10 w-full max-w-7xl rounded-3xl px-4 sm:mb-10 sm:px-6 md:px-8">
              <div className="mb-8 flex justify-center">
                <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                  The Old Way
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                  The current COD model is{" "}
                  <span className="broken text-3xl font-bold sm:text-[2.75rem]">
                    Broken
                  </span>
                  .
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Say Goodbye to High COD Costs and Crowded Markets.
                </p>
              </div>
              <div className="flex flex-col place-content-center place-items-center items-center justify-center gap-4 py-10 md:grid md:grid-cols-2 lg:grid-cols-4">
                <div className="flex h-full flex-col items-start justify-start rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                  <div className="mb-8 flex size-16 items-center justify-center rounded-xl bg-gray-900 p-4">
                    <svg
                      className="h-full w-full aspect-square text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity=".4"
                        d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM18.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    High COD Fees in Europe
                  </h3>
                  <p className="text-gray-400">
                    80% of COD services just resell, don't have their own
                    warehouses, and charge high fees, making it hard for you to
                    make a profit.
                  </p>
                </div>
                <div className="flex h-full flex-col items-start justify-start rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                  <div className="mb-8 flex size-16 items-center justify-center rounded-xl bg-gray-900 p-4">
                    <svg
                      className="h-full w-full aspect-square text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.25 22.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM8.25 22.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity=".4"
                        d="m4.84 3.94-.2 2.45c-.04.47.33.86.8.86h15.31c.42 0 .77-.32.8-.74.13-1.77-1.22-3.21-2.99-3.21H6.29c-.1-.44-.3-.86-.61-1.21a2.62 2.62 0 0 0-1.91-.84H2c-.41 0-.75.34-.75.75s.34.75.75.75h1.74c.31 0 .6.13.81.35.21.23.31.53.29.84Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M20.51 8.75H5.17c-.42 0-.76.32-.8.73l-.36 4.35C3.87 15.53 5.21 17 6.92 17h11.12c1.5 0 2.82-1.23 2.93-2.73l.33-4.67a.782.782 0 0 0-.79-.85Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Overcrowded Markets
                  </h3>
                  <p className="text-gray-400">
                    Europe's markets are packed. We're taking a new direction
                    with the Ev program, focusing on Eastern Europe's
                    opportunities.
                  </p>
                </div>
                <div className="flex h-full flex-col items-start justify-start rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                  <div className="mb-8 flex size-16 items-center justify-center rounded-xl bg-gray-900 p-4">
                    <svg
                      className="h-full w-full aspect-square text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity=".4"
                        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10.64 9.501c-.19 0-.38-.07-.53-.22-.71-.71-1.87-.71-2.58 0-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM13.36 9.501c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.29.29-.77.29-1.06 0-.71-.71-1.87-.71-2.58 0a.71.71 0 0 1-.53.22ZM12 11.922c-2.69 0-4.88 2.19-4.88 4.88 0 .7.57 1.28 1.27 1.28h7.2c.7 0 1.27-.57 1.27-1.28.02-2.69-2.17-4.88-4.86-4.88Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Tired of the Same Old?
                  </h3>
                  <p className="text-gray-400">
                    Take control of your own team and call center delivery for
                    less than 4E per shipment, making work both enjoyable and
                    profitable.
                  </p>
                </div>
                <div className="flex h-full flex-col items-start justify-start rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                  <div className="mb-8 flex size-16 items-center justify-center rounded-xl bg-gray-900 p-4">
                    <svg
                      className="h-full w-full aspect-square text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity=".4"
                        d="M19.789 4.22c-2.96-2.95-7.76-2.95-10.7 0-2.07 2.05-2.69 5-1.89 7.6l-4.7 4.7c-.33.34-.56 1.01-.49 1.49l.3 2.18c.11.72.78 1.4 1.5 1.5l2.18.3c.48.07 1.15-.15 1.49-.5l.82-.82c.2-.19.2-.51 0-.71l-1.94-1.94a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.95 1.95c.19.19.51.19.7 0l2.12-2.11c2.59.81 5.54.18 7.6-1.87 2.95-2.95 2.95-7.76 0-10.71ZM14.499 12a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M14.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Learn the COD Secrets
                  </h3>
                  <p className="text-gray-400">
                    Dive into what really happens in the COD business model and
                    turn it to your advantage.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-indigo-500 to-blue-500 opacity-30"
                style={{
                  clipPath:
                    "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
                }}
              ></div>
            </div>
            <div
              className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-indigo-500 to-blue-500 opacity-30"
                style={{
                  clipPath:
                    "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 flex w-full flex-col items-center justify-between md:mt-20">
        <div className="relative flex h-auto w-full flex-col items-center justify-center">
          <div className="relative isolate">
            <div className="container relative mx-auto my-4 w-full max-w-7xl rounded-3xl px-4 sm:my-10 sm:px-6 md:px-8">
              <div className="mb-8 flex justify-center">
                <a
                  href="#"
                  className="z-20 flex size-auto items-center justify-start bg-none"
                >
                  <img
                    className="size-16 rounded-xl shadow-2xl shadow-blue-500/10 backdrop-blur-md"
                    width={64}
                    height={64}
                    src="images/icon-dark-3x.webp"
                    alt=""
                  />
                </a>
              </div>
              <div className="mb-8 flex justify-center">
                <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-lg font-bold uppercase leading-6 text-transparent md:text-2xl">
                  Master Program
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                  Master the Art of Cash on Delivery.
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600">
                  Ready to conquer Cash on Delivery? Our program shows you how
                  to test, scale, and hit +$10k with ease. We've got all the
                  resources you need to succeed.
                </p>
                <div className="relative mt-10 flex flex-row items-center justify-center gap-2">
                  <a
                    href="#"
                    className="z-20 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-blue-500 bg-white font-bold text-blue-500 shadow-2xl shadow-blue-500/50 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 h-11 px-8 rounded-full"
                  >
                    Let's Get Started
                  </a>
                </div>
              </div>
              <div className="flex flex-col place-content-center place-items-center items-center justify-center gap-4 pt-10 sm:pb-10 md:grid md:grid-cols-2 lg:grid-cols-2">
                <div className="flex h-full flex-col items-start justify-start overflow-hidden rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Last Updated Methods and Structures
                  </h3>
                  <p className="text-gray-400">
                    As a member of our EV program, you'll gain access to the
                    latest +35 video updates on Cash on Delivery methods and
                    structures. Stay informed about essential updates and learn
                    the structures needed to establish your business.
                  </p>
                  <div className="-mb-14 mt-8 flex w-full items-center justify-center">
                    <img
                      className="size-full rounded-xl shadow-2xl shadow-blue-500/10 backdrop-blur-md"
                      src="images/image-1.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex h-full flex-col items-start justify-start overflow-hidden rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                  <h3 className="mb-2 text-xl font-bold text-white">
                    1v1 Daily Coaching
                  </h3>
                  <p className="text-gray-400">
                    In our EV program, we work closely with your coaches and
                    team to help you establish your COD business model. With
                    daily communication and one-on-one coaching sessions on your
                    slack channel we provide the easiest way to learn by doing.
                  </p>
                  <div className="-mb-14 mt-8 flex w-full items-center justify-center">
                    <img
                      className="size-full rounded-xl shadow-2xl shadow-blue-500/10 backdrop-blur-md"
                      src="images/image-2.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-10 sm:py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-4 sm:px-6 md:px-8 xl:grid-cols-2">
          <div className="relative flex h-auto w-full flex-col items-center justify-center">
            <img
              className="aspect-square size-full rounded-3xl object-cover"
              src="images/yassine.jpeg"
              alt=""
            />
          </div>
          <div className="flex h-full w-full max-w-2xl flex-col items-start justify-center">
            <div className="mb-8 flex justify-start">
              <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                Who's Me?
              </div>
            </div>
            <div className="text-start">
              <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                Meet Yassine Fallahi
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-400">
                A dedicated 21-year-old entrepreneur from Morocco who started
                his journey alone, without any handouts. Driven by his passion
                for e-commerce, he's dedicated himself to sharing his knowledge
                and helping thousands. Aassim's commitment extends to empowering
                communities in Morocco and Eastern Europe. His expertise lies in
                guiding individuals through the ins and outs of the Cash on
                Delivery (COD) market.
              </p>
            </div>
          </div>
        </div>
      </section>
     {/*  
     <section className="mt-10 flex w-full flex-col items-center justify-between md:mt-20">
        <div className="flex h-auto w-full flex-col items-center justify-center">
          <div className="relative isolate">
            <div className="container relative mx-auto my-10 w-full max-w-7xl rounded-3xl px-4 sm:px-6 md:px-8">
              <div className="mb-8 flex justify-center">
                <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                  Success Showcase
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                  A Sneak Peek in the Wins
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-400">
                  See the results. Check out screenshots and videos from our
                  students making real gains in the COD market.
                </p>
              </div>
              <div className="h-auto w-full max-w-[100vw]">
                <div className="lg-react-element mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full place-items-center text-center justify-center items-center grid-flow-row px-4 sm:px-6 md:px-8">
                  {videos.map((video: any, index: any) => (
                    <div
                      key={index}
                      className="aspect-square cursor-pointer size-full max-w-full overflow-hidden rounded-3xl border border-gray-800/50 bg-gray-50 shadow-2xl shadow-blue-500/10"
                      onClick={() => openLightbox(index)}
                    >
                      <ReactPlayer
                        url={video}
                        width="100%"
                        height="100%"
                        controls={false}
                        playing={false}
                        light={false}
                      />
                    </div>
                  ))}
                  {isOpen && (
                    <div className="h-screen py-20 z-10 px-10 fixed top-0 w-screen backdrop-blur-lg bg-[#00000073]">
                      <button
                        className="text-5xl opacity-60 rotate-45 absolute top-[15px] right-[25px] text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        +
                      </button>
                      <div className="lightbox-content flex gap-[20px] text-white h-full w-content mx-auto">
                        <button
                          className="opacity-60"
                          onClick={() =>
                            setVideoIndex(
                              (videoIndex + videos.length - 1) % videos.length
                            )
                          }
                        >
                          <img src="images/btn-prev.svg" alt="" />
                        </button>
                        <ReactPlayer
                          url={videos[videoIndex]}
                          width="100%"
                          height="100%"
                          controls={true}
                          playing={true}
                        />
                        <button
                          className="opacity-60"
                          onClick={() =>
                            setVideoIndex((videoIndex + 1) % videos.length)
                          }
                        >
                          <img src="images/btn-next.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative my-10 flex flex-row lg:w-1/2 mx-auto flex-wrap items-center justify-center gap-4 px-4 sm:px-6 md:px-8">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-blue-500 bg-white font-bold text-blue-500 shadow-2xl shadow-blue-500/50 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 h-11 px-8 rounded-full w-full"
                  >
                    <img src="images/load.svg" className="h-6 w-6" alt="" />
                    <p>Load More</p>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-blue-600 bg-gray-950 font-bold text-blue-500 shadow-2xl shadow-blue-500/50 hover:bg-gray-900 hover:text-blue-600 active:bg-blue-950 active:text-blue-500 h-11 px-8 rounded-full w-full"
                  >
                    <img
                      src="images/insta.svg"
                      className="h-6 w-6 max-lg:hidden"
                      alt=""
                    />
                    <p>Discover More Success Stories on Instagram</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      <section className="w-full py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-8 flex justify-start">
              <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                Frequently Asked Questions
              </div>
            </div>
            <div className="text-start">
              <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                Got Questions? We've Got <br />
                Answers.
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-400">
                FAQs for the EcomSin Master Program.
              </p>
            </div>
          </div>
          <div>
            <Accordion
              className="z-20 border-b border-gray-800"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                className="flex bg-transparent"
                expandIcon={
                  <ExpandMoreIcon className="transition-transform fill-white duration-200" />
                }
              >
                <Typography className="flex bg-transparent flex-1 items-center justify-between py-8 font-medium transition-all hover:underline">
                  What will I learn in the EcomSin Master Program?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-base text-gray-400">
                  Join us for our dual-track learning program: EcomVestors
                  Business Mastery and COD Revolution. Learn all the tricks of
                  hidden advertising methods, solid advertising structures, new
                  banking methods, and the secrets of logistics to ship your
                  products for cheap.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="z-20 border-b border-gray-800"
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                className="flex bg-transparent"
                expandIcon={
                  <ExpandMoreIcon className="transition-transform fill-white duration-200" />
                }
              >
                <Typography className="flex bg-transparent flex-1 items-center justify-between py-8 font-medium transition-all hover:underline">
                  How does the program work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-base text-gray-400">
                  Upon joining, you'll gain access to the Ev program in a Slack
                  channel. Here, you'll have your two daily coaches and your
                  dedicated team to assist you from scratch in setting up
                  everything. You'll also have access to instructional videos on
                  Loom, guiding you step by step. The program and coaches will
                  support you every step of the way, with dedicated guidance for
                  three months until you see results.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="z-20 border-b border-gray-800"
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                className="flex bg-transparent"
                expandIcon={
                  <ExpandMoreIcon className="transition-transform fill-white duration-200" />
                }
              >
                <Typography className="flex bg-transparent flex-1 items-center justify-between py-8 font-medium transition-all hover:underline">
                  Where can I find help?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-base text-gray-400">
                  Access support and coaching in your own Slack channel, where
                  you can ask questions in QA sessions, watch instructional
                  videos on Loom, and have calls with your coaches.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="z-20 border-b border-gray-800"
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                className="flex bg-transparent"
                expandIcon={
                  <ExpandMoreIcon className="transition-transform fill-white duration-200" />
                }
              >
                <Typography className="flex bg-transparent flex-1 items-center justify-between py-8 font-medium transition-all hover:underline">
                  What's expected of me?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-base text-gray-400">
                  Your commitment to learning and applying the strategies taught
                  in the course. We provide the blueprint and tools for success;
                  your task is to follow through with dedication. Remember, it's
                  your business, but we're here to guide you every step of the
                  way.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="z-20 border-b border-gray-800"
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                className="flex bg-transparent"
                expandIcon={
                  <ExpandMoreIcon className="transition-transform fill-white duration-200" />
                }
              >
                <Typography className="flex bg-transparent flex-1 items-center justify-between py-8 font-medium transition-all hover:underline">
                  Still have more questions?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-base text-gray-400">
                  Fill out the program form, and our dedicated agents will be
                  happy to provide answers.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
      <section>
        <PricingTable/>
      </section>
      <section className="mb-20 flex w-full flex-col items-center justify-between">
        <div className="relative flex h-auto w-full flex-col items-center justify-center">
          <div className="relative isolate px-4 sm:px-8 lg:px-24">
            <div className="container relative mx-auto my-10 w-full max-w-7xl rounded-3xl border border-gray-800/50 bg-gray-950/50 px-4 py-4 backdrop-blur-lg sm:px-8 sm:py-8 md:px-16 lg:px-24 lg:py-28">
              <div className="mb-8 flex justify-center">
                <a
                  href=""
                  className="z-20 flex size-auto items-center justify-start bg-none"
                >
                  <img
                    src="/images/ECOMSIN.png"
                    width={250}
                    height={50}
                    alt=""
                  />
                </a>
              </div>
              <div className="mb-8 flex justify-center">
                <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                  LAUNCH YOUR DREAM
                </div>
              </div>
              <div className="relative z-[20] text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                  E-commerce Mastery of the future. Available today.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Discover the Blueprint for E-commerce Triumph. See Success
                  Unfold Before You.
                </p>
                <div className="relative mt-10 flex flex-row items-center justify-center gap-2">
                  <a
                    href=""
                    className="z-20 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-blue-500 bg-white font-bold text-blue-500 shadow-2xl shadow-blue-500/50 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 h-11 px-8 rounded-full"
                  >
                    Get a Place
                  </a>
                  <a
                    href=""
                    className="z-20 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-blue-600 bg-gray-950 font-bold text-blue-500 shadow-2xl shadow-blue-500/50 hover:bg-gray-900 hover:text-blue-600 active:bg-blue-950 active:text-blue-500 h-11 px-8 rounded-full"
                  >
                    Become a Partner
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto relative mt-20 flex w-full max-w-7xl flex-col items-center justify-center gap-5 px-4 text-center sm:px-6 md:px-8">
        <div className="flex w-full flex-row items-center justify-center">
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/1.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/2.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/3.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/4.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/5.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/6.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
          <div className="group  relative -mr-4">
            <span className="flex shrink-0 overflow-hidden border-gray-950 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              <img
                src="/images/you.webp"
                className="aspect-square h-full w-full object-cover object-top h-[44px] w-[44px]"
                width={48}
                height={48}
                alt=""
              />
            </span>
          </div>
        </div>
        <p className="max-w-md text-sm text-gray-400">
          In a market capped at +€717 billion you can't even savor a slice of
          $1,000 a day ? We're the first paid program with a guaranteed profit
          through a legal contract. Plus, we handle everything from products to
          shipping and money transfers - it's all taken care of for you!
        </p>
        <p className="cairo max-w-md text-sm text-gray-400">
          في سوق تبلغ قيمته 717+ مليار يورو، ألا يمكنك حتى التمتع بشريحة من 1000
          دولار في اليوم؟ نحن أول برنامج مدفوع بربح مضمون من خلال عقد قانوني.
          بالإضافة إلى ذلك، نتولى كل شيء من المنتجات إلى الشحن وتحويل الأموال -
          كل شيء يتم العناية به من أجلك.
        </p>
      </section>
      <section className="w-full py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
          <div className="max-w-md">
            <div className="mb-8 flex justify-start">
              <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                Submit Your Application
              </div>
            </div>
            <div className="text-start">
              <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                Start Your Journey with Us Now
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-400">
                Complete the form to get started. If you meet our criteria, one
                of our dedicated agents will reach out to you promptly. Let's
                take the first step together towards a promising opportunity.
              </p>
            </div>
          </div>
          <div className="relative z-10 flex h-auto w-full flex-col items-start justify-start">
            <div className="w-full text-white">
              <form className="w-full space-y-6" action="">
                <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor=""
                  >
                    Full Name
                  </label>
                  <div className="flex w-full flex-1 flex-row items-stretch justify-start gap-2">
                    <input
                      placeholder="Yassine Fallahi"
                      name="fullname"
                      type="text"
                      className="flex h-10 rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We need your full name to address you properly.
                  </p>
                </div>
                <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone Number
                  </label>
                  <div className="flex w-full flex-1 flex-row items-stretch justify-start gap-2">
                    <input
                      type="phone"
                      name="phoneNumber"
                      placeholder="+212 XXX XXX XXX"
                      className="flex h-10 rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We need your phone number to contact you.
                  </p>
                </div>
                <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Where did you hear about us?
                  </label>
                  <div
                    className="gap-2 flex flex-col space-y-1"
                    role="radiogroup"
                  >
                    <div className="flex items-center space-x-3 space-y-0">
                      <label className="flex cursor-pointer items-center gap-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
                        <input
                          className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          type="radio"
                          value="option1"
                          checked={selectedOption === "option1"}
                          onChange={handleOptionChange}
                        />
                        Instagram
                      </label>
                    </div>
                    <div className="flex items-center space-x-3 space-y-0">
                      <label className="flex cursor-pointer items-center gap-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
                        <input
                          className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          type="radio"
                          value="option2"
                          checked={selectedOption === "option2"}
                          onChange={handleOptionChange}
                        />
                        Old Client Recommendation
                      </label>
                    </div>
                    <div className="flex items-center space-x-3 space-y-0">
                      <label className="flex cursor-pointer items-center gap-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
                        <input
                          className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          type="radio"
                          value="option3"
                          checked={selectedOption === "option3"}
                          onChange={handleOptionChange}
                        />
                        Somewhere Else
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Do you have experience in e-commerce?
                  </label>
                  <div
                    className="gap-2 flex flex-col space-y-1"
                    role="radiogroup"
                  >
                    <div className="flex items-center space-x-3 space-y-0">
                      <label className="flex cursor-pointer items-center gap-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
                        <input
                          className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          type="radio"
                          value="option1"
                          checked={selectedOption2 === "option1"}
                          onChange={handleOptionChange2}
                        />
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center space-x-3 space-y-0">
                      <label className="flex cursor-pointer items-center gap-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
                        <input
                          className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          type="radio"
                          value="option2"
                          checked={selectedOption2 === "option2"}
                          onChange={handleOptionChange2}
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    What is your budget range?
                  </label>
                  <div
                    className="gap-2 flex flex-col space-y-1"
                    role="radiogroup"
                  >
                    <div className="flex items-center space-x-3 space-y-0">
                      <label className="flex cursor-pointer items-center gap-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
                        <input
                          className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          type="radio"
                          value="option1"
                          checked={selectedOption3 === "option1"}
                          onChange={handleOptionChange3}
                        />
                        1K$ to 2.5K$
                      </label>
                    </div>
                    <div className="flex items-center space-x-3 space-y-0">
                      <label className="flex cursor-pointer items-center gap-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
                        <input
                          className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          type="radio"
                          value="option2"
                          checked={selectedOption3 === "option2"}
                          onChange={handleOptionChange3}
                        />
                        2.5K$ to 5K$
                      </label>
                    </div>
                    <div className="flex items-center space-x-3 space-y-0">
                      <label className="flex cursor-pointer items-center gap-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
                        <input
                          className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          type="radio"
                          value="option3"
                          checked={selectedOption3 === "option3"}
                          onChange={handleOptionChange3}
                        />
                        5K$
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-row items-center justify-end gap-2">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-blue-600 bg-gray-950 font-bold text-blue-500 shadow-2xl shadow-blue-500/50 hover:bg-gray-900 hover:text-blue-600 active:bg-blue-950 active:text-blue-500 h-10 px-4 py-2 rounded-full">
                    Reset
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-blue-500 bg-white font-bold text-blue-500 shadow-2xl shadow-blue-500/50 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 h-10 px-4 py-2 rounded-full">
                    Send your Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="relative z-10 flex h-auto w-full flex-col flex-wrap items-center justify-center gap-20 border-t border-blue-950 bg-gray-950 px-20 py-5 text-center md:flex-row">
        <div className="flex size-auto flex-1 flex-col items-center justify-start gap-10 md:flex-row">
          <a
            href=""
            className="z-20 flex size-auto items-center justify-start bg-none"
          >
            <img
              src="images/ECOMSIN.png"
              height={24}
              width={150}
              alt=""
            />
          </a>
          <div className="w-auto text-sm font-normal leading-snug text-gray-500/75">
            ©2024 Ecomsin, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
