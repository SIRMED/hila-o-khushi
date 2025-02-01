import localFont from "next/font/local";

// Gilroy Regular fonts
const gilroyThin = localFont({ src: "./Gilroy-Thin.ttf" });
const gilroyUltraLight = localFont({ src: "./Gilroy-UltraLight.ttf" });
const gilroyLight = localFont({ src: "./Gilroy-Light.ttf" });
const gilroy = localFont({ src: "./Gilroy-Regular.ttf" });
const gilroySemibold = localFont({ src: "./Gilroy-SemiBold.ttf" });
const gilroyMedium = localFont({ src: "./Gilroy-Medium.ttf" });
const gilroyBold = localFont({ src: "./Gilroy-Bold.ttf" });
const gilroyExtraBold = localFont({ src: "./Gilroy-ExtraBold.ttf" });
const gilroyBlack = localFont({ src: "./Gilroy-Black.ttf" });
const gilroyHeavy = localFont({ src: "./Gilroy-Heavy.ttf" });

// Gilory Italic fonts
const gilroyThinItalic = localFont({ src: "./Gilroy-ThinItalic.ttf" });
const gilroyUltraLightItalic = localFont({ src: "./Gilroy-UltraLightItalic.ttf" });
const gilroyLightItalic = localFont({ src: "./Gilroy-LightItalic.ttf" });
const gilroyItalic = localFont({ src: "./Gilroy-RegularItalic.ttf" });
const gilroySemiboldItalic = localFont({ src: "./Gilroy-SemiBoldItalic.ttf" });
const gilroyMediumItalic = localFont({ src: "./Gilroy-MediumItalic.ttf" });
const gilroyBoldItalic = localFont({ src: "./Gilroy-BoldItalic.ttf" });
const gilroyExtraBoldItalic = localFont({ src: "./Gilroy-ExtraBoldItalic.ttf" });
const gilroyBlackItalic = localFont({ src: "./Gilroy-BlackItalic.ttf" });
const gilroyHeavyItalic = localFont({ src: "./Gilroy-HeavyItalic.ttf" });

// Monospace Fonts
const splineSansMono = localFont({ src: "./SplineSansMono-Variable.ttf" })

// Title fonts
const climateCrisis = localFont({ src: "./ClimateCrisis-Regular.ttf" })

export default gilroy
export {
    gilroyThin,
    gilroyUltraLight,
    gilroyLight,
    gilroySemibold,
    gilroyMedium,
    gilroyBold,
    gilroyExtraBold,
    gilroyBlack,
    gilroyHeavy,

    gilroyThinItalic,
    gilroyUltraLightItalic,
    gilroyLightItalic,
    gilroyItalic,
    gilroySemiboldItalic,
    gilroyMediumItalic,
    gilroyBoldItalic,
    gilroyExtraBoldItalic,
    gilroyBlackItalic,
    gilroyHeavyItalic,

    splineSansMono,

    climateCrisis
}