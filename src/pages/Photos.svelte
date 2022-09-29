<script>
  import Modal from '../components/layout/Modal.svelte';
  import PageWrapper from '../components/layout/PageWrapper.svelte';
  import AddPhotoForm from '../components/photos/AddPhotoForm.svelte';
  import PhotosTable from '../components/photos/PhotosTable.svelte';
  import { photos } from '../store/photos/photoStore';

  const { addPhotos, filterPhotos } = photos;

  //PARAMS
  export let albumId = '';

  // CHILD COMPONENT ACCESSOR
  let modalComponent;

  //VARIABLES
  let searchValue = '';
  let disableBtn = true;
  let newPhotoItem = {
    title: '',
    imageUrl: '',
  };

  //METHODS
  const checkIfFormValid = (e) => {
    const newItem = e.detail;
    const flag = Object.values(newItem).some(
      (prop) => prop === null || prop === ''
    );

    disableBtn = flag;
  };

  const handleAddPhoto = () => {
    const payload = {
      id: Math.floor(Math.random() * 10000 + 5001),
      albumId,
      url: null,
      thumbnailUrl: newPhotoItem.imageUrl,
      title: newPhotoItem.title,
    };
    addPhotos(payload);
    newPhotoItem = {};

    //CLOSE MODAL
    modalComponent.modalClose();
  };

  const handleFilterPhotos = () => {
    filterPhotos(searchValue);
  };
</script>

<PageWrapper pageTitle="Album Photos">
  <div class="table-top-header mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Search photo..."
      bind:value={searchValue}
      on:input={handleFilterPhotos}
    />

    <Modal
      bind:this={modalComponent}
      modalTitle="New Photo"
      modalBtnTitle="Add +"
      disableProceedBtn={disableBtn}
      on:proceed={handleAddPhoto}
    >
      <AddPhotoForm item={newPhotoItem} on:validateForm={checkIfFormValid} />
    </Modal>
  </div>
  <PhotosTable {albumId} />
</PageWrapper>

<style>
  .table-top-header {
    display: flex;
    justify-content: space-between;
  }

  .table-top-header input {
    width: 40%;
    box-shadow: none;
    outline: none;
  }
</style>
