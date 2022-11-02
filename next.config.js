/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: `/${encodeURI("قیمت-روز-روغن-موتور-فیلتر-هوا-ضدیخ")}`,
                destination: "/price-list",
            },
            {
                source: `/${encodeURI("لیست-محصولات")}`,
                destination: "/product-list",
            },
        ];
    },
    images: {
        domains: ["s6.uupload.ir"],
    },
};

module.exports = nextConfig;
