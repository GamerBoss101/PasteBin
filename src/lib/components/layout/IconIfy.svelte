
<script lang="ts">
    import { onMount } from "svelte";

    let icon: HTMLDivElement;

    export let svg: any = null;
    export let collection: string = "mdi";
    export let name : string = "home";

    export let width: string = "100%";
    export let height: string = "100%";

    const createSVG = (svg: string) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svg, "image/svg+xml");
        return doc.documentElement;
    };

    const createImage = () => {
        const img = new Image();
        img.src = `https://api.iconify.design/${collection}/${name}.svg`;
        return img;
    };

    onMount(() => {
        icon.style.display = "inline-block";
        icon.style.width = `${width}`;
        icon.style.height = `${height}`;

        if (svg) icon.appendChild(createSVG(svg));
        else icon.appendChild(createImage());

        icon.childNodes.forEach((element) => {
            // @ts-ignore
            element.style.width = `${width}`;
            // @ts-ignore
            element.style.height = `${height}`;
        });

    });

</script>

<div bind:this={icon}></div>