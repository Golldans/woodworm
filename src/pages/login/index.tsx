import Link from "next/link";
import { Fragment } from "react";

export default function Login() {
    return(
        <Fragment>
            <main>
                <section className={`bg-neutral-900 w-screen h-screen flex items-center justify-center flex-col`}>
                    <h1 className={`text-white font-bold w-1/5 text-center`}>
                    Keep anything that can remind you would be admitting that I could forget you.
                    </h1>
                    <form className={`w-2/5 flex items-center justify-center flex-col bg-neutral-800 p-5 m-5 rounded-md`}>
                        <button className={`w-3/4 m-2 p-2 border-neutral-700 border rounded text-white`}>
                            You know me from Google
                        </button>
                        <button className={`w-3/4 m-2 p-2 border-neutral-700 border rounded text-white`}>
                            You know me from Facebook
                        </button>
                        <span className={`text-white`}>
                            or
                        </span>

                        <input type="text" placeholder="User" name="" id="" className={`w-3/4 m-2 p-2 bg-neutral-800 border-neutral-700 border rounded outline-none text-white`} />
                        <input type="password" placeholder="Password" name="" id="" className={`w-3/4 m-2 p-2 bg-neutral-800 border-neutral-700 border rounded outline-none text-white`} />
                        <button className={`bg-white  m-2 p-2 rounded`}>Sign In</button>
                    </form>
                        <span className={`flex text-neutral-700`}>
                            <h1 className={`p-1`}>
                                Have we met before?
                            </h1>
                            <h1 className={`p-1 text-red-600 hover:text-red-800 cursor-pointer transition-all duration-100`}>
                                <Link href={`/register`}>
                                Join us
                                </Link>
                            </h1>
                        </span>
                        <span className={`flex text-neutral-700`}>
                            <h1 className={`p-1`}>
                                Forgot who you where?
                            </h1>
                            <h1 className={`p-1 text-red-600 hover:text-red-800 cursor-pointer transition-all duration-100`}>
                                Prove us
                            </h1>
                        </span>
                </section>
            </main>
        </Fragment>
    )
}