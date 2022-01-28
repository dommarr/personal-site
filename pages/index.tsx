import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Github from '../components/github'
import { Linkedin, Twitter } from 'react-feather'

export default function Home() {
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-tr from-blue-100 to-white py-2 dark:from-slate-700 dark:via-slate-800 dark:to-gray-900`}
    >
      <Head>
        <title>Home | Dom Marrone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="relative flex w-full flex-1 flex-col items-center justify-center px-4 pb-20 text-center md:px-20">
        <h1 className="bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-6xl font-bold text-transparent dark:from-gray-400 dark:to-gray-50">
          Hi, I'm Dom!
        </h1>

        <div className="flex items-center justify-center space-x-4 p-4 text-slate-600 dark:text-gray-300">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dominic-marrone/"
          >
            <Linkedin className="h-7 w-7 hover:text-linkedin" />
          </a>
          <a target="_blank" href="https://twitter.com/dommmarr">
            <Twitter className="h-7 w-7 hover:text-twitter" />
          </a>
          <a target="_blank" href="https://github.com/dommarr">
            <Github />
          </a>
        </div>
        <div className="relative mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div className="absolute inset-y-0 left-0 h-48 w-48 animate-blobr rounded-full bg-sky-300 opacity-70 mix-blend-multiply blur-xl filter dark:bg-red-500 dark:mix-blend-normal dark:blur-2xl sm:left-12 lg:-top-6 lg:-left-4"></div>
          <div className="animation-delay-4000 absolute inset-y-0 right-0 h-48 w-48 animate-blobr rounded-full bg-teal-300 opacity-70 mix-blend-multiply blur-xl filter dark:bg-white dark:mix-blend-normal dark:blur-2xl sm:right-12 lg:left-28 lg:top-6"></div>
          <div className="animation-delay-2000 absolute -bottom-12 h-48 w-48 animate-blobr rounded-full bg-cyan-300 opacity-70 mix-blend-multiply blur-xl filter dark:bg-blue-500 dark:mix-blend-normal dark:blur-2xl lg:left-56 lg:top-0"></div>
          <div className="animation-delay-3000 absolute right-56 top-0 hidden h-48 w-48 animate-blob rounded-full bg-indigo-300 opacity-70 mix-blend-multiply blur-xl filter dark:bg-pink-500 dark:mix-blend-normal dark:blur-2xl lg:block"></div>
          <div className="animation-delay-5000 absolute right-28 top-6 hidden h-48 w-48 animate-blob rounded-full bg-blue-300 opacity-70 mix-blend-multiply blur-xl  filter dark:bg-red-500 dark:mix-blend-normal dark:blur-2xl lg:block"></div>
          <div className="animation-delay-1000 absolute -top-6 -right-4 hidden h-48 w-48 animate-blob rounded-full bg-violet-300 opacity-70 mix-blend-multiply blur-xl  filter dark:bg-yellow-500 dark:mix-blend-normal dark:blur-2xl lg:block"></div>
          <div className="flex max-w-4xl flex-col items-center justify-around sm:w-full lg:flex-row">
            <Link href="/portfolio">
              <a className="mt-6 w-80 rounded-xl bg-white bg-opacity-40 bg-clip-padding p-6 text-left text-slate-600 backdrop-blur-xl backdrop-filter hover:text-slate-800 dark:bg-slate-800 dark:bg-opacity-70 dark:text-gray-300 dark:hover:text-gray-100 sm:w-96">
                <h3 className="text-2xl font-bold">Portfolio &rarr;</h3>
                <p className="mt-4 text-xl">
                  Professional & side projects of mine.
                </p>
              </a>
            </Link>

            <a
              href="https://nextjs.org/learn"
              className="mt-6 w-80 rounded-xl bg-white bg-opacity-40 bg-clip-padding p-6 text-left text-slate-600 backdrop-blur-xl backdrop-filter hover:text-slate-800 dark:bg-slate-800 dark:bg-opacity-70 dark:text-gray-300 dark:hover:text-gray-100 sm:w-96"
            >
              <h3 className="text-2xl font-bold">Writing &rarr;</h3>
              <p className="mt-4 text-xl">Random things I've written.</p>
            </a>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center"></footer>
    </div>
  )
}
