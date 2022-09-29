<script>
  import { Link } from 'svelte-routing';
  let currentPath = window.location.pathname;
</script>

<ul class="nav justify-content-center">
  <li class="nav-item" class:active={currentPath === '/'}>
    <Link class="nav-link" to="/">Home</Link>
  </li>
  <li class="nav-item" class:active={currentPath === '/about'}>
    <Link class="nav-link" to="about">About</Link>
  </li>
</ul>

<style>
  li.active {
    font-weight: bold;
  }
</style>
