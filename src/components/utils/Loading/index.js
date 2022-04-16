import Image from 'next/image'
import React from 'react'

const Loading = ({
    modal = false,
    inline = false,
}) => {
    if (inline) {
        return (
            <Image
                src="/assets/svgs/loading.svg"
                alt="Loading..."
                width={48}
                height={48}
                layout="fixed"
            />
        )
    }
    if (modal) {
        return (
            <div className='w-full h-screen fixed top-0 right-0 bg-black bg-opacity-40 flex items-center justify-center'>
                <div className="bg-layout-700 py-10 rounded shadow min-w-[280px] flex items-center justify-center">
                    <Image
                        src="/assets/svgs/loading.svg"
                        alt="Loading"
                        width={84}
                        height={84}
                    />
                </div>
            </div>
        )
    }
    return (
        <div className="w-full h-screen fixed top-0 right-0 bg-layout-700">
            <div className="w-full h-full flex items-center justify-center">
                <Image
                    src="/assets/svgs/loading.svg"
                    alt="Loading"
                    width={84}
                    height={84}
                />
            </div>
        </div>
    )
}

export default Loading