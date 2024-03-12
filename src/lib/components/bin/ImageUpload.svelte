<script lang="ts">
    import { page } from "$app/stores";

    let image: HTMLImageElement;
    let file: File;

    const onFileChange = (event: any) => {
        file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event: any) => {
            image.src = event.target.result;
            image.style.display = "block";
        };
        reader.readAsDataURL(file);
    }

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch("/api/image", {
            method: "POST",
            headers: {
                "apiKey": $page.data.apiKey
            },
            body: formData
        });
        const data = await response.json();
        console.log(data);
    }

</script>

<div>
    <form>
        <input class="fancy-file-input" name="file" type="file" accept="image/*" on:change={onFileChange} />
        <img style="display: none;" bind:this={image} alt="None"/>
        <button on:click={uploadImage}>Upload</button>
    </form>
</div>


<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        margin: auto;
        margin-bottom: 1rem;
    }

    .fancy-file-input {
        display: inline-block;
        position: relative;
        cursor: pointer;
        font-size: 1em;
        color: #fff;
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        background-color: #000;
    }

    .fancy-file-input:hover {
        background-color: #333;
    }

    .fancy-file-input:active {
        background-color: #666;
    }

    .fancy-file-input::after {
        content: "Browse";
        position: absolute;
        right: 0;
        top: 0;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        background-color: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .fancy-file-input::before {
        content: "Select a file";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        background-color: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 100%;
        max-width: 500px;
        margin-bottom: 1rem;
    }

    button {
        background-color: #000;
        color: #fff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
        margin: auto;
    }

    button:hover {
        background-color: #333;
    }

    button:active {
        background-color: #666;
    }


</style>