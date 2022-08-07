import { Fragment } from "react";

export default function Post() {
    return(
        <Fragment>
            <div className={`bg-white w-2/5 h-44 rounded-md m-2 flex items-end bg-[url('/moth_placeholder.jpg')] bg-cover bg-center`}>
                <div className={`bg-slate-200 w-full h-1/2 rounded-b-md opacity-50`}>
                    <h1 className={`opacity-100`}>
                    i'm a banner
                    </h1>
                </div>
            </div>
        </Fragment>
    )
}