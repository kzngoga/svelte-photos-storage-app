<script>
  import AlbumsTable from '../components/albums/AlbumsTable.svelte';
  import Modal from '../components/layout/Modal.svelte';

  const addAlbum = (e) => {
    console.log(e);
  };
</script>

<div class="text-center mt-4">
  <h3>Photo Manager App</h3>
  <div class="page-wrapper mx-auto mt-4">
    <div class="table-top-header mb-3">
      <input type="text" class="form-control" placeholder="Search album..." />
      <Modal modalTitle="New Album" modalBtnTitle="Add +">Form Content</Modal>
    </div>
    <AlbumsTable />
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
