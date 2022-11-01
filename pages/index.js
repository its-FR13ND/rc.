//! Required
import Image from "next/image";
import Link from "next/link";

//! Comps
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

//! Template
const HomePage = () => {
    return (
        <>
            <header className="mx-auto w-full max-w-5xl bg-gradient-to-l from-orange-900 to-orange-500 px-4 md:px-10">
                <ul className="grid grid-cols-[auto_auto_auto] items-center justify-items-center gap-x-5 md:grid-cols-5 lg:grid-cols-[auto_auto_auto_auto_auto_1fr] lg:gap-x-14">
                    <li className="block py-3 text-sm font-bold text-white">
                        <Link
                            href={{
                                pathname: "/لیست-محصولات",
                                query: { filterBy: "روغن موتور" },
                            }}
                        >
                            روغن موتور
                        </Link>
                    </li>
                    <li className="hidden py-3 text-sm font-bold text-white lg:block">
                        <Link href="/قیمت-روز-روغن-موتور-فیلتر-خودرو-ضدیخ">
                            قیمت روغن موتور و فیلتر هوا
                        </Link>
                    </li>
                    <li className="block py-3 text-sm font-bold text-white">
                        <Link
                            href={{
                                pathname: "/لیست-محصولات",
                                query: { filterBy: "فیلتر هوا" },
                            }}
                        >
                            فیلتر هوا
                        </Link>
                    </li>
                    <li className="hidden py-3 text-sm font-bold text-white md:block">
                        <Link
                            href={{
                                pathname: "/لیست-محصولات",
                                query: { filterBy: "فیلتر روغن" },
                            }}
                        >
                            فیلتر روغن
                        </Link>
                    </li>
                    <li className="hidden py-3 text-sm font-bold text-white md:block">
                        <Link
                            href={{
                                pathname: "/لیست-محصولات",
                                query: { filterBy: "ضد یخ" },
                            }}
                        >
                            ضد یخ
                        </Link>
                    </li>
                    <li className="block justify-self-end py-3 text-sm font-bold text-white">
                        <a href="https://api.whatsapp.com/send?phone=0989202870073">
                            پشتیبانی واتساپ
                        </a>
                    </li>
                </ul>
            </header>
            <Navigation />
            <main></main>
            <Footer />
        </>
    );
};

export default HomePage;
