import { Inter } from "next/font/google";
import Navbar from "@/components/layouts/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div> Hello John </div>
      </div>
    </>
  );
}
