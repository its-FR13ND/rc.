import { uuid } from "uuidv4";

const data = [
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/بهران_سوپر_پیشتاز_hxei.png",
        name: "روغن موتور بهران مدل Super Pishtaz SAR 4L",
        brand: "بهران",
        volume: 4,
        type: "Super Pishtaz SAR",
        useFor: ["پراید 141", "206"],
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "درباره روغن موتور بهران مدل Super Pishtaz SAR 4L",
        sails: 50,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_خودرو_بهتام_روانکار_مدل_10w40_quantic_حجم_4_لیتر_p36b.png",
        name: "روغن موتور بهتام روانکار مدل 10W40 Quantic 4L",
        brand: "بهتام",
        volume: 4,
        type: "10W40 Quantic",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "",
        sails: 30,
    },
    {
        id: uuid(),
        productType: "فیلتر روغن",
        image: "https://s6.uupload.ir/files/فیلتر_روغن_خودروی_سرکان_مدل_sf_7167_5tdp.png",
        name: "فیلتر روغن خودروی سرکان مدل SF 7167",
        brand: "سرکان",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "",
        sails: 60,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_خودرو_ولور_مدل_super_dynamic_10w40_sn_حجم_1_لیتر_xgt8.png",
        name: " روغن موتور خودرو ولور مدل Super dynamic 10W40 SN حجم 1 لیتر",
        brand: "ولور",
        volume: 1,
        type: "Super dynamic 10W40 SN",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 258000,
        about: "درباره روغن موتور خودرو ولور مدل Super dynamic 10W40 SN حجم 1 لیتر",
        sails: 10,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_توتال_مدل_5w-40_egy_حجم_5_لیتر_3wn4.png",
        name: "روغن موتور توتال مدل 5W-40 EGY حجم 5 لیتر",
        brand: "توتال",
        volume: 5,
        type: "5W-40 EGY",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 1420000,
        about: "درباره روغن موتور بهران مدل Super Pishtaz SAR 4L",
        sails: 25,
    },
    {
        id: uuid(),
        productType: "فیلتر روغن",
        image: "https://s6.uupload.ir/files/فیلتر_روغن_خودروی_سرکان_مدل_sf_7735_lyk.png",
        name: "فیلتر روغن خودروی سرکان مدل SF 7735",
        brand: "سرکان",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 61000,
        about: "",
        sails: 30,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/بهران_سوپر_پیشتاز_hxei.png",
        name: "روغن موتور بهران مدل Super Pishtaz SAR 4L",
        brand: "بهران",
        volume: 4,
        type: "Super Pishtaz SAR",
        useFor: ["پراید 141", "206"],
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "درباره روغن موتور بهران مدل Super Pishtaz SAR 4L",
        sails: 50,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_خودرو_بهتام_روانکار_مدل_10w40_quantic_حجم_4_لیتر_p36b.png",
        name: "روغن موتور بهتام روانکار مدل 10W40 Quantic 4L",
        brand: "بهتام",
        volume: 4,
        type: "10W40 Quantic",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "",
        sails: 30,
    },
    {
        id: uuid(),
        productType: "فیلتر روغن",
        image: "https://s6.uupload.ir/files/فیلتر_روغن_خودروی_سرکان_مدل_sf_7167_5tdp.png",
        name: "فیلتر روغن خودروی سرکان مدل SF 7167",
        brand: "سرکان",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "",
        sails: 60,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_خودرو_ولور_مدل_super_dynamic_10w40_sn_حجم_1_لیتر_xgt8.png",
        name: " روغن موتور خودرو ولور مدل Super dynamic 10W40 SN حجم 1 لیتر",
        brand: "ولور",
        volume: 1,
        type: "Super dynamic 10W40 SN",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 258000,
        about: "درباره روغن موتور خودرو ولور مدل Super dynamic 10W40 SN حجم 1 لیتر",
        sails: 10,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_توتال_مدل_5w-40_egy_حجم_5_لیتر_3wn4.png",
        name: "روغن موتور توتال مدل 5W-40 EGY حجم 5 لیتر",
        brand: "توتال",
        volume: 5,
        type: "5W-40 EGY",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 1420000,
        about: "درباره روغن موتور بهران مدل Super Pishtaz SAR 4L",
        sails: 25,
    },
    {
        id: uuid(),
        productType: "فیلتر روغن",
        image: "https://s6.uupload.ir/files/فیلتر_روغن_خودروی_سرکان_مدل_sf_7735_lyk.png",
        name: "فیلتر روغن خودروی سرکان مدل SF 7735",
        brand: "سرکان",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 61000,
        about: "",
        sails: 30,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/بهران_سوپر_پیشتاز_hxei.png",
        name: "روغن موتور بهران مدل Super Pishtaz SAR 4L",
        brand: "بهران",
        volume: 4,
        type: "Super Pishtaz SAR",
        useFor: ["پراید 141", "206"],
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "درباره روغن موتور بهران مدل Super Pishtaz SAR 4L",
        sails: 50,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_خودرو_بهتام_روانکار_مدل_10w40_quantic_حجم_4_لیتر_p36b.png",
        name: "روغن موتور بهتام روانکار مدل 10W40 Quantic 4L",
        brand: "بهتام",
        volume: 4,
        type: "10W40 Quantic",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "",
        sails: 30,
    },
    {
        id: uuid(),
        productType: "فیلتر روغن",
        image: "https://s6.uupload.ir/files/فیلتر_روغن_خودروی_سرکان_مدل_sf_7167_5tdp.png",
        name: "فیلتر روغن خودروی سرکان مدل SF 7167",
        brand: "سرکان",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "",
        sails: 60,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_خودرو_ولور_مدل_super_dynamic_10w40_sn_حجم_1_لیتر_xgt8.png",
        name: " روغن موتور خودرو ولور مدل Super dynamic 10W40 SN حجم 1 لیتر",
        brand: "ولور",
        volume: 1,
        type: "Super dynamic 10W40 SN",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 258000,
        about: "درباره روغن موتور خودرو ولور مدل Super dynamic 10W40 SN حجم 1 لیتر",
        sails: 10,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_توتال_مدل_5w-40_egy_حجم_5_لیتر_3wn4.png",
        name: "روغن موتور توتال مدل 5W-40 EGY حجم 5 لیتر",
        brand: "توتال",
        volume: 5,
        type: "5W-40 EGY",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 1420000,
        about: "درباره روغن موتور بهران مدل Super Pishtaz SAR 4L",
        sails: 25,
    },
    {
        id: uuid(),
        productType: "فیلتر روغن",
        image: "https://s6.uupload.ir/files/فیلتر_روغن_خودروی_سرکان_مدل_sf_7735_lyk.png",
        name: "فیلتر روغن خودروی سرکان مدل SF 7735",
        brand: "سرکان",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 61000,
        about: "",
        sails: 30,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/بهران_سوپر_پیشتاز_hxei.png",
        name: "روغن موتور بهران مدل Super Pishtaz SAR 4L",
        brand: "بهران",
        volume: 4,
        type: "Super Pishtaz SAR",
        useFor: ["پراید 141", "206"],
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "درباره روغن موتور بهران مدل Super Pishtaz SAR 4L",
        sails: 50,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_خودرو_بهتام_روانکار_مدل_10w40_quantic_حجم_4_لیتر_p36b.png",
        name: "روغن موتور بهتام روانکار مدل 10W40 Quantic 4L",
        brand: "بهتام",
        volume: 4,
        type: "10W40 Quantic",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "",
        sails: 30,
    },
    {
        id: uuid(),
        productType: "فیلتر روغن",
        image: "https://s6.uupload.ir/files/فیلتر_روغن_خودروی_سرکان_مدل_sf_7167_5tdp.png",
        name: "فیلتر روغن خودروی سرکان مدل SF 7167",
        brand: "سرکان",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "",
        sails: 60,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_خودرو_ولور_مدل_super_dynamic_10w40_sn_حجم_1_لیتر_xgt8.png",
        name: " روغن موتور خودرو ولور مدل Super dynamic 10W40 SN حجم 1 لیتر",
        brand: "ولور",
        volume: 1,
        type: "Super dynamic 10W40 SN",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 258000,
        about: "درباره روغن موتور خودرو ولور مدل Super dynamic 10W40 SN حجم 1 لیتر",
        sails: 10,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_توتال_مدل_5w-40_egy_حجم_5_لیتر_3wn4.png",
        name: "روغن موتور توتال مدل 5W-40 EGY حجم 5 لیتر",
        brand: "توتال",
        volume: 5,
        type: "5W-40 EGY",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 1420000,
        about: "درباره روغن موتور بهران مدل Super Pishtaz SAR 4L",
        sails: 25,
    },
    {
        id: uuid(),
        productType: "فیلتر روغن",
        image: "https://s6.uupload.ir/files/فیلتر_روغن_خودروی_سرکان_مدل_sf_7735_lyk.png",
        name: "فیلتر روغن خودروی سرکان مدل SF 7735",
        brand: "سرکان",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 61000,
        about: "",
        sails: 30,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/بهران_سوپر_پیشتاز_hxei.png",
        name: "روغن موتور بهران مدل Super Pishtaz SAR 4L",
        brand: "بهران",
        volume: 4,
        type: "Super Pishtaz SAR",
        useFor: ["پراید 141", "206"],
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "درباره روغن موتور بهران مدل Super Pishtaz SAR 4L",
        sails: 50,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_خودرو_بهتام_روانکار_مدل_10w40_quantic_حجم_4_لیتر_p36b.png",
        name: "روغن موتور بهتام روانکار مدل 10W40 Quantic 4L",
        brand: "بهتام",
        volume: 4,
        type: "10W40 Quantic",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "",
        sails: 30,
    },
    {
        id: uuid(),
        productType: "فیلتر روغن",
        image: "https://s6.uupload.ir/files/فیلتر_روغن_خودروی_سرکان_مدل_sf_7167_5tdp.png",
        name: "فیلتر روغن خودروی سرکان مدل SF 7167",
        brand: "سرکان",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "",
        sails: 60,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_خودرو_ولور_مدل_super_dynamic_10w40_sn_حجم_1_لیتر_xgt8.png",
        name: " روغن موتور خودرو ولور مدل Super dynamic 10W40 SN حجم 1 لیتر",
        brand: "ولور",
        volume: 1,
        type: "Super dynamic 10W40 SN",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 258000,
        about: "درباره روغن موتور خودرو ولور مدل Super dynamic 10W40 SN حجم 1 لیتر",
        sails: 10,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_توتال_مدل_5w-40_egy_حجم_5_لیتر_3wn4.png",
        name: "روغن موتور توتال مدل 5W-40 EGY حجم 5 لیتر",
        brand: "توتال",
        volume: 5,
        type: "5W-40 EGY",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 1420000,
        about: "درباره روغن موتور بهران مدل Super Pishtaz SAR 4L",
        sails: 25,
    },
    {
        id: uuid(),
        productType: "فیلتر روغن",
        image: "https://s6.uupload.ir/files/فیلتر_روغن_خودروی_سرکان_مدل_sf_7735_lyk.png",
        name: "فیلتر روغن خودروی سرکان مدل SF 7735",
        brand: "سرکان",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 61000,
        about: "",
        sails: 30,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/بهران_سوپر_پیشتاز_hxei.png",
        name: "روغن موتور بهران مدل Super Pishtaz SAR 4L",
        brand: "بهران",
        volume: 4,
        type: "Super Pishtaz SAR",
        useFor: ["پراید 141", "206"],
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "درباره روغن موتور بهران مدل Super Pishtaz SAR 4L",
        sails: 50,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_خودرو_بهتام_روانکار_مدل_10w40_quantic_حجم_4_لیتر_p36b.png",
        name: "روغن موتور بهتام روانکار مدل 10W40 Quantic 4L",
        brand: "بهتام",
        volume: 4,
        type: "10W40 Quantic",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "",
        sails: 30,
    },
    {
        id: uuid(),
        productType: "فیلتر روغن",
        image: "https://s6.uupload.ir/files/فیلتر_روغن_خودروی_سرکان_مدل_sf_7167_5tdp.png",
        name: "فیلتر روغن خودروی سرکان مدل SF 7167",
        brand: "سرکان",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 235000,
        about: "",
        sails: 60,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_خودرو_ولور_مدل_super_dynamic_10w40_sn_حجم_1_لیتر_xgt8.png",
        name: " روغن موتور خودرو ولور مدل Super dynamic 10W40 SN حجم 1 لیتر",
        brand: "ولور",
        volume: 1,
        type: "Super dynamic 10W40 SN",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 258000,
        about: "درباره روغن موتور خودرو ولور مدل Super dynamic 10W40 SN حجم 1 لیتر",
        sails: 10,
    },
    {
        id: uuid(),
        productType: "روغن موتور",
        image: "https://s6.uupload.ir/files/روغن_موتور_توتال_مدل_5w-40_egy_حجم_5_لیتر_3wn4.png",
        name: "روغن موتور توتال مدل 5W-40 EGY حجم 5 لیتر",
        brand: "توتال",
        volume: 5,
        type: "5W-40 EGY",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 1420000,
        about: "درباره روغن موتور بهران مدل Super Pishtaz SAR 4L",
        sails: 25,
    },
    {
        id: uuid(),
        productType: "فیلتر روغن",
        image: "https://s6.uupload.ir/files/123_djal.png",
        name: "فیلتر روغن خودروی سرکان مدل SF 7735",
        brand: "سرکان",
        useFor: "پراید 141",
        serialNumber: 105080,
        madeIn: "چین",
        price: 61000,
        about: "",
        sails: 30,
    },
];
export default data;
