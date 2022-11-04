//! Required
import Head from "next/head";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

//! Icons
import { BsPhoneVibrateFill } from "react-icons/bs";

const VALIDATE_PHONE = object().shape({
    phone_number: string()
        .min(11, "خطا: شماره وارد شده اشتباه است.")
        .max(11, "خطا: شماره وارد شده اشتباه است.")
        .required("خطا: لطفا شماره موبایل خود را وارد کنید."),
});

//! Template
export default function LoginPage() {
    const SUBMIT_PHONE = (values) => {
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
            <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-tl from-orange-900 to-orange-500">
                <section className="w-full max-w-lg rounded-3xl bg-white p-5">
                    <Formik
                        initialValues={{ phone_number: "" }}
                        validationSchema={VALIDATE_PHONE}
                        onSubmit={SUBMIT_PHONE}
                        validateOnMount
                    >
                        {(FormikProps) => {
                            console.log(FormikProps);
                            return (
                                <Form className="flex w-full flex-col items-center justify-start">
                                    <label
                                        htmlFor="phone_number"
                                        className="text-sm font-bold text-stone-800"
                                    >
                                        لطفا شماره موبایل خود را وارد نمایید
                                    </label>
                                    <input type="text" />
                                    <section className="mt-10 flex w-full items-center justify-between rounded-full bg-stone-100 px-3 py-2">
                                        <Field
                                            name="phone_number"
                                            id="phone_number"
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            placeholder="مثلا: 9876 543 0912"
                                            dir="ltr"
                                            className="
                                            grow bg-transparent text-center text-sm font-bold tracking-[5px] text-stone-600 placeholder:tracking-normal
                                            placeholder:text-stone-400 placeholder:duration-500 focus:placeholder:text-stone-100"
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
                                        duration-500 disabled:from-stone-200 disabled:to-white disabled:text-stone-300"
                                    >
                                        ارسال کد تایید
                                    </button>
                                </Form>
                            );
                        }}
                    </Formik>
                </section>
            </main>
        </>
    );
}
