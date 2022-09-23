<script>
  import Fa from 'svelte-fa';
  import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
  import { albums, loading } from '../../store/albums/albumStore';
  import { onMount } from "svelte";

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
              ><button class="btn btn-primary py-1"
                ><span class="me-2">Photos</span>
                <Fa icon={faPhotoVideo} /></button
              ></td
            >
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>

<style>
  button {
    font-size: 14px;
  }
</style>
