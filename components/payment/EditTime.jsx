import React from 'react'

export default function EditTime() {
    return (
        <>
            <div className="time w-full flex bg-blue-500 px-5 mx-auto pb-2">
                <p className="w-1/2 text-sm text-white flex items-center">
                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs pl-1">11:00 - 14:00</span>
                </p>
                <p className="w-1/2 text-sm text-white flex items-center pl-5">
                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs pl-1">11:00 - 14:00</span>
                </p>
            </div>
        </>
    )
}
