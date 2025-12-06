import Header from "../components/Header";

export default function Page() {
  return (
    <>
      <Header />

      {/* Tạm thời để một đoạn text test bên dưới */}
      <main className="max-w-[1140px] mx-auto mt-8">
        <h1 className="text-2xl font-bold text-center">
          Trang chủ Led Thái Dương (Next.js + Tailwind)
        </h1>
      </main>
    </>
  );
}
