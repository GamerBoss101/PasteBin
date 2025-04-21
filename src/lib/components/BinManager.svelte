<script>
	import { page } from "$app/state";

	let bins = page.data.bins;

</script>


<div class="card p-4 bg-neutral-200 dark:bg-neutral-900 shadow-md rounded-md flex-row space-y-5">
	<div>
		<h2 class="text-2xl font-bold">Bin Manager</h2>
		<p class="text-neutral-500 dark:text-neutral-400">A list of elements from the periodic table.</p>
	</div>
	<div class="table-wrap">
		<table class="table caption-bottom">
			<caption class="pt-4">A list of elements from the periodic table.</caption>
			<thead>
				<tr>
					<th>Icon</th>
					<th>ID</th>
					<th>Name</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody class="hover:[&>tr]:preset-tonal-primary">
				{#each bins as bin}
					<tr>
						<td>
							<img src="https://cdn.jsdelivr.net/gh/Bowserinator/Periodic-Table-JSON@master/elements/${bin.number}/small.png"
								alt="{bin.name}" class="w-8 h-8 rounded-full" />
						</td>
						<td>{bin.id}</td>
						<td>{bin.name}</td>
						<td class="flex justify-end space-x-2">
							<button class="btn btn-sm btn-primary">Edit</button>
							<button class="btn btn-sm btn-danger">Delete</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

