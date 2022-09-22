<script>
  import Fa from 'svelte-fa';
  import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
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
      <tr>
        <td>1</td>
        <td>My dogs</td>
        <td
          ><button class="btn btn-primary py-1"
            ><span class="me-2">Photos</span> <Fa icon={faPhotoVideo} /></button
          ></td
        >
      </tr>
    </tbody>
  </table>
</div>

<style>
    button {
        font-size: 14px;
    }
</style>