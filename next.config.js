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
        ];
    },
};

module.exports = nextConfig;
