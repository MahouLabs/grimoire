<script>
  export let text = '';
  export let className = '';

  let words = text.split(' ');
</script>

<span class="text-balance text-center">
  {#each words as word, index}
    <span
      class="inline-block animate-blur-text opacity-0 {className}"
      style="animation-delay: {index * 80}ms"
    >
      {word}{#if index < words.length - 1}<span>&nbsp;</span>{/if}
    </span>
  {/each}
</span>

<style>
/* Add your styles here */
</style>
