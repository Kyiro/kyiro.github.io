import lume from "lume/mod.ts";
import minify_html from "lume/plugins/minify_html.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import favicon from "lume/plugins/favicon.ts";
// import picture from "lume/plugins/picture.ts";
// import imagick from "lume/plugins/imagick.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindConfig from "./tailwind.config.ts";

import typography from "https://esm.sh/@tailwindcss/typography@0.5.10";

const site = lume({
    src: "./src/"
});

site.copy("img");

// site.use(picture());
// site.use(imagick());
site.use(tailwindcss({
    options: {
        ...tailwindConfig,
        // specify the plugins here because the tailwindcss plugin doesn't work with URL imports 
        plugins: [typography]
    },
}));
site.use(postcss());
site.use(lightningCss());
site.use(minify_html());
site.use(favicon({
    input: "/img/favicon.webp",
}));

export default site;
