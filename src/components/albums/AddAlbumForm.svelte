<script>
  // IMPORTS & GLOBAL ASSIGNMENTS
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  //PROPS
  export let item = {};

  //REACTIVE VARIABLES
  $: {
    item, validateForm();
  }

  //METHODS
  const validateForm = () => {
    dispatch('validateForm', item);
  };
</script>

<form>
  <div class="form-group">
    <input
      type="text"
      class="form-control"
      placeholder="Enter Album Title"
      bind:value={item.title}
    />
  </div>
</form>

<style>
</style>
