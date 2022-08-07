import { Fragment } from "react";

export default function CreditCard({}) {
    return (
        <Fragment>
            <div className={`bg-slate-50 h-52 w-96 rounded-md grid grid-cols-6`}>
                <div className={`col-span-3 flex flex-col`}>
                    <div className={`w-full h-3/4`}>

                    </div>
                    <div className={`w-full h-1/4`}>
                        <span className={`p-2 w-full flex flex-col`}>
                            <b className={`font-light text-sm tracking-widest`}>
                                unknown user
                            </b>
                            <b className={`font-light text-sm tracking-widest`}>
                                111.111.111.11
                            </b>
                        </span>
                    </div>
                </div>
                <div className={`col-span-2 bg-woodworm_pattern bg-50% bg-center bg-repeat-y`} >

                </div>
                <div className={`col-span-1 rounded-r-md  bg-moth bg-90% bg-center bg-no-repeat`}>
                    
                </div>
            </div>
        </Fragment>
    )
}