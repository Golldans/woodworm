import { Fragment } from "react";
import Post from "../../components/post";

export default function Home() {
    return(
        <Fragment>
            <header className={`w-screen max-w-full h-10 bg-stone-900`}>

                <title>Home</title>
            </header>
            <main className={`flex max-w-full`}>
                <section className={`w-3/12 h-screen bg-stone-800 grid grid-cols-5 grid-rows-11`}>
                    <div className={`bg-slate-100 row-span-9`}></div>
                    <div className={`bg-slate-300 row-span-9 col-span-4`}></div>
                    <div className={`bg-slate-500 row-span-2 col-span-5`}></div>
                </section>
                <section className={`w-7/12 bg-stone-900`}>
                    <Post />
                </section>
                <section className={`w-2/12 bg-stone-800`}>

                </section>
            </main>
        </Fragment>
    )
}