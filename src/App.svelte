<script>
  import { Router, Route } from 'svelte-routing';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Photos from './pages/Photos.svelte';
  
  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="album/:id/photos" let:params>
      <Photos albumId={params.id} />
    </Route>
    <Route path="about" component={About} />
    <!-- <Route path="album/:id" component={Photos} /> -->
    <Route path="/"><Home /></Route>
  </div>
</Router>

<style>
</style>