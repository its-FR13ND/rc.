//! Required
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

//! Icons
import {
    RiTelegramFill,
    RiInstagramFill,
    RiLinkedinBoxFill,
    RiTwitterFill,
} from "react-icons/ri";

//! Images
import ZarrinPal from "../public/static/images/زرین-پال.png";
import ENamad from "../public/static/images/ای-نماد.png";
import Samandehi from "../public/static/images/ساماندهی.png";
import Etehadieh from "../public/static/images/عضو-اتحادیه-کشور.png";

//! Template
export default function Footer() {
    const [active, setActive] = useState(0);
    const [screenWidth, setScreenWidth] = useState(null);
    useEffect(() => {
        const screenWidth = window.screen.width;
        if (screenWidth >= 1024) {
            setScreenWidth("Desktop");
        }
    }, []);
    if (screenWidth === "Desktop") {
        return (
            <>
                <footer className="w-full bg-stone-200 pt-10 pb-20">
                    <section className="mx-auto grid max-w-5xl grid-cols-3 grid-rows-[1fr_3fr] items-start justify-items-start">
                        {/* دسترسی سریع */}
                        <header className="col-span-2 grid w-full grid-cols-[auto_auto_auto_auto_auto] items-center justify-items-center gap-x-5 pt-1">
                            <Link
                                className="font-bold text-stone-500 duration-200 hover:underline hover:opacity-80"
                                href="/"
                            >
                                خانــــه
                            </Link>
                            <Link
                                className="font-bold text-stone-500 duration-200 hover:underline hover:opacity-80"
                                href="/لیست-محصولات"
                            >
                                لیست محصولات
                            </Link>
                            <Link
                                className="font-bold text-stone-500 duration-200 hover:underline hover:opacity-80"
                                href="/فاکتور-من"
                            >
                                فاکتور من
                            </Link>
                            <Link
                                className="font-bold text-stone-500 duration-200 hover:underline hover:opacity-80"
                                href="/ورود-به-سایت"
                            >
                                ورود به سایت
                            </Link>
                            <Link
                                className="font-bold text-stone-500 duration-200 hover:underline hover:opacity-80"
                                href="/قوانین-شرایط-استفاده-سایت"
                            >
                                قوانین و شرایط روغنی‌کار
                            </Link>
                        </header>
                        {/* اعتماد به روغنی کار */}
                        <section className="row-span-2 mr-10 flex w-full max-w-xs flex-col items-start justify-start">
                            <h6 className="text-xl font-black text-stone-500">
                                اعتماد به روغنی‌کار:
                            </h6>
                            <p className="mt-3 text-sm font-extrabold leading-7 text-stone-500/80">
                                روغنی‌کار، به شما این اطمینان رو میده که فاکتور
                                خریداری شده با بهترین کیفیت و سریعترین ارسال جمع
                                شده و به دستتون برسه.
                            </p>
                            <section className="mt-5 grid grid-cols-2 items-center justify-items-center gap-3">
                                <figure className="aspect-square w-28 rounded-2xl bg-white p-2">
                                    <Image
                                        alt="درگاه پرداخت زرین پال"
                                        src={ZarrinPal}
                                        quality={50}
                                        className="h-full w-full object-contain"
                                    />
                                </figure>
                                <figure className="aspect-square w-28 rounded-2xl bg-white p-2">
                                    <Image
                                        alt="دارای مجوز ای نماد"
                                        src={ENamad}
                                        quality={50}
                                        className="h-full w-full object-contain"
                                    />
                                </figure>
                                <figure className="aspect-square w-28 rounded-2xl bg-white p-2">
                                    <Image
                                        alt="دارای نماد ساماندهی"
                                        src={Samandehi}
                                        quality={50}
                                        className="h-full w-full object-contain"
                                    />
                                </figure>
                                <figure className="aspect-square w-28 rounded-2xl bg-white p-2">
                                    <Image
                                        alt="عضو اتحادیه کشوری کسب و کار های مجازی"
                                        src={Etehadieh}
                                        quality={50}
                                        className="h-full w-full object-contain"
                                    />
                                </figure>
                            </section>
                        </section>
                        {/* ما را دنبال کنید */}
                        <section className="flex w-full flex-col items-start justify-start">
                            <h6 className="text-xl font-black text-stone-500">
                                ما رو دنبال کنید در:
                            </h6>
                            <ul className="mt-4 w-full">
                                <li>
                                    <a
                                        href="#"
                                        className="mt-2 flex items-center justify-start gap-x-1 text-sm font-extrabold text-stone-500/80"
                                    >
                                        <RiTelegramFill className="text-2xl" />
                                        تلگرام
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="mt-4 flex items-center justify-start gap-x-1 text-sm font-extrabold text-stone-500/80"
                                    >
                                        <RiLinkedinBoxFill className="text-2xl" />
                                        لینکدین
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="mt-4 flex items-center justify-start gap-x-1 text-sm font-extrabold text-stone-500/80"
                                    >
                                        <RiInstagramFill className="text-2xl" />
                                        اینستاگرام
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="mt-4 flex items-center justify-start gap-x-1 text-sm font-extrabold text-stone-500/80"
                                    >
                                        <RiTwitterFill className="text-2xl" />
                                        توییتر
                                    </a>
                                </li>
                            </ul>
                        </section>
                        {/* درباره روغنی کار */}
                        <section className="flex w-full max-w-xs flex-col items-start justify-start">
                            <h6 className="text-xl font-black text-stone-500">
                                درباره روغنی‌کار:
                            </h6>
                            <p className="mt-5 text-sm font-extrabold leading-7 text-stone-500/80">
                                این یک متن ساختگیست، این یک متن ساختگیست، این یک
                                متن ساختگیست، این یک متن ساختگیست.
                            </p>
                            <a
                                href="#"
                                className="mt-4 text-sm font-extrabold text-stone-500/80"
                            >
                                پشتیبانی تلگرام: 0073 287 0920
                            </a>
                        </section>
                    </section>
                    {/* کپی رایت */}
                    <section className="mx-auto mt-10 flex w-full max-w-5xl items-center justify-between border-t-2 border-stone-300 pt-5">
                        <p className="text-sm font-extrabold text-stone-500">
                            تمام حقوق اين وب‌سايت متعلق به شرکت یدک پیشگام اطلس
                            (فروشگاه اینترنتی روغنی‌کار) است.
                        </p>
                        <p className="text-xl font-thin text-stone-300">
                            روغنی‌کار
                        </p>
                        <p className="text-sm font-extrabold text-stone-400">
                            آدرس: بازار <span className="font-thin">بزرگ</span>{" "}
                            تهران
                        </p>
                    </section>
                </footer>
            </>
        );
    }
    return (
        <footer className="block w-full bg-stone-200 pt-6 pb-32 lg:hidden">
            <section
                className={`footer-active-section-1 mx-auto flex w-full max-w-[18.75rem] flex-col items-start justify-start ${
                    active === 1 ? "active" : ""
                }`}
            >
                <h5
                    onClick={() => {
                        setActive((prev) => (prev === 1 ? 0 : 1));
                    }}
                    className="w-full py-3 text-lg font-black text-stone-600"
                >
                    دسترسی سریع‌تر به:
                </h5>
                <ul className="mr-5 w-full list-disc leading-8">
                    <li>
                        <Link
                            href="/"
                            className="text-sm font-extrabold text-stone-500"
                        >
                            خانــــه
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/لیست-محصولات"
                            className="text-sm font-extrabold text-stone-500"
                        >
                            لیست محصولات
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/فاکتور-من"
                            className="text-sm font-extrabold text-stone-500"
                        >
                            فاکتور من
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/ورود-به-اکانت"
                            className="text-sm font-extrabold text-stone-500"
                        >
                            ورود به سایت
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="text-sm font-extrabold text-stone-500"
                        >
                            قوانین و شرایط روغنی‌کار
                        </Link>
                    </li>
                </ul>
            </section>
            {/* ما رو دنبال کنید */}
            <section
                className={`footer-active-section-1 mx-auto mt-3 flex w-full max-w-[18.75rem] flex-col items-start justify-start ${
                    active === 2 ? "active" : ""
                }`}
            >
                <h5
                    onClick={() => setActive((prev) => (prev === 2 ? 0 : 2))}
                    className="w-full py-3 text-lg font-black text-stone-600"
                >
                    ما رو دنبال کنید در:
                </h5>
                <ul className="w-full">
                    <li>
                        <a
                            href="#"
                            className="mt-2 flex items-center justify-start gap-x-1 text-sm font-extrabold text-stone-500"
                        >
                            <RiTelegramFill className="text-2xl" />
                            تلگرام
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="mt-4 flex items-center justify-start gap-x-1 text-sm font-extrabold text-stone-500"
                        >
                            <RiLinkedinBoxFill className="text-2xl" />
                            لینکدین
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="mt-4 flex items-center justify-start gap-x-1 text-sm font-extrabold text-stone-500"
                        >
                            <RiInstagramFill className="text-2xl" />
                            اینستاگرام
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="mt-4 flex items-center justify-start gap-x-1 text-sm font-extrabold text-stone-500"
                        >
                            <RiTwitterFill className="text-2xl" />
                            توییتر
                        </a>
                    </li>
                </ul>
            </section>
            <section
                className={`footer-active-section-1 mx-auto mt-3 flex w-full max-w-[18.75rem] flex-col items-start justify-start ${
                    active === 3 ? "active" : ""
                }`}
            >
                <h5
                    onClick={() => setActive((prev) => (prev === 3 ? 0 : 3))}
                    className="w-full py-3 text-lg font-black text-stone-600"
                >
                    درباره روغنی‌کار:
                </h5>
                <p className="mt-1 text-sm font-extrabold leading-7 text-stone-500">
                    این یک متن ساختگیست، این یک متن ساختگیست، این یک متن
                    ساختگیست، این یک متن ساختگیست.
                </p>
                <a
                    href="#"
                    className="mt-4 text-sm font-extrabold text-stone-500"
                >
                    پشتیبانی تلگرام: 0073 287 0920
                </a>
            </section>
            <section
                className={`footer-active-section-1 mx-auto mt-3 flex w-full max-w-[18.75rem] flex-col items-start justify-start ${
                    active === 4 ? "license" : ""
                }`}
            >
                <h5
                    onClick={() => setActive((prev) => (prev === 4 ? 0 : 4))}
                    className="w-full py-3 text-lg font-black text-stone-600"
                >
                    اعتماد به روغنی‌کار:
                </h5>
                <p className="mt-1 text-sm font-extrabold leading-7 text-stone-500">
                    روغنی‌کار، به شما این اطمینان رو میده که فاکتور خریداری شده
                    با بهترین کیفیت و سریعترین ارسال جمع شده و به دستتون برسه.
                </p>
                <section className="mx-auto mt-5 grid grid-cols-2 items-center justify-items-center gap-3">
                    <figure className="aspect-square w-28 rounded-2xl bg-white p-2">
                        <Image
                            alt="درگاه پرداخت زرین پال"
                            src={ZarrinPal}
                            quality={50}
                            className="h-full w-full object-contain"
                        />
                    </figure>
                    <figure className="aspect-square w-28 rounded-2xl bg-white p-2">
                        <Image
                            alt="دارای مجوز ای نماد"
                            src={ENamad}
                            quality={50}
                            className="h-full w-full object-contain"
                        />
                    </figure>
                    <figure className="aspect-square w-28 rounded-2xl bg-white p-2">
                        <Image
                            alt="دارای نماد ساماندهی"
                            src={Samandehi}
                            quality={50}
                            className="h-full w-full object-contain"
                        />
                    </figure>
                    <figure className="aspect-square w-28 rounded-2xl bg-white p-2">
                        <Image
                            alt="عضو اتحادیه کشوری کسب و کار های مجازی"
                            src={Etehadieh}
                            quality={50}
                            className="h-full w-full object-contain"
                        />
                    </figure>
                </section>
            </section>
            <section className="mt-5 w-full">
                <p className="mx-auto w-fit border-t-2 border-stone-300 pt-5 text-xs font-extrabold text-stone-500">
                    تمام حقوق اين وب‌سايت متعلق به شرکت یدک <br />
                    پیشگام اطلس (فروشگاه اینترنتی روغنی‌کار) است.
                </p>
            </section>
        </footer>
    );
}
