// app/components/Header/Nav.tsx
import Image from "next/image";

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
        "Liên Hệ",
    ];

    return (
        <nav className="w-full mt-2">
            <div className="container-web flex flex-col md:flex-row md:items-center gap-3 md:gap-0 px-4 md:px-0">
                <div className="relative group mt-4 w-full md:w-auto">
                    <div className="bg-[#32cc33] h-[40px] w-full md:w-[270px] px-5 flex items-center gap-3 rounded-t-[18px] shadow cursor-pointer">
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
                    </div>

                    <ul className="absolute left-0 top-full w-full md:w-[270px] bg-white shadow-xl border border-gray-300 hidden group-hover:block z-50 rounded-none">
                        {categories.map((item, index) => (
                            <li
                                key={index}
                                className={`px-6 py-3 text-[13px] uppercase border-b border-dotted border-gray-300 hover:bg-[#32cc33] 
                  hover:text-white cursor-pointer
                  ${index === categories.length - 1 ? "border-b-0" : ""}`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 flex items-start h-auto md:h-[10px] ml-0 md:ml-10">
                    <ul className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 text-[14px] sm:text-[16px] md:text-[18px] font-semibold uppercase">
                        {mainMenu.map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href="#"
                                    className="text-[#444] border-b-2 border-transparent pb-1 hover:text-[#32cc33] hover:border-[#8ed642] transition-colors whitespace-nowrap"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

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
