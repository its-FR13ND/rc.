//! Required
import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//! Utils
import {
    SortList,
    FILTER_FILTER,
    FILTER_OIL,
    FILTER_BY_BRAND,
    FILTER_BY_CAR,
} from "../../utils/FIlterOptions";

//! Icons
import { RiArrowDownSLine } from "react-icons/ri";

//! Comps
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

//! Template
const ProductListPage = ({ products }) => {
    const inputRef = useRef();
    const [filterIt, setFilterIt] = useState("");
    const [activeFilter, setActiveFilter] = useState("");
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <>
            <Head>
                <title>
                    {`🧡لیست محصولات | قیمیت و خرید انواع روغن موتور و فیلتر
                    خودرو (${new Date().toLocaleDateString("fa-IR", {
                        month: "long",
                        day: "numeric",
                    })})`}
                </title>
                <meta
                    name="description"
                    content="روغنی کار | خرید انواع روغن موتور ، روغن گیربکس ، روغن ترمز ، صافی بنزین ، فیلتر هوا ، فیلتر روغن ، فیلتر سوخت با قیمت مناسب ✅"
                />
            </Head>
            <Navigation />
            <main className="mx-auto grid w-full max-w-lg grid-cols-[18.75rem_1fr] px-5 md:px-0 lg:max-w-5xl">
                <header className="col-span-5 flex w-full items-center justify-start border-b-4 border-dotted border-orange-500 py-10">
                    <h1 className="bg-half-orange text-xl font-black text-orange-500">
                        لیست تمام محصولات:
                    </h1>
                </header>
                <aside
                    className="
                    sticky top-20 z-50 my-10 flex h-fit w-full flex-col items-start justify-start rounded-3xl border 
                    border-stone-300 bg-white p-5 shadow-2xl shadow-black/30"
                >
                    <input
                        ref={inputRef}
                        type="text"
                        name="filterIt"
                        id="filterIt"
                        alt="جستجو روغن خودرو و فیلتر خودرو در سایت"
                        placeholder="جستجو..."
                        onFocus={(e) => {
                            e?.target?.select();
                            setActiveFilter("All");
                        }}
                        onBlur={() => {
                            setActiveFilter("");
                        }}
                        onChange={(e) => setFilterIt(e.target.value)}
                        className="
                        autoFocus w-full rounded-xl border border-stone-300 bg-white py-2 px-4 text-sm font-extrabold
                        text-stone-600 placeholder:text-stone-400 placeholder:duration-150 focus:placeholder:text-white"
                    />
                    <datalist id="filter-include">
                        <option value="this is it" />
                        <option value="this is another it" />
                    </datalist>
                    <section
                        className={`filter-option-section flex w-full flex-col items-start justify-start ${
                            activeFilter === "SortList"
                                ? "SortList"
                                : "" || activeFilter === "All"
                                ? "SortList"
                                : ""
                        }`}
                    >
                        <header
                            onClick={() =>
                                setActiveFilter((prev) =>
                                    prev !== "SortList" ? "SortList" : ""
                                )
                            }
                            className="flex w-full cursor-pointer items-center justify-between py-5"
                        >
                            <h6 className="text-base font-extrabold text-stone-600">
                                نوع نمایش لیست محصولات
                            </h6>
                            <RiArrowDownSLine
                                className={`text-lg duration-500 ${
                                    activeFilter === "SortList"
                                        ? ""
                                        : "-rotate-180"
                                }`}
                            />
                        </header>
                        <ul className="flex flex-col items-start justify-center gap-y-2">
                            {SortList.map((i, index) => (
                                <li
                                    key={index}
                                    className="flex cursor-pointer items-center justify-center gap-x-1"
                                >
                                    <input
                                        className="
                                            relative bottom-[2px] aspect-square w-4 cursor-pointer appearance-none rounded-md border
                                            border-stone-300 bg-white bg-contain bg-center bg-no-repeat duration-200 checked:bg-orange-500"
                                        type="checkbox"
                                        id={i}
                                    />
                                    <label
                                        htmlFor={i}
                                        className="cursor-pointer text-sm font-bold text-stone-500"
                                    >
                                        {i}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section
                        className={`filter-option-section flex w-full flex-col items-start justify-start ${
                            activeFilter === "Category"
                                ? "Category"
                                : "" || activeFilter === "All"
                                ? "Category"
                                : ""
                        }`}
                    >
                        <header
                            onClick={() =>
                                setActiveFilter((prev) =>
                                    prev !== "Category" ? "Category" : ""
                                )
                            }
                            className="flex w-full cursor-pointer items-center justify-between py-5"
                        >
                            <h6 className="text-base font-extrabold text-stone-600">
                                دسته‌بندی محصولات
                            </h6>
                            <RiArrowDownSLine
                                className={`text-lg duration-500 ${
                                    activeFilter === "Category"
                                        ? ""
                                        : "-rotate-180"
                                }`}
                            />
                        </header>
                        <h3 className="mb-4 text-sm font-extrabold text-stone-600">
                            روغن خودرو
                        </h3>
                        <ul className="flex flex-col items-start justify-center gap-y-2">
                            {FILTER_OIL.map((i, index) => (
                                <li
                                    key={index}
                                    className="flex cursor-pointer items-center justify-center gap-x-1"
                                >
                                    <input
                                        className="
                                            relative bottom-[2px] aspect-square w-4 cursor-pointer appearance-none rounded-md border
                                            border-stone-300 bg-white bg-contain bg-center bg-no-repeat duration-200 checked:bg-orange-500"
                                        type="checkbox"
                                        id={i}
                                    />
                                    <label
                                        htmlFor={i}
                                        className="cursor-pointer text-sm font-bold text-stone-500"
                                    >
                                        {i}
                                    </label>
                                </li>
                            ))}
                        </ul>
                        <h3 className="my-4 text-sm font-extrabold text-stone-600">
                            فیلتر خودرو
                        </h3>
                        <ul className="flex flex-col items-start justify-center gap-y-2">
                            {FILTER_FILTER.map((i, index) => (
                                <li
                                    key={index}
                                    className="flex cursor-pointer items-center justify-center gap-x-1"
                                >
                                    <input
                                        className="
                                            relative bottom-[2px] aspect-square w-4 cursor-pointer appearance-none rounded-md border
                                            border-stone-300 bg-white bg-contain bg-center bg-no-repeat duration-200 checked:bg-orange-500"
                                        type="checkbox"
                                        id={i}
                                    />
                                    <label
                                        htmlFor={i}
                                        className="cursor-pointer text-sm font-bold text-stone-500"
                                    >
                                        {i}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section
                        className={`filter-option-section flex w-full flex-col items-start justify-start ${
                            activeFilter === "Brand"
                                ? "Brand"
                                : "" || activeFilter === "All"
                                ? "Brand"
                                : ""
                        }`}
                    >
                        <header
                            onClick={() =>
                                setActiveFilter((prev) =>
                                    prev !== "Brand" ? "Brand" : ""
                                )
                            }
                            className="flex w-full cursor-pointer items-center justify-between py-5"
                        >
                            <h6 className="text-base font-extrabold text-stone-600">
                                انتخاب برند یا شرکت سازنده
                            </h6>
                            <RiArrowDownSLine
                                className={`text-lg duration-500 ${
                                    activeFilter === "Brand"
                                        ? ""
                                        : "-rotate-180"
                                }`}
                            />
                        </header>
                        <ul className="flex flex-col items-start justify-center gap-y-2">
                            {FILTER_BY_BRAND.map((i, index) => (
                                <li
                                    key={index}
                                    className="flex cursor-pointer items-center justify-center gap-x-1"
                                >
                                    <input
                                        className="
                                            relative bottom-[2px] aspect-square w-4 cursor-pointer appearance-none rounded-md border
                                            border-stone-300 bg-white bg-contain bg-center bg-no-repeat duration-200 checked:bg-orange-500"
                                        type="checkbox"
                                        id={i}
                                    />
                                    <label
                                        htmlFor={i}
                                        className="cursor-pointer text-sm font-bold text-stone-500"
                                    >
                                        {i}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section
                        className={`filter-option-section flex w-full flex-col items-start justify-start ${
                            activeFilter === "Brand"
                                ? "Brand"
                                : "" || activeFilter === "All"
                                ? "Brand"
                                : ""
                        }`}
                    >
                        <header
                            onClick={() =>
                                setActiveFilter((prev) =>
                                    prev !== "Brand" ? "Brand" : ""
                                )
                            }
                            className="flex w-full cursor-pointer items-center justify-between py-5"
                        >
                            <h6 className="text-base font-extrabold text-stone-600">
                                مناسب برای خودرو
                            </h6>
                            <RiArrowDownSLine
                                className={`text-lg duration-500 ${
                                    activeFilter === "Brand"
                                        ? ""
                                        : "-rotate-180"
                                }`}
                            />
                        </header>
                        <ul className="flex flex-col items-start justify-center gap-y-2">
                            {FILTER_BY_CAR.map((i, index) => (
                                <li
                                    key={index}
                                    className="flex cursor-pointer items-center justify-center gap-x-1"
                                >
                                    <input
                                        className="
                                            relative bottom-[2px] aspect-square w-4 cursor-pointer appearance-none rounded-md border
                                            border-stone-300 bg-white bg-contain bg-center bg-no-repeat duration-200 checked:bg-orange-500"
                                        type="checkbox"
                                        id={i}
                                    />
                                    <label
                                        htmlFor={i}
                                        className="cursor-pointer text-sm font-bold text-stone-500"
                                    >
                                        {i}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </section>
                </aside>
                <article className="my-10 grid w-full auto-rows-[17.2rem] grid-cols-4 items-center justify-items-center gap-4 pr-5">
                    {products?.map((i) => {
                        return (
                            <article
                                key={i.id}
                                className="h-full w-full rounded-2xl border border-stone-300 bg-white p-2 duration-200 lg:hover:scale-105"
                            >
                                <Link
                                    href={`/لیست-محصولات/${i.id}`}
                                    className="grid h-full w-full auto-rows-[1fr] items-start justify-items-start"
                                >
                                    <header className="order-2 w-full">
                                        <h2 className="elp pt-2 text-xs font-extrabold leading-5 text-stone-500">
                                            {i.name}
                                        </h2>
                                    </header>
                                    <figure className="relative order-1 aspect-square w-full rounded-lg bg-stone-200/60">
                                        <Image
                                            alt={i.name}
                                            src={i.image}
                                            fill
                                            quality={10}
                                            className="object-contain p-3"
                                        />
                                    </figure>
                                    <footer className="order-3 flex h-full w-full items-end justify-end">
                                        <p className="text-xs font-bold text-stone-500">
                                            <span className="text-[8px]">
                                                تومان
                                            </span>{" "}
                                            {i.price.toLocaleString()}
                                        </p>
                                    </footer>
                                </Link>
                            </article>
                        );
                    })}
                </article>
            </main>
            <Footer />
        </>
    );
};

export default ProductListPage;

//! SSR
import Axios from "axios";
export const getServerSideProps = async (context) => {
    const { data } = await Axios.get("http://localhost:3000/api/fake-products");
    return {
        props: {
            products: data,
        },
    };
};
