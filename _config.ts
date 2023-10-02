import lume from "lume/mod.ts";
import minify_html from "lume/plugins/minify_html.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindConfig from "./tailwind.config.ts";

import typography from "https://esm.sh/@tailwindcss/typography@0.5.10";

const site = lume();

site.use(minify_html());
site.use(tailwindcss({
    options: {
        ...tailwindConfig,
        // specify the plugins here because the tailwindcss plugin doesn't work with URL imports 
        plugins: [typography]
    },
}));
site.use(postcss());

export default site;
