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
      placeholder="Enter Photo Title"
      bind:value={item.title}
    />
  </div>
  <div class="form-group mt-3">
    <input
      type="text"
      class="form-control"
      placeholder="Enter Image Url"
      bind:value={item.imageUrl}
    />
  </div>
</form>

<style>
</style>
