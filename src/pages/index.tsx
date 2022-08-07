import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import CreditCard from '../components/credit-card'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>woodworm</title>
      </Head>
      <header>
        <nav className={`w-screen max-w-full h-14 grid grid-cols-3 text-white bg-neutral-900`}>
          <div className={`flex items-center justify-start font-bold p-5 h-full`}>
            <h1>
              woodworm
            </h1>
          </div>
          <div className={`flex items-center justify-center`}>
          <ol className={`flex h-full`}>
            <li className={`p-2 m-2`}>oi</li>
            <li className={`p-2 m-2`}>oi</li>
            <li className={`p-2 m-2`}>oi</li>
          </ol>
          </div>
          <div className={`flex items-center justify-center`}>
            <div className={`h-full`}>
              <button className={`p-2 m-2 h-`}>
                Login
              </button>
              <button className={`bg-white text-black font-semibold p-2 m-2 rounded`}>
                <Link href={`/login`}>
                Sign Up
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className={`xl:bg-neutral-900 xl:h-4/5-screen h-screen w-screen p-12 max-w-full`}>
          <div className={`grid grid-cols-2 grid-rows-4 h-full w-full`}>
            <div className={`bg-neutral-900 row-span-3 text-white flex items-center`}>
              <span className={`p-3 text-4xl font-bold anti`}>
                everything<br></br>
                everywhere<br></br>
                right here<br></br>
                right now<br></br>
              </span>
            </div>
            <div className={`bg-neutral-900 row-span-3 col-start-2 flex items-center justify-center`}>
              <CreditCard />
            </div>
            <div className={`bg-stone-700 col-span-2 grid grid-cols-3`}>
              <div className={`flex items-center justify-center text-white`}>hello</div>
              <div className={`flex items-center justify-center text-white`}>hello</div>
              <div className={`flex items-center justify-center text-white`}>hello</div>
            </div>
          </div>
        </section>
        <section className={`bg-neutral-800 h-screen w-screen max-w-full`}>

        </section>
      </main>
      <footer className={`bg-stone-900 w-screen h-64 max-w-full`}>

      </footer>
    </Fragment>
  )
}

export default Home
