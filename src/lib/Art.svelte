<script>
    import { artPosts } from "../stores.js";

</script>

{#each $artPosts as item}
    <div class="wrapper">
        <img src={item.source} alt={item.alt} />
        <h2>{item.title}</h2>

    </div>
{/each}

<style>
    a {
        font-size: 1em;
    }
</style>
