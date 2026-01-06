// app/components/Header/Header.tsx

export default function Header() {
    return (
        <header className="w-full">
            {/* HEADER TOP */}
            <div
                className="w-full py-2 text-white capitalize bg-repeat-x"
                style={{
                    backgroundImage: "url('/images/bg-header-top.jpg')",
                    backgroundSize: "auto",
                }}
            >
                <div className="container-web flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-4">
                    {/* Text chào mừng */}
                    <p className="text-[#00ff0f] text-sm text-center sm:text-left">
                        Chào mừng bạn đã đến với Website của chúng tôi!
                    </p>

                    {/* Social text bên phải */}
                    <div className="text-[yellowgreen] hidden md:block">
                        <ul className="flex gap-4 text-sm">
                            <li>
                                <a href="#" className="text-[rgb(0,255,0)] no-underline">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[rgb(0,255,0)] no-underline">
                                    Wifi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[rgb(0,255,0)] no-underline">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[rgb(0,255,0)] no-underline">
                                    Skype
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[rgb(0,255,0)] no-underline">
                                    Youtube
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[rgb(0,255,0)] no-underline">
                                    Google
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* HEADER BOTTOM */}
            <div className="w-full py-5">
                <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row md:items-center px-4 gap-4 md:gap-6">
                    {/* Logo (kích thước theo ảnh gốc) */}
                    <div className="shrink-0 flex justify-center md:justify-start">
                        <img
                            src="/images/image.png"
                            className="w-[160px] sm:w-[180px] md:w-[200px] h-auto"
                            alt="Logo"
                        />
                    </div>

                    {/* Search: chiếm toàn bộ phần còn lại */}
                    <div className="flex-1 flex justify-center w-full">
                        <div className="flex w-full max-w-[600px]">
                            <input
                                type="search"
                                placeholder="Nhập từ khóa tìm kiếm"
                                className="w-full h-[44px] sm:h-[48px] md:h-[50px] border-2 border-[#31A631] rounded-l-[30px] px-4 outline-none"
                            />
                            <button className="bg-[#31A631] w-[56px] sm:w-[64px] md:w-[70px] flex items-center justify-center rounded-r-[30px] border border-[#3BBE3B]">
                                <img src="/images/search.png" className="w-[22px] sm:w-[26px] md:w-[28px]" alt="Search" />
                            </button>
                        </div>
                    </div>

                    {/* Hotline */}
                    <div className="flex flex-col justify-center text-[14px] md:text-[15px] text-[#333] shrink-0 md:ml-4 items-center md:items-start">
                        <div className="flex items-center mb-1">
                            <img src="/images/call.png" className="w-[15px] mr-2" alt="Call" />
                            <span>Hotline: 016. 5904. 1977</span>
                        </div>
                        <div className="flex items-center">
                            <img src="/images/email.png" className="w-[15px] mr-2" alt="Email" />
                            <span>Email: ledthaiduong@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
