// app/page.tsx
import InfoSection from "@/components/Home/InfoSection";
import Header from "../components/Header/Header";
import Nav from "../components/Header/Nav";
import Main from "@/components/Home/Main";

export default function Page() {
  return (
    <>
      <Header />
      <Nav />
      <InfoSection />
      <Main />
      <main className="container-web mt-8">
        {/* Tạm để trống, lát nữa làm phần product/main sau */}
        {/* <h1 className="text-2xl font-bold">Trang chủ Led Thái Dương</h1> */}
      </main>
    </>
  );
}
