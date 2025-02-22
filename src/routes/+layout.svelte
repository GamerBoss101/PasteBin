<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';

	import { onMount } from 'svelte';

	let { children } = $props();

	let navItems = [
		{ title: 'Info', href: '/info' },
		{ title: 'API', href: '/api' },
	];

    onMount(() => {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
    });

</script>

<svelte:head>
	<title>PasteBin</title>

	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="A simple pastebin clone" />
	<meta name="image" content="/BinChan.png" />

</svelte:head>

<main class="h-fit min-h-screen flex flex-col dark:bg-surface-900">
	<NavBar title="THE BIN" items={navItems} />
	{@render children()}
</main>
