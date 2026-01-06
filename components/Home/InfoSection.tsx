export default function InfoSection() {
    const items = [
        {
            img: "/images/clock.png",
            title: "THỜI GIAN LÀM VIỆC",
            desc: "8h sáng - Đến 20h Tối",
        },
        {
            img: "/images/delivery-truck (2).png",
            title: "GIAO HÀNG MIỄN PHÍ",
            desc: "Với Hóa Đơn Từ 1 Triệu Trở Lên",
        },
        {
            img: "/images/change.png",
            title: "ĐỔI TRẢ MIỄN PHÍ",
            desc: "Trong Vòng 7 Ngày",
        },
        {
            img: "/images/support.png",
            title: "HỖ TRỢ 24/7",
            desc: "Hotline: 016.9504.1977",
        },
    ];

    return (
        <div className="w-full bg-white">
            {/* mobile: 1 cột, sm: 2 cột, lg: 4 cột */}
            <div className="max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#ddd] border-t-0">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className={`flex flex-col items-center text-center py-7 sm:py-8 lg:py-10
            ${/* Giữ border như layout cũ ở desktop, còn mobile/tablet thì chia theo hàng */ ""}
            border-b border-[#ddd] sm:border-b-0
            ${/* desktop: kẻ dọc giữa các cột */ ""}
            ${i % 2 === 0 ? "sm:border-r sm:border-[#ddd]" : ""}
            ${i !== items.length - 1 ? "lg:border-r lg:border-[#ddd]" : "lg:border-r-0"}
            `}
                    >
                        <img src={item.img} className="w-[56px] sm:w-[64px] lg:w-[70px] mb-4" alt={item.title} />

                        <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold">
                            {item.title}
                        </h3>

                        <p className="text-[14px] sm:text-[16px] lg:text-[18px] mt-2">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
