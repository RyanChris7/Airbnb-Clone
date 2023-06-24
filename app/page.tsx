import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div className="text-rose-600 text-2xl">Hello Airbnb!</div>;
}
