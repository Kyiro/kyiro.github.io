<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import SiRust from "svelte-icons-pack/si/SiRust";
    import SiCplusplus from "svelte-icons-pack/si/SiCplusplus";
    import SiTypescript from "svelte-icons-pack/si/SiTypescript";
    import SiJavascript from "svelte-icons-pack/si/SiJavascript";
    import FaBrandsDiscord from "svelte-icons-pack/fa/FaBrandsDiscord";
    import FaBrandsTwitter from "svelte-icons-pack/fa/FaBrandsTwitter";
    import FaBrandsGithub from "svelte-icons-pack/fa/FaBrandsGithub";
</script>

<div>
    <h1 class="text-brand zoom-animation underline center">Kyiro</h1>
    <div class="container">
        <div>
            <div class="container showcase">
                <Icon src={SiRust} className="showcase-logo" color="#85582c"/>
                <Icon src={SiCplusplus} className="showcase-logo" color="#00599c"/>
                <Icon src={SiTypescript} className="showcase-logo" color="#3178c6"/>
                <Icon src={SiJavascript} className="showcase-logo" color="#f0db4f"/>
            </div>
            <div class="container showcase">
                <!-- TO-DO: Figure out a better way to link a discord account than a temporary friend invite -->
                <a href="https://discord.gg/V89dHyWe" target="_noblank"><Icon src={FaBrandsDiscord} className="showcase-logo" color="#5865f2"/></a>
                <a href="https://twitter.com/ky1ro" target="_noblank"><Icon src={FaBrandsTwitter} className="showcase-logo" color="#1c93e4"/></a>
                <a href="https://github.com/kyiro" target="_noblank"><Icon src={FaBrandsGithub} className="showcase-logo" color="white"/></a>
            </div>
        </div>
    </div>
</div>