import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "How mutations to an H7 HA affect its interaction with tufted duck MHC-II",
  description:
    "Pseudovirus deep mutational scanning of how mutations to HA from A/Anhui/1/2013 (H7N9) affects its interaction with tufted duck MHC-II",
  base: "/Flu-H7-Anhui13-MHCII-binding/",
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Appendix", link: "/appendix", target: "_self" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/dms-vep/Flu-H7-Anhui13-MHCII-binding" }],
    footer: {
      message: 'See <a href="https://doi.org/10.64898/2026.07.17.738765">Dadonaite et al (2026)</a> for study details.',
    },
  },
});
