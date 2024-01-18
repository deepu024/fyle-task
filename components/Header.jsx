"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
    const [val, setVal] = useState("");
    const router = useRouter();

    const onSubmit = (e) => {
        e.preventDefault();
        router.replace(`/user/${val}`);
        setVal("");
    }
    return (
        <nav className="navbar bg-[#02040A] sticky top-0">
            <div className="container-fluid flex justify-between">
                <div onClick={() => router.push("/")} className="flex gap-2 items-center text-base cursor-pointer">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                        className="octicon octicon-mark-github"
                        viewBox="0 0 16 16"
                        width={32}
                        height={32}
                        fill="#fff"
                        style={{
                            opacity: 1,
                            display: "inline-block",
                            userSelect: "none",
                            verticalAlign: "text-bottom",
                            overflow: "visible"
                        }}
                    >
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
                    </svg>
                    <p className="text-[#e6edf3]">GitHub</p>
                </div>
                <form onSubmit={onSubmit} className="d-flex">
                    <input onChange={(e) => setVal(e.target.value)} className="form-control me-2 bg-inherit border-[#30363C] outline-none text-white placeholder:text-white focus:outline-none focus:border-none focus:bg-inherit" required type="search" placeholder="Username" />
                    <button className="btn text-[#e6edf3] bg-[#30363C] hover:bg-[#c9d1d9a7]" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Header;