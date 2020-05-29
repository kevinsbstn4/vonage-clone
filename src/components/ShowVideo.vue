<template>
  <div style="width: 75%; " class="main-video">
    <div style="width: 75%;" class="card">
      <div style="text-align: justify;" class="card-header">
        Search emails by:
      </div>
      <div class="card-body">
        <input
          style="border: 0;outline: 0;background: transparent;border-bottom: 1px solid black; width: 30%; text-align: justify;"
          type="text"
          placeholder="To email address"
        />
        <input
          style="border: 0;outline: 0;background: transparent;border-bottom: 1px solid black; width: 30%; text-align: justify;"
          type="date"
          placeholder="To email address"
        />

        <button type="button" class="btn btn-outline-primary">Clear</button>
        <button type="button" class="btn btn-primary">Search</button>
      </div>
    </div>
    <!-- TABLE -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Url</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        <tr></tr>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "ShowVideo",
  props: {
    msg: String,
  },
};
</script>
