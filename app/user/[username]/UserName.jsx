"use client";
import Image from 'next/image';
import React, { useState } from 'react'

const UserName = ({ userDet, languages, userRepo, defaultPage, hasNextPage }) => {
    let pgN = parseInt(defaultPage)
    const [page, setPage] = useState(pgN);
    return (
        <div className="text-white flex flex-col p-10 gap-10">
            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                <Image
                    src={userDet.avatar_url}
                    alt="USER"
                    width={300}
                    height={300}
                    className="rounded-full"
                />
                <div className="flex flex-col md:gap-4 gap-2">
                    <p className="text-4xl font-bold">{userDet.name}</p>
                    <p>{userDet.bio}</p>
                    <p>{userDet.location}</p>
                    <p>{userDet.email}</p>
                    <p>{userDet.twitter_username}</p>
                </div>
            </div>
            <a href={`${userDet.html_url}`} target="_blank" className="flex gap-2 items-center"><svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></svg>{userDet.html_url}</a>
            <div className="grid grid-cols-1 md:grid-cols-2  items-start justify-start gap-x-20 gap-y-10">
                {
                    userRepo.map((repo) => (
                        <div key={repo.id} className="border p-4 flex flex-col gap-3 h-full w-full">
                            <a href={repo.clone_url} target="_blank" className="text-[#3081F7] font-bold text-xl underline" >{repo.name}</a>
                            <p>{repo.description}</p>
                            <div className='flex flex-wrap gap-3'>
                                {
                                    Object.keys((languages[repo.name])).map((lan) => (
                                        <div key={lan.id} className='flex justify-center items-center bg-[#3081F7] p-2 rounded-lg'>
                                            {lan}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        page > 1 && <li className="page-item">
                            <a className="page-link" href={`?page=${page-1}`}aria-label="Previous">
                                <span aria-hidden="true">Prev &laquo;</span>
                            </a>
                        </li>
                    }
                    {
                        hasNextPage && 
                        <li className="page-item">
                            <a className="page-link" href={`?page=${page+1}`} aria-label="Next">
                                <span aria-hidden="true">Next &raquo;</span>
                            </a>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default UserName