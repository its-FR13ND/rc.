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
                    <li className="block py-3 text-sm font-bold text-white underline-offset-2 lg:hover:underline">
                        <Link
                            className="inline py-3"
                            href={{
                                pathname: "/لیست-محصولات",
                                query: { filterBy: "روغن موتور" },
                            }}
                        >
                            روغن موتور
                        </Link>
                    </li>
                    <li className="hidden py-3 text-sm font-bold text-white underline-offset-2 lg:block lg:hover:underline">
                        <Link
                            className="inline py-3"
                            href="/قیمت-روز-روغن-موتور-فیلتر-خودرو-ضدیخ"
                        >
                            قیمت روغن موتور و فیلتر هوا
                        </Link>
                    </li>
                    <li className="block py-3 text-sm font-bold text-white underline-offset-2 lg:hover:underline">
                        <Link
                            className="inline py-3"
                            href={{
                                pathname: "/لیست-محصولات",
                                query: { filterBy: "فیلتر هوا" },
                            }}
                        >
                            فیلتر هوا
                        </Link>
                    </li>
                    <li className="hidden py-3 text-sm font-bold text-white underline-offset-2 md:block lg:hover:underline">
                        <Link
                            className="inline py-3"
                            href={{
                                pathname: "/لیست-محصولات",
                                query: { filterBy: "فیلتر روغن" },
                            }}
                        >
                            فیلتر روغن
                        </Link>
                    </li>
                    <li className="hidden py-3 text-sm font-bold text-white underline-offset-2 md:block lg:hover:underline">
                        <Link
                            className="inline py-3"
                            href={{
                                pathname: "/لیست-محصولات",
                                query: { filterBy: "ضد یخ" },
                            }}
                        >
                            ضد یخ
                        </Link>
                    </li>
                    <li className="block justify-self-end py-3 text-sm font-bold text-white underline-offset-2 lg:hover:underline">
                        <a
                            className="inline py-3"
                            href="https://api.whatsapp.com/send?phone=0989202870073"
                        >
                            پشتیبانی واتساپ
                        </a>
                    </li>
                </ul>
            </header>
            <Navigation />
            <main className="mx-auto flex w-full max-w-lg flex-col items-start justify-start lg:max-w-5xl ">
                <section className="flex w-full flex-col items-center justify-between gap-y-8 gap-x-10 border-b-2 border-dotted  border-orange-500 px-5 py-10 lg:flex-row lg:gap-y-0 lg:px-0">
                    <header className="order-2 flex w-full basis-3/5 flex-col items-center justify-center gap-y-3 lg:order-1">
                        <h2 className="bg-half-orange text-3xl font-thin text-orange-500 md:text-4xl lg:text-5xl">
                            روغنــــــــــــــــــــــــــــــی‌کار
                        </h2>
                        <h1 className="text-sm font-extrabold text-stone-500 md:text-lg lg:text-2xl ">
                            فروش انواع روغن و فیلتر خودرو به سراسر کشور
                        </h1>
                    </header>
                    <figure className="relative order-1 h-64 w-full lg:order-2 lg:basis-2/5">
                        <Image
                            src="/static/images/OilBanner.webp"
                            alt="روغنی کار"
                            fill
                            className="object-contain"
                            quality={50}
                            priority
                            sizes="(max-width: 768px) 100vw"
                        />
                    </figure>
                </section>
                <section className="grid w-full grid-cols-1 items-center justify-items-center gap-6 border-b-2 border-dotted border-orange-500 py-10 lg:grid-cols-[auto_auto]">
                    <Link
                        href="/"
                        className="
                        row-span-2 h-[12.5rem] w-[22.75rem] overflow-hidden rounded-2xl border border-stone-300 duration-150 
                        lg:h-[20.625rem] lg:w-[37.5rem] lg:hover:saturate-150"
                    >
                        <figure className="relative h-full w-full">
                            <Image
                                src="/static/images/Banner1.jpg"
                                alt="Banner1"
                                fill
                                className="object-cover"
                            />
                        </figure>
                    </Link>
                    <Link
                        href="/"
                        className="h-[4.875rem] w-[22.75rem] overflow-hidden rounded-2xl border border-stone-300 duration-150 lg:h-[5.375rem] lg:w-[25rem] lg:hover:saturate-150"
                    >
                        <figure className="relative h-full w-full">
                            <Image
                                src="/static/images/Banner1.jpg"
                                alt="Banner2"
                                fill
                                className="object-cover"
                            />
                        </figure>
                    </Link>
                    <Link
                        href="/"
                        className="h-[12.5rem] w-[22.75rem] overflow-hidden rounded-2xl border border-stone-300 duration-150 lg:h-[13.75rem] lg:w-[25rem] lg:hover:saturate-150"
                    >
                        <figure className="relative h-full w-full">
                            <Image
                                src="/static/images/Banner2.jpg"
                                alt="Banner3"
                                fill
                                className="object-cover"
                            />
                        </figure>
                    </Link>
                </section>
                <article className="grid w-full grid-cols-2 items-center justify-items-center gap-5 px-4 py-10 lg:grid-cols-6">
                    <header className="col-span-2 mb-2 justify-self-start bg-half-orange text-lg font-black text-orange-500 lg:col-span-6">
                        <h3>برندها و شرکت‌های سازنده</h3>
                    </header>
                    <Link
                        href={{
                            pathname: "/لیست-محصولات",
                            query: { filterByBrand: "ارو" },
                        }}
                        className="relative aspect-square w-full rounded-3xl bg-white shadow-2xl shadow-black/30 duration-300 lg:hover:shadow-none"
                    >
                        <Image
                            src="/static/images/ارو.png"
                            alt="فیلتر خودرو ارو"
                            fill
                            className="object-contain p-4 opacity-80"
                            quality={30}
                        />
                    </Link>
                    <Link
                        href={{
                            pathname: "/لیست-محصولات",
                            query: { filterByBrand: "الف" },
                        }}
                        className="relative aspect-square w-full rounded-3xl bg-white shadow-2xl shadow-black/30 duration-300 lg:hover:shadow-none"
                    >
                        <Image
                            src="/static/images/الف.webp"
                            alt="فیلتر خودرو الف"
                            fill
                            className="object-contain p-3"
                        />
                    </Link>

                    <Link
                        href={{
                            pathname: "/لیست-محصولات",
                            query: { filterByBrand: "ایرانول" },
                        }}
                        className="relative aspect-square w-full rounded-3xl bg-white shadow-2xl shadow-black/30 duration-300 lg:hover:shadow-none"
                    >
                        <Image
                            src="/static/images/ایرانول.webp"
                            alt="فیلتر خودرو ایرانول"
                            fill
                            className="object-contain p-3"
                        />
                    </Link>
                    <Link
                        href={{
                            pathname: "/لیست-محصولات",
                            query: { filterByBrand: "بهران" },
                        }}
                        className="relative aspect-square w-full rounded-3xl bg-white shadow-2xl shadow-black/30 duration-300 lg:hover:shadow-none"
                    >
                        <Image
                            src="/static/images/بهران.webp"
                            alt="فیلتر خودرو بهران"
                            fill
                            className="object-contain p-5"
                        />
                    </Link>
                    <Link
                        href={{
                            pathname: "/لیست-محصولات",
                            query: { filterByBrand: "پروفی کار" },
                        }}
                        className="relative aspect-square w-full rounded-3xl bg-white shadow-2xl shadow-black/30 duration-300 lg:hover:shadow-none"
                    >
                        <Image
                            src="/static/images/پروفی-کار.webp"
                            alt="فیلتر خودرو پروفی کار"
                            fill
                            className="object-contain p-3"
                        />
                    </Link>
                    <Link
                        href={{
                            pathname: "/لیست-محصولات",
                            query: { filterByBrand: "توتال" },
                        }}
                        className="relative aspect-square w-full rounded-3xl bg-white shadow-2xl shadow-black/30 duration-300 lg:hover:shadow-none"
                    >
                        <Image
                            src="/static/images/توتال.webp"
                            alt="فیلتر خودرو توتال"
                            fill
                            className="object-contain p-6"
                        />
                    </Link>
                    <Link
                        href={{
                            pathname: "/لیست-محصولات",
                            query: { filterByBrand: "سرکان" },
                        }}
                        className="relative aspect-square w-full rounded-3xl bg-white shadow-2xl shadow-black/30 duration-300 lg:hover:shadow-none"
                    >
                        <Image
                            src="/static/images/سرکان.webp"
                            alt="فیلتر خودرو سرکان"
                            fill
                            className="object-contain p-5"
                        />
                    </Link>
                    <Link
                        href={{
                            pathname: "/لیست-محصولات",
                            query: { filterByBrand: "کاسپین" },
                        }}
                        className="relative aspect-square w-full rounded-3xl bg-white shadow-2xl shadow-black/30 duration-300 lg:hover:shadow-none"
                    >
                        <Image
                            src="/static/images/کاسپین.webp"
                            alt="فیلتر خودرو کاسپین"
                            fill
                            className="object-contain p-3"
                        />
                    </Link>
                    <Link
                        href={{
                            pathname: "/لیست-محصولات",
                            query: { filterByBrand: "کاسترول" },
                        }}
                        className="relative aspect-square w-full rounded-3xl bg-white shadow-2xl shadow-black/30 duration-300 lg:hover:shadow-none"
                    >
                        <Image
                            src="/static/images/کاسترول.webp"
                            alt="فیلتر خودرو کاسترول"
                            fill
                            className="object-contain p-3"
                        />
                    </Link>
                    <Link
                        href={{
                            pathname: "/لیست-محصولات",
                            query: { filterByBrand: "موبیل" },
                        }}
                        className="relative aspect-square w-full rounded-3xl bg-white shadow-2xl shadow-black/30 duration-300 lg:hover:shadow-none"
                    >
                        <Image
                            src="/static/images/موبیل.webp"
                            alt="فیلتر خودرو موبیل"
                            fill
                            className="object-contain p-5"
                        />
                    </Link>
                    <Link
                        href={{
                            pathname: "/لیست-محصولات",
                            query: { filterByBrand: "موتوسل" },
                        }}
                        className="relative aspect-square w-full rounded-3xl bg-white shadow-2xl shadow-black/30 duration-300 lg:hover:shadow-none"
                    >
                        <Image
                            src="/static/images/موتوسل.webp"
                            alt="فیلتر خودرو موتوسل"
                            fill
                            className="object-contain p-3"
                        />
                    </Link>
                    <Link
                        href={{
                            pathname: "/لیست-محصولات",
                            query: { filterByBrand: "نفت پارس" },
                        }}
                        className="relative aspect-square w-full rounded-3xl bg-white shadow-2xl shadow-black/30 duration-300 lg:hover:shadow-none"
                    >
                        <Image
                            src="/static/images/نفت-پارس.webp"
                            alt="فیلتر خودرو نفت پارس"
                            fill
                            className="object-contain p-5"
                        />
                    </Link>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
