import Ads from "@/components/Ads";
import Blogs from "@/components/Blogs";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Ads />
      <Blogs />
    </>
  );
}
