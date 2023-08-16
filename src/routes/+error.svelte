<script>
    // @ts-nocheck
    import { page } from '$app/stores';
</script>

<section style="margin-top: 50px;">
    <div class="container text-center">
        <h1>{$page.status}: {$page.error.message}</h1>
    </div>
</section>