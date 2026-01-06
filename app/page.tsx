// app/page.tsx
import InfoSection from "@/components/Home/InfoSection";
import Header from "../components/Header/Header";
import Nav from "../components/Header/Nav";
import Main from "@/components/Home/Main";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <Nav />
      <InfoSection />
      <Main />
      <Footer />

    </>
  );
}
