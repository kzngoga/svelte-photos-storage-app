<script>
  import Fa from 'svelte-fa';
  import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
  import { albums, loading } from '../../store/albums/albumStore';
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';

  const { loadAlbums } = albums;

  onMount(() => {
    loadAlbums();
  });
</script>

<div class="table-responsive">
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col" />
      </tr>
    </thead>
    <tbody>
      {#if $loading && !$albums.length}
        <tr>
          <td colspan={3} class="text-center fw-bold">Loading albums...</td>
        </tr>
      {:else if !$loading && !$albums.length}
        <tr>
          <td colspan={3} class="text-center fw-bold">No albums data found!</td>
        </tr>
      {:else}
        {#each $albums as album (album.id)}
          <tr>
            <td>{album.id}</td>
            <td>{album.title}</td>
            <td
              ><Link
                class="btn btn-primary py-1"
                to={`album/${album.id}/photos`}
                ><span class="me-2">Photos</span>
                <!-- {`album/${album.id}/photos`} -->
                <Fa icon={faPhotoVideo} /></Link
              ></td
            >
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>

<style>
  .btn {
    font-size: 14px;
  }
</style>
