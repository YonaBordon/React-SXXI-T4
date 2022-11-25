import { Skeleton } from '@mui/material';
import React from 'react'

const SkeletonList = () => {
    return (

        <div className="container mx-auto w-full h-screen px-4 sm:px-8 ">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-8 overflow-x-auto ">
                <div className="inline-block min-w-full shadow rounded-lg px-8 py-4 overflow-hidden">
                    <Skeleton className="w-[15%]" height={50} />
                    <div className="flex w-full">
                        <Skeleton className="w-[6%] mr-2" height={50} />
                        <Skeleton className="w-[10%] mr-2" height={50} />
                        <Skeleton className="w-[15%] mr-2" height={50} />
                        <Skeleton className="w-[15%]" height={50} />
                    </div>
                    <Skeleton className="w-[100%]" height={50} />
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto grid grid-cols-3">
                        <div className="inline-block min-w-full px-2  overflow-hidden">
                            <Skeleton height={50} />
                        </div>
                        <div className="inline-block min-w-full px-2  overflow-hidden">
                            <Skeleton  height={50}/>
                        </div>
                        <div className="flex min-w-full px-2 justify-around overflow-hidden">
                            <Skeleton height={50} className="w-[20%]"/>
                            <Skeleton height={50} className="w-[20%]" />
                        </div>

                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto grid grid-cols-3">
                        <div className="inline-block min-w-full px-2  overflow-hidden">
                            <Skeleton height={50} />
                        </div>
                        <div className="inline-block min-w-full px-2  overflow-hidden">
                            <Skeleton  height={50}/>
                        </div>
                        <div className="flex min-w-full px-2 justify-around overflow-hidden">
                            <Skeleton  height={50} className="w-[20%]"/>
                            <Skeleton height={50} className="w-[20%]" />
                        </div>

                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto grid grid-cols-3">
                        <div className="inline-block min-w-full px-2  overflow-hidden">
                            <Skeleton height={50} />
                        </div>
                        <div className="inline-block min-w-full px-2  overflow-hidden">
                            <Skeleton height={50} />
                        </div>
                        <div className="flex min-w-full px-2 justify-around overflow-hidden">
                            <Skeleton height={50} className="w-[20%]"/>
                            <Skeleton height={50} className="w-[20%]" />
                        </div>

                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto grid grid-cols-3">
                        <div className="inline-block min-w-full px-2  overflow-hidden">
                            <Skeleton height={50} />
                        </div>
                        <div className="inline-block min-w-full px-2  overflow-hidden">
                            <Skeleton height={50} />
                        </div>
                        <div className="flex min-w-full px-2 justify-around overflow-hidden">
                            <Skeleton  height={50} className="w-[20%]"/>
                            <Skeleton height={50} className="w-[20%]" />
                        </div>

                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto grid grid-cols-3">
                        <div className="inline-block min-w-full px-2  overflow-hidden">
                            <Skeleton height={50} />
                        </div>
                        <div className="inline-block min-w-full px-2  overflow-hidden">
                            <Skeleton height={50} />
                        </div>
                        <div className="flex min-w-full px-2 justify-around overflow-hidden">
                            <Skeleton height={50} className="w-[20%]"/>
                            <Skeleton height={50} className="w-[20%]" />
                        </div>

                    </div>
                    <div className="w-full flex items-center justify-center">
                        <Skeleton height={40} width={150} />
                    </div>
                </div>

            </div >
        </div>
    )
}
export default SkeletonList