import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "How mutations to an H7 HA affect its interaction with tufted duck MHC-II",
  description:
    "Data, figures, and analysis for `dms-vep-pipeline-3` test example.",
  base: "/Flu-H7-Anhui13-MHCII-binding/",
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Appendix", link: "/appendix", target: "_self" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/https://github.com/dms-vep/Flu-H7-Anhui13-MHCII-binding" }],
    footer: {
      message: "Copyright © 2026-present Bernadeta Dadonaite and Jesse Bloom",
    },
  },
});
