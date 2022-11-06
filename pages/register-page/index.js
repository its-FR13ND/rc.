//! Required
import Head from "next/head";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

//! Icons
import { FaUserAlt } from "react-icons/fa";
import { AiFillIdcard } from "react-icons/ai";

const VALIDATE_FORM = object().shape({
    full_name: string()
        .min(3, "خطا: لطفا نام کامل خود را وارد کنید.")
        .matches(
            /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/,
            "خطا: نام وارد شده باید از تشکیل شده از حروف فارسی باشد."
        )
        .required("خطا: لطفا نام خود را وارد کنید."),
    national_code: string()
        .matches(/[0-9]/, "خطا: کد ملی وارد شده باید تشکیل شده از اعداد باشد.")
        .min(10, "خطا: کد ملی وارد شده اشتباه است.")
        .max(10, "خطا: کد ملی وارد شده اشتباه است.")
        .required("خطا: لطفا کد ملی خود را وارد کنید."),
});

const SUBMIT_FORM = (values) => {
    console.log(values);
};

//! Template
export default function RegisterPage() {
    return (
        <>
            <Head>
                <title>ثبت نام | ثبت نام در سایت روغنی کار</title>
                <meta
                    name="description"
                    content="روغنی کار | با این صفحه میتونین به در سایت ثبت نام کنید تا به سفارش های خود دسترسی داشته باشید"
                />
            </Head>
            <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-tl from-orange-900 to-orange-500">
                <Formik
                    initialValues={{ full_name: "", national_code: "" }}
                    validationSchema={VALIDATE_FORM}
                    onSubmit={SUBMIT_FORM}
                    validateOnMount
                >
                    {(Formik) => {
                        return (
                            <Form className="flex w-full max-w-lg flex-col items-center justify-start overflow-hidden rounded-3xl border-2 border-orange-500 bg-white p-5 shadow-nice">
                                <label
                                    htmlFor="full_name"
                                    className="self-start pr-2 text-sm font-bold text-stone-800"
                                >
                                    نام و نام خانوادگی من:
                                </label>
                                <section className="mt-2 flex w-full items-center justify-between rounded-full bg-stone-100 px-3">
                                    <Field
                                        onFocus={(e) => e?.target?.select()}
                                        name="full_name"
                                        id="full_name"
                                        type="text"
                                        placeholder="مثلا: بهرام رادان"
                                        className="
                                        w-full bg-transparent py-2 text-center text-sm font-bold text-stone-600
                                        placeholder:text-stone-400 placeholder:duration-500 focus:placeholder:text-stone-100"
                                    />
                                    <FaUserAlt className="text-2xl text-stone-400" />
                                </section>
                                <p className="my-5 text-sm font-bold text-red-500">
                                    <ErrorMessage name="full_name" />
                                </p>
                                <label
                                    htmlFor="national_code"
                                    className="self-start pr-2 text-sm font-bold text-stone-800"
                                >
                                    کد ملی من:
                                </label>
                                <section className="mt-2 flex w-full items-center justify-between rounded-full bg-stone-100 px-3">
                                    <Field
                                        onFocus={(e) => e?.target?.select()}
                                        name="national_code"
                                        id="national_code"
                                        type="text"
                                        inputmode="numeric"
                                        placeholder="مثلا: 1234567890"
                                        className="
                                        w-full bg-transparent py-2 text-center text-sm font-bold tracking-[5px] text-stone-600
                                        placeholder:tracking-normal placeholder:text-stone-400 placeholder:duration-500 focus:placeholder:text-stone-100"
                                    />
                                    <AiFillIdcard className="text-2xl text-stone-400" />
                                </section>
                                <p className="my-5 text-sm font-bold text-red-500">
                                    <ErrorMessage name="national_code" />
                                </p>
                                <button
                                    type="submit"
                                    disabled={
                                        !Formik.isValid || Formik.isSubmitting
                                    }
                                    className="w-full rounded-full bg-gradient-to-l from-orange-900 to-orange-500 py-2.5 text-sm font-bold text-white shadow-orange disabled:from-stone-200 disabled:to-white disabled:text-stone-300 disabled:shadow-none"
                                >
                                    ثبت نام
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
            </main>
        </>
    );
}
