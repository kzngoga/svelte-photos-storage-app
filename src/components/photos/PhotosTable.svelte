<script>
  import { onMount } from 'svelte';
  import Fa from 'svelte-fa';
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
  import { photos, loading } from '../../store/photos/photoStore';
  import Modal from '../layout/Modal.svelte';
  const { loadPhotos, deletePhotos } = photos;

  // PROPS
  export let albumId = '';

  // GLOBAL ACCESSOR
  let modalComponent = '';

  // LIFECYCLE HOOKS
  onMount(() => {
    loadPhotos(albumId);
  });

  // METHODS
  const handleDeletePhoto = (photoId) => {
    deletePhotos(photoId);
    modalComponent.modalClose();
  };
</script>

<div class="table-responsive">
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Image</th>
        <th scope="col">Title</th>
        <th scope="col" />
      </tr>
    </thead>
    <tbody>
      {#if $loading && !$photos.length}
        <tr>
          <td colspan={4} class="text-center fw-bold">Loading photos...</td>
        </tr>
      {:else if !$loading && !$photos.length}
        <tr>
          <td colspan={4} class="text-center fw-bold">No photos data found!</td>
        </tr>
      {:else}
        {#each $photos as photo (photo.id)}
          <tr>
            <td>{photo.id}</td>
            <td>
              <img src={photo.thumbnailUrl} alt="Img" />
            </td>
            <td>{photo.title}</td>
            <td>
              <Modal
                bind:this={modalComponent}
                okBtnTitle="Confirm"
                modalTitle="Delete Photo"
                buttonColor="danger"
                on:proceed={handleDeletePhoto(photo.id)}
              >
                <span slot="button">
                  <Fa icon={faTrashAlt} />
                </span>
                <p class="text-center fw-bold">
                  Are you sure you want to delete this pic?
                </p>
              </Modal>
              <!-- <button class="btn btn-danger"></button> -->
            </td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>

<style>
  img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
</style>
