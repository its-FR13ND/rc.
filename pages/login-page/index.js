//! Required
import Head from "next/head";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useState } from "react";

//! Comps
import Footer from "../../components/Footer";

//! Icons
import { BsPhoneVibrateFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

const VALIDATE_PHONE = object().shape({
    phone_number: string()
        .min(10, "خطا: شماره وارد شده اشتباه است.")
        .max(10, "خطا: شماره وارد شده اشتباه است.")
        .required("خطا: لطفا شماره موبایل خود را وارد کنید."),
});

const VALIDATE_CODE = object().shape({
    valid_code: string()
        .min(4, "خطا: کد وارد شده اشتباه است.")
        .max(4, "خطا: کد وارد شده اشتباه است.")
        .required("خطا: لطفا کد پیامک شده را وارد کنید."),
});

//! Template
export default function LoginPage() {
    const [active, setActive] = useState("phone");
    const SUBMIT_PHONE = (values) => {
        console.log(values);
        setActive("code");
    };
    const SUBMIT_CODE = (values) => {
        console.log(values);
    };
    return (
        <>
            <Head>
                <title>
                    👷🏻‍♂️ورود به اکانت | دسترسی به سفارش ها و اطلاعات فردی
                </title>
                <meta
                    name="description"
                    content="روغنی کار | با این صفحه میتونین به اطلاعاتی که قبلا در اکانت ثبت کرده اید و یا سفارش های خود دسترسی داشته باشید"
                />
            </Head>
            <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-tl from-orange-900 to-orange-500 px-4 md:px-0">
                <section className="w-full max-w-lg overflow-hidden rounded-3xl border-2 border-orange-400 bg-white shadow-nice">
                    <header className="grid w-full grid-cols-2 items-center justify-items-center bg-white py-4 shadow-nice">
                        <h1
                            className={
                                active === "phone"
                                    ? "text-sm font-extrabold text-orange-500"
                                    : "text-xs font-extrabold text-stone-400"
                            }
                        >
                            1. ورود شماره موبایل
                        </h1>
                        <h2
                            className={
                                active === "code"
                                    ? "text-sm font-extrabold text-orange-500"
                                    : "text-xs font-extrabold text-stone-400"
                            }
                        >
                            2. تایید کد پیامک شده
                        </h2>
                    </header>
                    {active === "phone" && (
                        <Formik
                            initialValues={{ phone_number: "" }}
                            validationSchema={VALIDATE_PHONE}
                            onSubmit={SUBMIT_PHONE}
                            validateOnMount
                        >
                            {(FormikProps) => {
                                return (
                                    <Form className="flex w-full flex-col items-center justify-start p-5">
                                        <label
                                            htmlFor="phone_number"
                                            className="mt-5 text-sm font-bold text-stone-800"
                                        >
                                            لطفا شماره موبایل خود را وارد نمایید
                                        </label>
                                        <section className="mt-10 flex w-full items-center justify-between rounded-full bg-stone-100 px-3">
                                            <Field
                                                name="phone_number"
                                                id="phone_number"
                                                type="number"
                                                placeholder="مثلا: 9876 543 0912"
                                                dir="ltr"
                                                className="
                                                w-full bg-transparent py-2 text-center text-sm font-bold tracking-[5px] text-stone-600
                                                placeholder:tracking-normal placeholder:text-stone-400 placeholder:duration-500 focus:placeholder:text-stone-100"
                                            />
                                            <BsPhoneVibrateFill className="rotate-12 text-2xl text-stone-400" />
                                        </section>
                                        <p className="mt-5 text-sm font-bold text-red-500">
                                            <ErrorMessage name="phone_number" />
                                        </p>
                                        <button
                                            type="submit"
                                            disabled={
                                                !FormikProps.isValid ||
                                                FormikProps.isSubmitting
                                            }
                                            className="
                                            mt-5 w-full rounded-full bg-gradient-to-l from-orange-900 to-orange-500 py-2 text-sm font-extrabold text-white 
                                            shadow-orange duration-500 disabled:from-stone-200 disabled:to-white disabled:text-stone-300 disabled:shadow-none"
                                        >
                                            ارسال کد تایید
                                        </button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    )}
                    {active === "code" && (
                        <Formik
                            initialValues={{ valid_code: "" }}
                            validationSchema={VALIDATE_CODE}
                            onSubmit={SUBMIT_CODE}
                            validateOnMount
                        >
                            {(FormikProps) => {
                                return (
                                    <Form className="flex w-full flex-col items-center justify-start p-5">
                                        <label
                                            htmlFor="valid_code"
                                            className="mt-5 text-sm font-bold text-stone-800"
                                        >
                                            لطفا کد پیامک شده را وارد کنید
                                        </label>
                                        <section className="mt-10 flex w-full items-center justify-between rounded-full bg-stone-100 px-3">
                                            <Field
                                                name="valid_code"
                                                id="valid_code"
                                                type="number"
                                                placeholder="مثلا: 1234"
                                                dir="ltr"
                                                className="
                                                w-full bg-transparent py-2 text-center text-sm font-bold tracking-[10px] text-stone-600
                                                placeholder:tracking-normal placeholder:text-stone-400 placeholder:duration-500 focus:placeholder:text-stone-100"
                                            />
                                            <BiMessageDetail className="text-2xl text-stone-400" />
                                        </section>
                                        <p className="mt-5 text-sm font-bold text-red-500">
                                            <ErrorMessage name="valid_code" />
                                        </p>
                                        <button
                                            type="submit"
                                            disabled={
                                                !FormikProps.isValid ||
                                                FormikProps.isSubmitting
                                            }
                                            className="
                                            mt-5 w-full rounded-full bg-gradient-to-l from-orange-900 to-orange-500 py-2 text-sm font-extrabold text-white 
                                            shadow-orange duration-500 disabled:from-stone-200 disabled:to-white disabled:text-stone-300 disabled:shadow-none"
                                        >
                                            تایید و ورود به سایت
                                        </button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}
