<template>
  <div class="main-video">
    <center>
      <div style="width: 85%; " class="card">
        <div style="text-align: justify;" class="card-header">
          Search emails by:
        </div>
        <div class="card-body">
          <div class="email-body">
            <input
              style="border: 0;outline: 0;background: transparent;border-bottom: 1px solid black;  text-align: justify;"
              type="search"
              placeholder="To email address"
            />
            &#9;
            <input
              style="border: 0;outline: 0;background: transparent;border-bottom: 1px solid black;  text-align: justify;"
              type="date"
              placeholder="To email address"
            />
            &#160;&#9;
            <button
              style="width: 10%"
              type="button"
              class="btn btn-outline-dark"
            >
              Clear
            </button>
            &#160;
            <button style="width: 10%" type="button" class="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </div>
      <table style="margin-top: 5%; width: 85%;" class="table table-hover ">
        <thead class="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">url</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </center>
  </div>
</template>
<script>
export default {
  name: "VideoDash",
  data() {
    return {};
  },
};
</script>
