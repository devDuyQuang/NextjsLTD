"use client";

import { useState } from "react";

type Product = {
    img: string;
    name: string;
    code?: string;
};

type NewsItem = {
    img: string;
    title: string;
};

export default function Main() {
    // Tab bên phải
    const [activeTab, setActiveTab] = useState<"new" | "most-viewed" | "featured">(
        "new"
    );

    // Tab Đèn Chùm
    const [chandelierTab, setChandelierTab] = useState<"modern" | "classic">(
        "modern"
    );

    // Tab Đèn Ốp Trần
    const [ceilingTab, setCeilingTab] = useState<"modern" | "classic">("modern");

    //  DATA BÊN TRÁI 
    const bestSeller: Product[] = [
        {
            img: "/images/best-seller1.png",
            name: "Divaderme 9ml Black Lash Extender",
        },
        {
            img: "/images/best-seller2.png",
            name: "VOV Castledew Colorshot Lips",
        },
        {
            img: "/images/best--seller3.png",
            name: "TRESemme 5542DU 2200 W Power Dryer",
        },
        {
            img: "/images/best-seller4.png",
            name: "Combi Coccoro Convertible Car Seat",
        },
    ];

    const discounted: Product[] = [
        {
            img: "/images/discounted-products1.png",
            name: "Divaderme 9ml Black Lash Extender",
        },
        {
            img: "/images/discounted-products2.png",
            name: "VOV Castledew Colorshot Lips",
        },
        {
            img: "/images/discounted-products3.png",
            name: "TRESemme 5542DU 2200 W Power Dryer",
        },
        {
            img: "/images/discounted-products4.png",
            name: "Combi Coccoro Convertible Car Seat",
        },
    ];

    const news: NewsItem[] = [
        {
            img: "/images/new1.png",
            title:
                "3 Delicious Post-Holiday Detox Recipes, Courtesy of Personal Chef.",
        },
        {
            img: "/images/new2.png",
            title:
                "All the Best Street Style Looks From London Fashion Week Fall 2016.",
        },
        {
            img: "/images/new3.png",
            title: "High-End Street Style Shines at Haute Couture Fashion Week.",
        },
        {
            img: "/images/new5.png",
            title: "Blogger Rumi Neely Where to Eat, Drink and Shop in LA.",
        },
    ];

    //  DATA TAB PHẢI 
    const newProducts: Product[] = [
        {
            img: "/images/den-tha-tran.png",
            name: "ĐÈN THẢ TRẦN",
            code: "MÃ SP: 2203/22",
        },
        {
            img: "/images/AILIN-LINE-TRIMLESS.png",
            name: "AILIN LINE TRIMLESS",
            code: "MÃ SP: 2201/20",
        },
        {
            img: "/images/REBELL-II.png",
            name: "REBELL II",
            code: "MÃ SP: 2203/22",
        },
        {
            img: "/images/IVAR-SERFACED.png",
            name: "IVAR SERFACED",
            code: "MÃ SP: 2203/22",
        },
    ];

    const mostViewed = newProducts;
    const featured = newProducts;

    //  DATA -40% 
    const promo40: Product[] = [
        {
            img: "/images/den-tha-tran2.png",
            name: "ĐÈN THẢ TRẦN",
            code: "Mã SP: 2203/22",
        },
        {
            img: "/images/AILIN LINE TRIMLESS.png",
            name: "AILIN LINE TRIMLESS",
            code: "Mã SP: 2201/20",
        },
        {
            img: "/images/REBELL II2.png",
            name: "REBELL II",
            code: "Mã SP: 2203/22",
        },
        {
            img: "/images/IVA SERFACED.png",
            name: "IVAR SERFACED",
            code: "Mã SP: 2203/22",
        },
    ];

    const chandelierModern = newProducts;
    const chandelierClassic = promo40;

    const ceilingModern = newProducts;
    const ceilingClassic = promo40;

    // Render grid 4 cột bên phải
    const renderProductGrid = (list: Product[]) => (
        <div className="flex flex-wrap gap-2">
            {list.map((p, i) => (
                <div
                    key={i}
                    className="w-[calc(25%-10px)] bg-[#fafafa] text-center p-3 border border-[#eee] relative transition-all duration-300 hover:-translate-y-2 hover:bg-white"
                >
                    <img src={p.img} alt={p.name} className="w-full h-auto mb-4" />
                    <span className="absolute top-2 right-2 bg-[#2fc92d] text-white text-xs px-2 py-1 rounded">
                        NEW
                    </span>
                    <h3 className="text-sm font-semibold text-[#2fc92d] truncate">
                        {p.name}
                    </h3>
                    {p.code && (
                        <p className="text-xs mt-1 mb-2 text-[#444]">{p.code}</p>
                    )}
                    <a
                        href="#"
                        className="inline-block px-4 py-[3px] text-sm border-2 border-[#2fc92d] text-[#2fc92d] rounded-[12px] hover:bg-[#2fc92d] hover:text-white transition-colors"
                    >
                        Chi Tiết
                    </a>
                </div>
            ))}
        </div>
    );

    return (
        <main className="w-full my-5">
            {/* container-web đã định nghĩa trong globals.css */}
            <div className="container-web mx-auto flex gap-6">
                {/*  CỘT TRÁI (30%)  */}
                <div className="w-[25%] space-y-4">
                    <div className="flex justify-center">
                        <img
                            src="/images/HOT-OLINE.png"
                            alt="Hot Online"
                            className="max-w-[100%] max-h-[100%] h-auto object-contain"
                        />

                    </div>

                    {/* SẢN PHẨM BÁN CHẠY */}
                    <div className="bg-white border border-[#ddd] p-3">
                        <div className="flex items-center gap-3 pl-5 mt-2 mb-1 border-b border-[#eee] pb-1">
                            <button className="w-[10px] h-[10px] bg-[#83dc37] rounded-full" />
                            <h2 className="text-[18px] text-[#7e8285] m-0">
                                Sản Phẩm Bán Chạy
                            </h2>
                        </div>

                        <div className="px-3 pb-2">
                            {bestSeller.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center pb-2 mb-2 border-b border-[#eee] last:border-b-0 last:mb-0"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-[100px] h-[100px] mr-4"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-[14px] text-[#555] mb-1 leading-tight max-w-[260px]">
                                            {item.name}
                                        </span>
                                        <a
                                            href="#"
                                            className="inline-block bg-[#1cca19] text-white font-semibold border border-[#999] px-3 py-1 rounded-md shadow-[0_10px_10px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] hover:bg-[#27ae60] transition-all text-sm"
                                        >
                                            Chi Tiết
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SẢN PHẨM GIẢM GIÁ */}
                    <div className="bg-white border border-[#ddd] p-3">
                        <div className="flex items-center gap-3 pl-5 mt-2 mb-1 border-b border-[#eee] pb-1">
                            <button className="w-[10px] h-[10px] bg-[#83dc37] rounded-full" />
                            <h2 className="text-[18px] text-[#7e8285] m-0">
                                Sản Phẩm Giảm Giá
                            </h2>
                        </div>

                        <div className="px-3 pb-2">
                            {discounted.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center pb-2 mb-2 border-b border-[#eee] last:border-b-0 last:mb-0"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-[100px] h-[100px] mr-4"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-[14px] text-[#555] mb-1 leading-tight max-w-[260px]">
                                            {item.name}
                                        </span>
                                        <a
                                            href="#"
                                            className="inline-block bg-[#1cca19] text-white font-semibold border border-[#999] px-3 py-1 rounded-md shadow-[0_10px_10px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] hover:bg-[#27ae60] transition-all text-sm"
                                        >
                                            Chi Tiết
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TIN TỨC */}
                    <div className="bg-white border border-[#ddd] p-3">
                        <div className="flex items-center gap-3 pl-5 mt-2 mb-2 border-b border-[#eee] pb-2">
                            <button className="w-[10px] h-[10px] bg-[#83dc37] rounded-full" />
                            <h2 className="text-[18px] text-[#7e8285] m-0">Tin Tức</h2>
                        </div>

                        <div className="px-3 pb-3">
                            {news.map((n, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center mb-4 pb-2 border-b border-[#eee] last:border-b-0 last:mb-0"
                                >
                                    <img
                                        src={n.img}
                                        alt={n.title}
                                        className="w-[100px] h-[60px] mr-4 object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-[14px] font-semibold text-black leading-snug max-w-[260px]">
                                            {n.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/*  CỘT PHẢI (70%)  */}
                <div className="w-[80%] space-y-6">
                    {/* Tabs SẢN PHẨM MỚI / XEM NHIỀU / NỔI BẬT */}
                    <div className="bg-white border border-[#ddd] p-3">
                        <div className="flex justify-between items-center pb-2 mb-3 relative">
                            <ul className="flex gap-4 text-sm">
                                {([
                                    { id: "new", label: "SẢN PHẨM MỚI" },
                                    { id: "most-viewed", label: "SẢN PHẨM XEM NHIỀU" },
                                    { id: "featured", label: "SẢN PHẨM NỔI BẬT" },
                                ] as const).map((t) => (
                                    <li
                                        key={t.id}
                                        onClick={() => setActiveTab(t.id)}
                                        className={`px-3 py-1 cursor-pointer transition-colors ${activeTab === t.id
                                            ? "bg-[#2fc92d] text-white"
                                            : "hover:bg-[#2fc92d] hover:text-white"
                                            }`}
                                    >
                                        {t.label}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-1 text-lg">
                                <button className="px-1 hover:text-[#0cb759]">&lt;</button>
                                <button className="px-1 hover:text-[#0cb759]">&gt;</button>
                            </div>

                            <span className="absolute left-0 bottom-0 w-full h-px bg-[#ddd]" />
                        </div>

                        {activeTab === "new" && renderProductGrid(newProducts)}
                        {activeTab === "most-viewed" && renderProductGrid(mostViewed)}
                        {activeTab === "featured" && renderProductGrid(featured)}
                    </div>

                    {/* 40% OFF */}
                    <div className="bg-white border border-[#ddd] p-3">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-[20px] text-[#2fc92d] ml-12">
                                Sản Phẩm Khuyến Mãi - 40% OFF
                            </h2>
                            <div className="flex gap-1 text-lg">
                                <button className="px-1 hover:text-[#0cb759]">&lt;</button>
                                <button className="px-1 hover:text-[#0cb759]">&gt;</button>
                            </div>
                        </div>

                        {renderProductGrid(promo40)}
                    </div>

                    {/* ĐÈN CHÙM */}
                    <div className="bg-white border border-[#ddd] p-3">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-[20px] text-[#2fc92d] ml-12">Đèn Chùm</h2>

                            <div className="flex gap-2 text-sm">
                                <button
                                    className={`px-3 py-1 ${chandelierTab === "modern"
                                        ? "bg-[#2fc92d] text-white"
                                        : "text-[#6e6e6e]"
                                        }`}
                                    onClick={() => setChandelierTab("modern")}
                                >
                                    Đèn Chùm Hiện Đại
                                </button>

                                <button
                                    className={`px-3 py-1 ${chandelierTab === "classic"
                                        ? "bg-[#2fc92d] text-white"
                                        : "text-[#6e6e6e]"
                                        }`}
                                    onClick={() => setChandelierTab("classic")}
                                >
                                    Đèn Chùm Đồng
                                </button>
                            </div>
                        </div>

                        {chandelierTab === "modern" && renderProductGrid(chandelierModern)}
                        {chandelierTab === "classic" && renderProductGrid(chandelierClassic)}
                    </div>

                    {/* ĐÈN ỐP TRẦN */}
                    <div className="bg-white border border-[#ddd] p-3">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-[20px] text-[#2fc92d] ml-12">Đèn Ốp Trần</h2>

                            <div className="flex gap-2 text-sm">
                                <button
                                    className={`px-3 py-1 ${ceilingTab === "modern"
                                        ? "bg-[#2fc92d] text-white"
                                        : "text-[#6e6e6e]"
                                        }`}
                                    onClick={() => setCeilingTab("modern")}
                                >
                                    Ốp Trần Phòng Khách Led Hiện Đại
                                </button>

                                <button
                                    className={`px-3 py-1 ${ceilingTab === "classic"
                                        ? "bg-[#2fc92d] text-white"
                                        : "text-[#6e6e6e]"
                                        }`}
                                    onClick={() => setCeilingTab("classic")}
                                >
                                    Ốp Trần Phòng Ngủ &amp; Hành Lang
                                </button>
                            </div>
                        </div>

                        {ceilingTab === "modern" && renderProductGrid(ceilingModern)}
                        {ceilingTab === "classic" && renderProductGrid(ceilingClassic)}
                    </div>
                    <div className="bg-white border border-[#ddd] p-3">
                        <div className="flex justify-between items-center pb-2 mb-3 relative">
                            <ul className="flex gap-4 text-sm">
                                {([
                                    { id: "new", label: "SẢN PHẨM MỚI" },
                                    { id: "most-viewed", label: "SẢN PHẨM XEM NHIỀU" },
                                    { id: "featured", label: "SẢN PHẨM NỔI BẬT" },
                                ] as const).map((t) => (
                                    <li
                                        key={t.id}
                                        onClick={() => setActiveTab(t.id)}
                                        className={`px-3 py-1 cursor-pointer transition-colors ${activeTab === t.id
                                            ? "bg-[#2fc92d] text-white"
                                            : "hover:bg-[#2fc92d] hover:text-white"
                                            }`}
                                    >
                                        {t.label}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-1 text-lg">
                                <button className="px-1 hover:text-[#0cb759]">&lt;</button>
                                <button className="px-1 hover:text-[#0cb759]">&gt;</button>
                            </div>

                            <span className="absolute left-0 bottom-0 w-full h-px bg-[#ddd]" />
                        </div>

                        {activeTab === "new" && renderProductGrid(newProducts)}
                        {activeTab === "most-viewed" && renderProductGrid(mostViewed)}
                        {activeTab === "featured" && renderProductGrid(featured)}
                    </div>
                </div>
            </div>
        </main>
    );
}
