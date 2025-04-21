<script lang="ts">
	import { FileUpload } from "@skeletonlabs/skeleton-svelte";
	// Icons
	import IconDropzone from "@lucide/svelte/icons/image-plus";
	import IconFile from "@lucide/svelte/icons/paperclip";
	import IconRemove from "@lucide/svelte/icons/circle-x";
</script>

<FileUpload
	name="image"
	accept="image/*"
	maxFiles={1}
	subtext="Attach up to 1 image."
	onFileChange={console.log}
	onFileReject={console.error}
	classes="w-full"
>
	{#snippet iconInterface()}<IconDropzone class="size-8" />{/snippet}
	{#snippet iconFile()}<IconFile class="size-4" />{/snippet}
	{#snippet iconFileRemove()}<IconRemove class="size-4" />{/snippet}
</FileUpload>
