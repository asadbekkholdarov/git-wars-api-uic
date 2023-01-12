<template>
  <div>
    <div class="form">
      <input
        placeholder="Username"
        type="text"
        @keyup.enter="getData"
        v-model="user"
      />
      <button @click="getData">Search</button>

      <h1>{{ data.success == false ? "Not Found" : data.username }}</h1>

      <div class="tableContainer">
        <table
          class="uk-table uk-table-small uk-table-striped uk-table-responsive uk-table-divider"
        >
          <thead>
            <th>Info</th>
            <th>Value</th>
          </thead>
          <tbody>
            <tr>
              <td>Honor</td>
              <td>{{ data.honor ? data.honor : "-" }}</td>
            </tr>
            <tr>
              <td>Leader Board Position</td>
              <td>
                {{ data.leaderboardPosition ? data.leaderboardPosition : "-" }}
              </td>
            </tr>
            <tr>
              <td>Rank</td>
              <td>{{ data.ranks ? data.ranks.overall.rank : "-" }}</td>
            </tr>
            <tr>
              <td>Kyu</td>
              <td>{{ data.ranks ? data.ranks.overall.name : "-" }}</td>
            </tr>
            <tr>
              <td>Score</td>
              <td>{{ data.ranks ? data.ranks.overall.score : "-" }}</td>
            </tr>
            <tr>
              <td>Completed Katas</td>
              <td>
                {{
                  data.codeChallenges ? data.codeChallenges.totalCompleted : "-"
                }}
              </td>
            </tr>
            <tr>
              <td>Color</td>
              <td>{{ data.ranks ? data.ranks.overall.color : "-" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Languages</h3>
      <div class="tableContainer">
        <table
          class="uk-table uk-table-striped uk-table-small uk-table-responsive uk-table-divider"
        >
          <thead>
            <th>Language</th>
            <th>rank</th>
            <th>name</th>
            <th>color</th>
            <th>score</th>
          </thead>
          <tbody>
            <tr v-for="(lang, key, index) in langs" :key="index">
              <td>{{ key }}</td>
              <td>{{ lang.rank }}</td>
              <td>{{ lang.name }}</td>
              <td>{{ lang.color }}</td>
              <td>{{ lang.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      data: "",
      langs: [],
    };
  },
  methods: {
    getData() {
      fetch(`https://www.codewars.com/api/v1/users/${this.user}`)
        .then((res) => res.json())
        .then(
          (e) => (
            (this.data = e),
            (this.langs = this.data.ranks ? this.data.ranks.languages : [])
          )
        );
    },
  },
};
</script>

<style lang="css" scoped>
td {
  text-align: start;
}
.tableContainer {
  width: 90%;
  margin: 0 auto;
}

th {
  font-weight: 900;
}
.form {
  color: #251749;
}
input {
  padding: 10px 30px;
  border: 1px solid #251749;
}
button {
  padding: 10px 27px;
  border: 1px solid #251749;
  letter-spacing: 1px;
}
</style>
