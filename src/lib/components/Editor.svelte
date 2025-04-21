<script lang="ts">
    import { ArrowRightIcon as RightArrowIcon } from '@lucide/svelte';
    import { onMount } from "svelte";
    import CEditor from "$lib/ts/Editor";

    let lang: string = "txt";
    let langSelect: HTMLSelectElement;
    let nameInput: HTMLInputElement;
    let editorHTML: HTMLDivElement;
    let editor: any;

    async function selectLanguage(event: any) {
        editorHTML.innerHTML = "";
        console.log(event.target.value);

        lang = event.target.value;

        editor = await CEditor({
            parent: editorHTML,
            language: event.target.value,
        });
    }

    onMount(async() => {
        editor = await CEditor({
            parent: editorHTML,
        });
    });

</script>

<div class="card p-4 bg-neutral-200 dark:bg-neutral-900 shadow-md rounded-md flex-row space-y-5">
    <div class="grid grid-cols-3 lg:grid-cols-4 gap-4">

        { #if lang != "img" } 
            <input type="text" class="input h-fit dark:bg-neutral-900 bg-neutral-950 placeholder-white text-white" bind:this={nameInput} placeholder="Bin Name" />
        {/if}

        <select bind:this={langSelect} onchange={selectLanguage} class="select dark:bg-neutral-900 bg-neutral-950 placeholder-white text-white h-fit">
            <option selected value="txt">Text</option>
            <option value="img">Image</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JavaScript</option>
            <option value="java">Java</option>
            <option value="php">PHP</option>
            <option value="py">Python</option>
            <option value="cpp">C++</option>
            <option value="rust">Rust</option>
            <option value="sass">Sass</option>
            <option value="md">Markdown</option>
            <option value="json">JSON</option>
            <option value="xml">XML</option>
            <option value="sql">SQL</option>
            <option value="vue">Vue</option>
            <option value="svelte">Svelte</option>
            <option value="ang">Angular</option>
            <option value="graphql">Graphql</option>
        </select>
        <div class="col-span-1 lg:col-span-2 lg:grid lg:grid-cols-subgrid gap-4">
            <button type="button" class=" lg:col-start-2 w-full btn preset-filled font-semibold">
                <span>Save</span>
                <RightArrowIcon size={18} />
            </button>
        </div>
    </div>
    <div bind:this={editorHTML}></div>
</div>