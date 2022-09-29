<script>
  import PageWrapper from '../components/layout/PageWrapper.svelte';
  import AlbumsTable from '../components/albums/AlbumsTable.svelte';
  import Modal from '../components/layout/Modal.svelte';
  import AddAlbumForm from '../components/albums/AddAlbumForm.svelte';
  import { albums } from '../store/albums/albumStore';
  const { addAlbums, filterAlbums } = albums;

  // CHILD COMPONENT ACCESSOR
  let modalComponent;

  //VARIABLES
  let newAlbumItem = {
    title: '',
  };
  let disableBtn = true;
  let searchValue = '';

  //METHODS
  const checkIfFormValid = (e) => {
    const newItem = e.detail;
    const flag = Object.values(newItem).every(
      (prop) => prop === null || prop === ''
    );

    disableBtn = flag;
  };

  const handleAddAlbum = () => {
    const payload = {
      id: Math.floor(Math.random() * 5000 + 60),
      userId: null,
      ...newAlbumItem,
    };
    addAlbums(payload);

    //CLEAR FORM
    newAlbumItem = {};

    //CLOSE MODAL
    modalComponent.modalClose();
  };

  const handleFilterAlbums = () => {
    filterAlbums(searchValue);
  };
</script>

<PageWrapper pageTitle="Photo Manager App">
  <div class="table-top-header mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Search album..."
      bind:value={searchValue}
      on:input={handleFilterAlbums}
    />

    <Modal
      bind:this={modalComponent}
      modalTitle="New Album"
      modalBtnTitle="Add +"
      disableProceedBtn={disableBtn}
      on:proceed={handleAddAlbum}
    >
      <AddAlbumForm item={newAlbumItem} on:validateForm={checkIfFormValid} />
    </Modal>
  </div>
  <AlbumsTable />
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
