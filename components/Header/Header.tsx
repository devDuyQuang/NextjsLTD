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
                <div className="container-web flex items-center justify-between px-4">
                    {/* Text chào mừng */}
                    <p className="text-[#00ff0f] text-sm text-center">
                        Chào mừng bạn đã đến với Website của chúng tôi!
                    </p>

                    {/* Social text bên phải */}
                    <div className="text-[yellowgreen]">
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
                <div className="max-w-[1140px] mx-auto flex items-center px-4 gap-6">

                    {/* Logo (kích thước theo ảnh gốc) */}
                    <div className="shrink-0">
                        <img src="/images/image.png" className="w-[200px] h-auto" />
                    </div>

                    {/* Search: chiếm toàn bộ phần còn lại */}
                    <div className="flex-1 flex justify-center">
                        <div className="flex w-full max-w-[600px]">
                            <input
                                type="search"
                                placeholder="Nhập từ khóa tìm kiếm"
                                className="w-full h-[50px] border-2 border-[#31A631] rounded-l-[30px] px-4 outline-none"
                            />
                            <button
                                className="bg-[#31A631] w-[70px] flex items-center justify-center rounded-r-[30px] border border-[#3BBE3B]"
                            >
                                <img src="/images/search.png" className="w-[28px]" />
                            </button>
                        </div>
                    </div>

                    {/* Hotline */}
                    <div className="flex flex-col justify-center text-[15px] text-[#333] shrink-0 ml-4">
                        <div className="flex items-center mb-1">
                            <img src="/images/call.png" className="w-[15px] mr-2" />
                            <span>Hotline: 016. 5904. 1977</span>
                        </div>
                        <div className="flex items-center">
                            <img src="/images/email.png" className="w-[15px] mr-2" />
                            <span>Email: ledthaiduong@gmail.com</span>
                        </div>
                    </div>

                </div>
            </div>

        </header>
    );
}
