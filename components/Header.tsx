// app/components/Header.tsx

export default function Header() {
    return (
        <header className="w-full">
            {/* HEADER TOP */}
            <div
                className="w-full py-2 text-white capitalize bg-cover bg-repeat-x" // muốn ảnh lặp đi nhiều lần theo bề ngang sài bg-repeat-x
                style={{
                    backgroundImage: "url('/images/bg-header-top.jpg')",
                    backgroundSize: "auto"
                }}
            >
                <div className="max-w-[1140px] mx-auto flex items-center justify-between px-4">
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
                <div className="max-w-[1140px] mx-auto flex items-center px-4 gap-4">
                    {/* Logo */}
                    <div className="w-1/4">
                        <img
                            src="/images/image.png"
                            alt="logo"
                            className="w-[200px] h-auto"
                        />
                    </div>

                    {/* Ô search */}
                    <div className="flex-1">
                        <div className="flex w-4/5 mx-auto">
                            <input
                                type="search"
                                placeholder="Nhập từ khóa tìm kiếm"
                                className="w-full h-[50px] rounded-l-full border-2 border-[rgb(49,166,49)] px-4 outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-[rgb(49,166,49)] px-5 border border-[rgb(59,190,59)] rounded-r-full flex items-center justify-center w-[90px]"
                            >
                                <img
                                    src="/images/search.png"
                                    alt="search"
                                    className="w-[30px] h-auto"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Hotline + Email */}
                    <div className="w-1/4 flex flex-col items-start ml-auto text-[16px] text-[#333]">
                        <div className="flex items-center mb-1">
                            <img
                                src="/images/call.png"
                                alt="phone"
                                className="w-[15px] mr-2 mb-[3px]"
                            />
                            <span>Hotline: 016. 5904. 1977</span>
                        </div>
                        <div className="flex items-center">
                            <img
                                src="/images/email.png"
                                alt="email"
                                className="w-[15px] mr-2 mb-[3px]"
                            />
                            <span>Email: ledthaiduong@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* NAV + SLIDE + INFO: có thể tách thành component riêng sau */}
        </header>
    );
}
