export default function InfoSection() {
    const items = [
        {
            img: "/images/clock.png",
            title: "THỜI GIAN LÀM VIỆC",
            desc: "8h sáng - Đến 20h Tối"
        },
        {
            img: "/images/delivery-truck (2).png",
            title: "GIAO HÀNG MIỄN PHÍ",
            desc: "Với Hóa Đơn Từ 1 Triệu Trở Lên"
        },
        {
            img: "/images/change.png",
            title: "ĐỔI TRẢ MIỄN PHÍ",
            desc: "Trong Vòng 7 Ngày"
        },
        {
            img: "/images/support.png",
            title: "HỖ TRỢ 24/7",
            desc: "Hotline: 016.9504.1977"
        }
    ];

    return (
        <div className="w-full bg-white">
            <div className="max-w-[1140px] mx-auto grid grid-cols-4 border border-[#ddd] border-t-0">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className={`flex flex-col items-center text-center py-10 
                        ${i !== items.length - 1 ? "border-r border-[#ddd]" : ""}`}
                    >
                        <img src={item.img} className="w-[70px] mb-4" />

                        <h3 className="text-[20px] font-bold">{item.title}</h3>

                        <p className="text-[18px] mt-2">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
