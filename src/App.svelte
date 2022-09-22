<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './pages/Home.svelte';
  
  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="/"><Home /></Route>
  </div>
</Router>
