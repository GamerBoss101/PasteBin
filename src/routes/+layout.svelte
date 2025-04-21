<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';

	let { children } = $props();
	
	let navItems = [
		{ title: 'Info', href: '/info' },
		{ title: 'API', href: '/api' }
	];
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
