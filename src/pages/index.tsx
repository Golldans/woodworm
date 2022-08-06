import type { NextPage } from 'next'
import Head from 'next/head'
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
          <div className={`flex items-center justify-start font-bold p-5`}>woodworm</div>
          <div className={`flex items-center justify-center`}>items</div>
          <div className={`flex items-center justify-center`}>login</div>
        </nav>
      </header>
      <main>
        <section className={`xl:bg-neutral-800 xl:h-4/5-screen h-screen w-screen p-12 max-w-full`}>
          <div className={`grid grid-cols-2 grid-rows-4 h-full w-full`}>
            <div className={`bg-stone-900 row-span-3 text-white flex items-center`}>
              everything<br></br>
              right here<br></br>
              right now<br></br>
            </div>
            <div className={`bg-stone-800 row-span-3 col-start-2 flex items-center justify-center`}>
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
      <footer>

      </footer>
    </Fragment>
  )
}

export default Home
