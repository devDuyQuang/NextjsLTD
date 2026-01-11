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
    const [activeTab, setActiveTab] = useState<"new" | "most-viewed" | "featured">("new");
    const [chandelierTab, setChandelierTab] = useState<"modern" | "classic">("modern");
    const [ceilingTab, setCeilingTab] = useState<"modern" | "classic">("modern");

    const bestSeller: Product[] = [
        { img: "/images/best-seller1.png", name: "Divaderme 9ml Black Lash Extender" },
        { img: "/images/best-seller2.png", name: "VOV Castledew Colorshot Lips" },
        { img: "/images/best--seller3.png", name: "TRESemme 5542DU 2200 W Power Dryer" },
        { img: "/images/best-seller4.png", name: "Combi Coccoro Convertible Car Seat" },
    ];

    const discounted: Product[] = [
        { img: "/images/discounted-products1.png", name: "Divaderme 9ml Black Lash Extender" },
        { img: "/images/discounted-products2.png", name: "VOV Castledew Colorshot Lips" },
        { img: "/images/discounted-products3.png", name: "TRESemme 5542DU 2200 W Power Dryer" },
        { img: "/images/discounted-products4.png", name: "Combi Coccoro Convertible Car Seat" },
    ];

    const news: NewsItem[] = [
        { img: "/images/new1.png", title: "3 Delicious Post-Holiday Detox Recipes, Courtesy of Personal Chef." },
        { img: "/images/new2.png", title: "All the Best Street Style Looks From London Fashion Week Fall 2016." },
        { img: "/images/new3.png", title: "High-End Street Style Shines at Haute Couture Fashion Week." },
        { img: "/images/new5.png", title: "Blogger Rumi Neely Where to Eat, Drink and Shop in LA." },
    ];

    const newProducts: Product[] = [
        { img: "/images/den-tha-tran.png", name: "ĐÈN THẢ TRẦN", code: "MÃ SP: 2203/22" },
        { img: "/images/AILIN-LINE-TRIMLESS.png", name: "AILIN LINE TRIMLESS", code: "MÃ SP: 2201/20" },
        { img: "/images/REBELL-II.png", name: "REBELL II", code: "MÃ SP: 2203/22" },
        { img: "/images/IVAR-SERFACED.png", name: "IVAR SERFACED", code: "MÃ SP: 2203/22" },
    ];

    const mostViewed = newProducts;
    const featured = newProducts;

    const promo40: Product[] = [
        { img: "/images/den-tha-tran2.png", name: "ĐÈN THẢ TRẦN", code: "Mã SP: 2203/22" },
        { img: "/images/AILIN LINE TRIMLESS.png", name: "AILIN LINE TRIMLESS", code: "Mã SP: 2201/20" },
        { img: "/images/REBELL II2.png", name: "REBELL II", code: "Mã SP: 2203/22" },
        { img: "/images/IVA SERFACED.png", name: "IVAR SERFACED", code: "Mã SP: 2203/22" },
    ];

    const chandelierModern = newProducts;
    const chandelierClassic = promo40;

    const ceilingModern = newProducts;
    const ceilingClassic = promo40;

    const renderProductGrid = (list: Product[]) => (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {list.map((p, i) => (
                <div
                    key={i}
                    className="bg-[#fafafa] border border-[#eee] p-3 sm:p-3.5 md:p-4 hover:bg-white transition flex flex-col"
                >
                    <div className="relative mb-3">
                        <img
                            src={p.img}
                            alt={p.name}
                            className="w-full h-[135px] sm:h-[145px] md:h-[160px] object-contain"
                        />
                        <span className="absolute top-2 right-2 bg-[#2fc92d] text-white text-[10px] px-2 py-1 rounded">
                            NEW
                        </span>
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="text-[13px] sm:text-sm font-semibold text-[#2fc92d] truncate">
                            {p.name}
                        </h3>
                        {p.code && (
                            <p className="text-[11px] sm:text-xs mt-1 text-[#444] truncate">{p.code}</p>
                        )}
                    </div>

                    <a
                        href="#"
                        className="mt-3 inline-flex justify-center px-3 sm:px-4 py-1 text-[13px] sm:text-sm border-2 border-[#2fc92d] text-[#2fc92d] rounded-[12px] hover:bg-[#2fc92d] hover:text-white transition-colors"
                    >
                        Chi Tiết
                    </a>
                </div>
            ))}
        </div>
    );

    const LeftBlockTitle = ({ text }: { text: string }) => (
        <div className="flex items-center gap-3 border-b border-[#eee] pb-2">
            <span className="w-[10px] h-[10px] bg-[#83dc37] rounded-full" />
            <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#7e8285] m-0">
                {text}
            </h2>
        </div>
    );

    const TabsRow = () => (
        <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b border-[#ddd] min-w-0">
            <div className="flex gap-2 md:gap-3 overflow-x-auto whitespace-nowrap pr-2 min-w-0">
                {(
                    [
                        { id: "new", label: "SẢN PHẨM MỚI" },
                        { id: "most-viewed", label: "SẢN PHẨM XEM NHIỀU" },
                        { id: "featured", label: "SẢN PHẨM NỔI BẬT" },
                    ] as const
                ).map((t) => (
                    <button
                        key={t.id}
                        type="button"
                        onClick={() => setActiveTab(t.id)}
                        className={`px-3 py-1.5 border text-[12px] sm:text-sm font-semibold transition-colors ${activeTab === t.id
                                ? "bg-[#2fc92d] text-white border-[#2fc92d]"
                                : "bg-white text-[#444] border-[#ddd] hover:bg-[#2fc92d] hover:text-white hover:border-[#2fc92d]"
                            }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div className="flex gap-1 text-lg shrink-0">
                <button className="px-1 hover:text-[#0cb759]">&lt;</button>
                <button className="px-1 hover:text-[#0cb759]">&gt;</button>
            </div>
        </div>
    );

    return (
        <main className="w-full my-5">
            <div className="container-web mx-auto px-3 sm:px-4 lg:px-0">
                <div className="grid grid-cols-12 gap-5 sm:gap-6">
                    {/* LEFT */}
                    <aside className="col-span-12 md:col-span-4 lg:col-span-3 space-y-4 min-w-0">
                        <div className="flex justify-center">
                            <img
                                src="/images/HOT-OLINE.png"
                                alt="Hot Online"
                                className="w-full max-w-[320px] h-auto object-contain"
                            />
                        </div>

                        <div className="bg-white border border-[#ddd] p-3 sm:p-3.5 md:p-4">
                            <LeftBlockTitle text="Sản Phẩm Bán Chạy" />
                            <div className="mt-3 space-y-3">
                                {bestSeller.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex gap-3 pb-3 border-b border-[#eee] last:border-b-0 last:pb-0 min-w-0"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] md:w-[96px] md:h-[96px] object-cover shrink-0"
                                        />
                                        <div className="min-w-0 flex flex-col gap-2">
                                            <span className="text-[12.5px] sm:text-[13px] md:text-[14px] text-[#555] leading-snug truncate">
                                                {item.name}
                                            </span>
                                            <a
                                                href="#"
                                                className="inline-flex w-fit bg-[#1cca19] text-white font-semibold border border-[#999] px-3 py-1 rounded-md shadow-[0_10px_10px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] hover:bg-[#27ae60] transition-all text-[12.5px] sm:text-sm"
                                            >
                                                Chi Tiết
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white border border-[#ddd] p-3 sm:p-3.5 md:p-4">
                            <LeftBlockTitle text="Sản Phẩm Giảm Giá" />
                            <div className="mt-3 space-y-3">
                                {discounted.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex gap-3 pb-3 border-b border-[#eee] last:border-b-0 last:pb-0 min-w-0"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] md:w-[96px] md:h-[96px] object-cover shrink-0"
                                        />
                                        <div className="min-w-0 flex flex-col gap-2">
                                            <span className="text-[12.5px] sm:text-[13px] md:text-[14px] text-[#555] leading-snug truncate">
                                                {item.name}
                                            </span>
                                            <a
                                                href="#"
                                                className="inline-flex w-fit bg-[#1cca19] text-white font-semibold border border-[#999] px-3 py-1 rounded-md shadow-[0_10px_10px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] hover:bg-[#27ae60] transition-all text-[12.5px] sm:text-sm"
                                            >
                                                Chi Tiết
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white border border-[#ddd] p-3 sm:p-3.5 md:p-4">
                            <LeftBlockTitle text="Tin Tức" />
                            <div className="mt-3 space-y-3">
                                {news.map((n, idx) => (
                                    <div
                                        key={idx}
                                        className="flex gap-3 pb-3 border-b border-[#eee] last:border-b-0 last:pb-0 min-w-0"
                                    >
                                        <img
                                            src={n.img}
                                            alt={n.title}
                                            className="w-[88px] h-[58px] sm:w-[96px] sm:h-[64px] object-cover shrink-0"
                                        />
                                        <div className="min-w-0">
                                            <span className="block text-[12.5px] sm:text-[13px] md:text-[14px] font-semibold text-black leading-snug truncate">
                                                {n.title}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* RIGHT */}
                    <section className="col-span-12 md:col-span-8 lg:col-span-9 space-y-5 sm:space-y-6 min-w-0">
                        <div className="bg-white border border-[#ddd] p-3 sm:p-3.5 md:p-4">
                            <TabsRow />
                            {activeTab === "new" && renderProductGrid(newProducts)}
                            {activeTab === "most-viewed" && renderProductGrid(mostViewed)}
                            {activeTab === "featured" && renderProductGrid(featured)}
                        </div>

                        <div className="bg-white border border-[#ddd] p-3 sm:p-3.5 md:p-4">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                                <h2 className="text-[15px] sm:text-[16px] md:text-[20px] font-semibold text-[#2fc92d]">
                                    Sản Phẩm Khuyến Mãi - 40% OFF
                                </h2>
                                <div className="flex gap-1 text-lg self-end md:self-auto">
                                    <button className="px-1 hover:text-[#0cb759]">&lt;</button>
                                    <button className="px-1 hover:text-[#0cb759]">&gt;</button>
                                </div>
                            </div>
                            {renderProductGrid(promo40)}
                        </div>

                        <div className="bg-white border border-[#ddd] p-3 sm:p-3.5 md:p-4">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3 min-w-0">
                                <h2 className="text-[15px] sm:text-[16px] md:text-[20px] font-semibold text-[#2fc92d]">
                                    Đèn Chùm
                                </h2>

                                <div className="flex gap-2 text-[12px] sm:text-sm overflow-x-auto whitespace-nowrap pr-2 min-w-0">
                                    <button
                                        type="button"
                                        className={`px-3 py-1.5 border transition-colors ${chandelierTab === "modern"
                                                ? "bg-[#2fc92d] text-white border-[#2fc92d]"
                                                : "bg-white text-[#6e6e6e] border-[#ddd] hover:bg-[#2fc92d] hover:text-white hover:border-[#2fc92d]"
                                            }`}
                                        onClick={() => setChandelierTab("modern")}
                                    >
                                        Đèn Chùm Hiện Đại
                                    </button>

                                    <button
                                        type="button"
                                        className={`px-3 py-1.5 border transition-colors ${chandelierTab === "classic"
                                                ? "bg-[#2fc92d] text-white border-[#2fc92d]"
                                                : "bg-white text-[#6e6e6e] border-[#ddd] hover:bg-[#2fc92d] hover:text-white hover:border-[#2fc92d]"
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

                        <div className="bg-white border border-[#ddd] p-3 sm:p-3.5 md:p-4">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3 min-w-0">
                                <h2 className="text-[15px] sm:text-[16px] md:text-[20px] font-semibold text-[#2fc92d]">
                                    Đèn Ốp Trần
                                </h2>

                                <div className="flex gap-2 text-[12px] sm:text-sm overflow-x-auto whitespace-nowrap pr-2 min-w-0">
                                    <button
                                        type="button"
                                        className={`px-3 py-1.5 border transition-colors ${ceilingTab === "modern"
                                                ? "bg-[#2fc92d] text-white border-[#2fc92d]"
                                                : "bg-white text-[#6e6e6e] border-[#ddd] hover:bg-[#2fc92d] hover:text-white hover:border-[#2fc92d]"
                                            }`}
                                        onClick={() => setCeilingTab("modern")}
                                    >
                                        Ốp Trần Phòng Khách Led Hiện Đại
                                    </button>

                                    <button
                                        type="button"
                                        className={`px-3 py-1.5 border transition-colors ${ceilingTab === "classic"
                                                ? "bg-[#2fc92d] text-white border-[#2fc92d]"
                                                : "bg-white text-[#6e6e6e] border-[#ddd] hover:bg-[#2fc92d] hover:text-white hover:border-[#2fc92d]"
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

                        {/* Block cuối của bạn: giữ nguyên cơ chế activeTab chung */}
                        <div className="bg-white border border-[#ddd] p-3 sm:p-3.5 md:p-4">
                            <TabsRow />
                            {activeTab === "new" && renderProductGrid(newProducts)}
                            {activeTab === "most-viewed" && renderProductGrid(mostViewed)}
                            {activeTab === "featured" && renderProductGrid(featured)}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
