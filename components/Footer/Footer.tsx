export default function Footer() {
    return (
        <footer className="bg-[#2a2a2a] text-[#ccc] text-[14px] leading-[2] mt-10">

            {/* MENU NGANG */}
            <div className="footer__nav bg-[#2a2a2a] text-center py-3">
                <ul className="flex flex-wrap justify-center gap-8 uppercase font-bold">
                    {[
                        "Trang Chủ",
                        "Giới Thiệu",
                        "Sản Phẩm",
                        "Dự Án",
                        "Bảo Hành & Hậu Mãi",
                        "Tin Tức",
                        "Liên Hệ",
                    ].map((item, i) => (
                        <li key={i}>
                            <a href="#" className="text-white no-underline">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 4 CỘT */}
            <div className="footer__top py-10">
                <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">

                    {/* Cột 1 */}
                    <div>
                        <h3 className="text-white text-[16px] mb-5 uppercase">
                            LED THÁI DƯƠNG
                        </h3>
                        <p>Địa Chỉ: 183 Nguyễn Kim, Quận 10, Tp. Hồ Chí Minh.</p>
                        <p>SDT: 016.5904.1977</p>
                        <p>Email: ledthaiduong@gmail.com</p>
                        <p>Website: www.ledthaiduong.com</p>
                    </div>

                    {/* Cột 2 */}
                    <div>
                        <h3 className="text-white text-[16px] mb-5 uppercase">
                            CHÍNH SÁCH
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Chính Sách Mua Hàng",
                                "Chính Sách Thanh Toán",
                                "Chính Sách Đổi Trả",
                                "Hướng Dẫn Mua Hàng"
                            ].map((p, i) => (
                                <li key={i} className="relative pl-4">
                                    <span className="absolute left-0 top-0 text-white">•</span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cột 3 - Fanpage */}
                    <div>
                        <h3 className="text-white text-[16px] mb-5 uppercase">FANPAGE</h3>
                        <img
                            src="/images/footer.png"
                            alt="Fanpage LED Thái Dương"
                            className="w-full rounded-[10px] mb-6"
                        />
                    </div>

                    {/* Cột 4 */}
                    <div>
                        <h3 className="text-white text-[16px] mb-5 uppercase">
                            THÔNG TIN LIÊN HỆ
                        </h3>
                        <p>
                            Đang Online: <strong>10</strong>
                        </p>
                        <p>
                            Số Lượng Đã Online: <strong>9999</strong>
                        </p>
                    </div>
                </div>
            </div>

            {/* ZIGZAG */}
            <div className="footer__zigzag w-full h-[30px] bg-[url('data:image/svg+xml;utf8,<svg width=\\'60\\' height=\\'50\\' xmlns=\\'http://www.w3.org/2000/svg\\'><polygon points=\\'0,30 30,0 60,30\\' fill=\\'%23444\\' /></svg>')] bg-repeat-x bg-top" />

            {/* FOOTER BOTTOM */}
            <div className="footer__bottom bg-[#111] py-3">
                <div className="max-w-[1140px] mx-auto px-4 flex justify-between flex-wrap text-white">
                    <p className="text-[15px]">
                        © Copyright 2016, LED THAI DUONG Allright Reserved
                    </p>
                    <p className="design-by text-[15px] italic">
                        Design by Thiết Kế Web Uy Tín
                    </p>
                </div>
            </div>

        </footer>
    );
}
