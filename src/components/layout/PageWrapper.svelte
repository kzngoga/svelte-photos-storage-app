<script>
  import Navbar from './Navbar.svelte';

  export let pageTitle = '';
</script>

<div class="text-center mt-4">
  <Navbar />
  <h3>{pageTitle}</h3>
  <div class="page-wrapper mx-auto mt-4">
    <slot />
  </div>
</div>

<style>
  h3 {
    font-weight: bold;
    color: #333;
  }

  .page-wrapper {
    width: 60%;
  }
</style>
