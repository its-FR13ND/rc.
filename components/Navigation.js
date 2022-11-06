//! Required
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//! Icons
import { TiHomeOutline } from "react-icons/ti";
import {
    RiOilLine,
    RiFileList3Line,
    RiUserReceived2Line,
} from "react-icons/ri";

//! Template
export default function Navigation() {
    const { pathname } = useRouter();
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
                <nav
                    className="
                    sticky top-0 z-[200] mx-auto hidden w-full max-w-5xl rounded-b-3xl border-b-4 border-orange-500 
                    bg-white/80 px-10 shadow-xl shadow-black/25 backdrop-blur-lg backdrop-saturate-[10] lg:block"
                >
                    <ul className="flex w-full items-center justify-start gap-x-14">
                        <li className="border-l border-stone-400 py-1 pl-14 text-xl font-thin text-orange-500">
                            روغنی‌کار
                        </li>
                        <li>
                            <Link
                                href="/"
                                className={`flex items-center justify-center gap-x-1 py-4 text-sm ${
                                    pathname === "/"
                                        ? "font-thin text-orange-500"
                                        : "font-extrabold text-stone-500 duration-200 hover:text-orange-500"
                                }`}
                            >
                                <TiHomeOutline className="relative bottom-[2px] text-2xl" />
                                خانــــه
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/لیست-محصولات"
                                className={`flex items-center justify-center gap-x-1 py-4 text-sm ${
                                    pathname === "/product-list"
                                        ? "font-thin text-orange-500"
                                        : "font-extrabold text-stone-500 duration-200 hover:text-orange-500"
                                }`}
                            >
                                <RiOilLine className="relative bottom-[2px] text-2xl" />
                                لیست محصولات
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/cart"
                                className={`flex items-center justify-center gap-x-1 py-4 text-sm ${
                                    pathname === "/cart"
                                        ? "font-thin text-orange-500"
                                        : "font-extrabold text-stone-500 duration-200 hover:text-orange-500"
                                }`}
                            >
                                <RiFileList3Line className="relative bottom-[2px] text-2xl" />
                                فاکتور من
                            </Link>
                        </li>
                        <li className="flex grow items-center justify-end">
                            <Link
                                href="/ورود-به-اکانت"
                                className="
                                relative bottom-[0.1rem] flex items-center justify-center gap-x-1 rounded-full bg-gradient-to-l from-orange-900
                                to-orange-500 px-4 py-2 font-extrabold text-white shadow-orange duration-200 hover:bottom-0 hover:shadow-none"
                            >
                                <RiUserReceived2Line className="text-2xl" />
                                ورود
                            </Link>
                        </li>
                    </ul>
                    
                </nav>
                <Link
                    href="/قیمت-روز-روغن-موتور-فیلر-هوا-ضدیخ"
                    className="
                    fixed -bottom-6 right-1/2 z-[200] hidden translate-x-1/2 rounded-t-3xl border border-orange-500 bg-white/80 px-5 pt-5 pb-10 text-sm 
                    font-extrabold text-orange-500 backdrop-blur-lg backdrop-saturate-[20] duration-150 hover:-bottom-1 lg:block"
                >
                    قیمت روز روغن خودرو و فیلتر خودرو و ضد یخ
                </Link>
            </>
        );
    }
    return (
        <nav className="fixed bottom-0 right-0 z-[200] block w-full border-t-4 border-orange-500 bg-white lg:hidden">
            <ul className="mx-auto grid w-full max-w-lg grid-cols-4 items-center justify-items-center">
                <li>
                    <Link
                        href="/"
                        className={`flex flex-col items-center justify-center py-2 text-sm ${
                            pathname === "/"
                                ? "text-xs font-thin text-orange-500"
                                : "font-extrabold text-stone-500"
                        }`}
                    >
                        {pathname === "/" && (
                            <TiHomeOutline className="rounded-full bg-orange-500/10 text-3xl" />
                        )}
                        خانــــه
                    </Link>
                </li>
                <li>
                    <Link
                        href="/لیست-محصولات"
                        className={`flex flex-col items-center justify-center py-2 text-sm ${
                            pathname === "/product-list"
                                ? "text-xs font-thin text-orange-500"
                                : "font-extrabold text-stone-500"
                        }`}
                    >
                        {pathname === "/product-list" && (
                            <RiOilLine className="rounded-full bg-orange-500/10 text-3xl" />
                        )}
                        محصولات
                    </Link>
                </li>
                <li>
                    <Link
                        href="/cart"
                        className={`flex flex-col items-center justify-center py-2 text-sm ${
                            pathname === "/cart"
                                ? "text-xs font-thin text-orange-500"
                                : "font-extrabold text-stone-500"
                        }`}
                    >
                        {pathname === "/cart" && (
                            <RiFileList3Line className="rounded-full bg-orange-500/10 text-3xl" />
                        )}
                        فاکتور من
                    </Link>
                </li>
                <li>
                    <Link
                        href="/ورود-به-اکانت"
                        className="flex flex-col items-center justify-center py-2 text-sm font-extrabold text-stone-500"
                    >
                        ورود
                    </Link>
                </li>
            </ul>
            <Link
                href="/قیمت-روز-روغن-موتور-فیلتر-هوا-ضدیخ"
                className="block w-full bg-orange-100 pt-2 pb-4 text-center text-sm font-extrabold text-orange-500"
            >
                قیمت روز انواع روغن خودرو ، فیلتر خودرو و ضد یخ
            </Link>
        </nav>
    );
}
