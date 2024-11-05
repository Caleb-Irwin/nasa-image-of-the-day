<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="w-screen h-screen flex flex-col place-content-center">
	<h1 class="text-2xl text-center font-bold pb-2">{data.title}</h1>
	<div class="max-h-[80vh] flex place-content-center">
		<img src={data.url} alt="NASA" class="max-h-[80vh]" />
	</div>
</div>
