"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
    const categories = [
        "Sản Phẩm Ưa Chuộng",
        "Đèn Thả",
        "Đèn Chùm",
        "Đèn Ốp Trần",
        "Đèn Gắn Tường",
        "Đèn Rọi Gương Tắm Và Pha Tranh",
        "Đèn Rọi Chiếu Điểm",
        "Đèn Trang Trí Shop Quần Áo",
    ];

    const mainMenu = [
        "Trang Chủ",
        "Giới Thiệu",
        "Sản Phẩm",
        "Dự Án",
        "Bảo Hành & Hậu Mãi",
        "Tin Tức",
    ];

    const [open, setOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement | null>(null);

    // click outside => close
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!wrapRef.current) return;
            if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    // ESC => close
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, []);

    return (
        <nav className="w-full mt-2">
            <div className="container-web flex flex-col md:flex-row md:items-center gap-3 md:gap-0 px-4 md:px-0">
                {/* DANH MỤC */}
                <div ref={wrapRef} className="relative mt-4 w-full md:w-auto shrink-0 md:group">
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="bg-[#32cc33] h-[40px] w-full md:w-[270px] px-5 flex items-center gap-3 rounded-t-[18px] shadow cursor-pointer select-none"
                        aria-expanded={open}
                    >
                        <Image
                            src="/images/menu.png"
                            alt="menu icon"
                            width={22}
                            height={22}
                            className="shrink-0"
                        />
                        <span className="text-white text-[14px] sm:text-[16px] font-semibold uppercase whitespace-nowrap">
                            Danh Mục Sản Phẩm
                        </span>

                        {/* caret chỉ mobile */}
                        <span className={`ml-auto text-white transition-transform md:hidden ${open ? "rotate-180" : ""}`}>
                            ▼
                        </span>
                    </button>

                    {/* DROPDOWN */}
                    <ul
                        className={[
                            "absolute left-0 top-full w-full md:w-[270px] bg-white shadow-xl border border-gray-300 z-50",
                            "max-h-[70vh] overflow-auto",
                            // Mobile click mở
                            open ? "block" : "hidden",
                            // Desktop hover mở
                            "md:group-hover:block",
                        ].join(" ")}
                    >
                        {categories.map((item, index) => (
                            <li
                                key={index}
                                className={`px-6 py-3 text-[13px] uppercase border-b border-dotted border-gray-300 hover:bg-[#32cc33] hover:text-white cursor-pointer ${index === categories.length - 1 ? "border-b-0" : ""
                                    }`}
                                onClick={() => setOpen(false)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* MAIN MENU */}
                <div className="flex-1 flex items-start ml-0 md:ml-6 lg:ml-10 min-w-0">
                    <ul
                        className="
              flex flex-wrap
              gap-4 sm:gap-5 md:gap-5 lg:gap-6 xl:gap-8
              text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px]
              font-semibold uppercase
            "
                    >
                        {mainMenu.map((item, idx) => (
                            <li key={idx} className="leading-tight">
                                <a
                                    href="#"
                                    className="
                    text-[#444]
                    border-b-2 border-transparent
                    pb-1
                    hover:text-[#32cc33]
                    hover:border-[#8ed642]
                    transition-colors
                    xl:whitespace-nowrap
                  "
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* BANNER */}
            <div className="w-full">
                <img
                    src="/images/nav-img.png"
                    alt="nav"
                    className="w-full min-h-[220px] sm:min-h-[300px] md:min-h-[400px] object-cover"
                />
            </div>
        </nav>
    );
}
