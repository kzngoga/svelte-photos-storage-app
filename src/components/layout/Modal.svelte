<script>
  // IMPORTS & GLOBAL ASSIGNMENTS
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  // PROPS
  export let modalTitle = '';
  export let modalBtnTitle = '';
  export let cancelBtnTitle = 'Cancel';
  export let okBtnTitle = 'Proceed';
  export let disableProceedBtn = false;
  export let buttonColor = 'success';

  // VARIABLES
  let open = false;
  let showBackdrop = true;

  // METHODS
  export const modalClose = () => {
    // THIS IS AN EXAMPLE OF EXPORTABLE FUNCTION
    open = false;
  };

  const onShowPopup = () => {
    open = true;
  };

  const handleSubmit = () => {
    dispatch('proceed');
  };
</script>

<button type="button" class={`btn btn-${buttonColor || 'success'}`} on:click={onShowPopup}>
  {modalBtnTitle}
  <slot name="button"></slot>
</button>

{#if open}
  <div
    class="modal"
    id="sampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="sampleModalLabel"
    aria-hidden={false}
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="sampleModalLabel">
            {modalTitle}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            on:click={modalClose}
          />
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            on:click={modalClose}>{cancelBtnTitle}</button
          >
          <button
            type="button"
            class="btn btn-primary"
            disabled={disableProceedBtn}
            on:click={handleSubmit}>{okBtnTitle}</button
          >
        </div>
      </div>
    </div>
  </div>
  {#if showBackdrop}
    <div class="modal-backdrop show" />
  {/if}
{/if}

<style>
  .modal {
    display: block;
  }
</style>
