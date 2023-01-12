<template>
  <div>
    <form action="">
      <input
        placeholder="Username"
        type="text"
        @keyup.enter="getData"
        v-model="user"
      />
      <button @click="getData">Search</button>
    </form>

    <!-- head Info -->
    <div class="headCard">
      <div
        class="headCard uk-card uk-card-default uk-flex-center uk-flex uk-child-width-1-4@s"
        uk-grid
      >
        <div class="uk-card-media-left uk-cover-container">
          <img :src="data.avatar_url" class="" />
        </div>
        <div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">
              {{ data.name }}
            </h3>
            <p>{{ data.bio }}</p>
            <p>{{ data.company }}</p>
            <p>{{ data.location }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- tabs -->
    <div class="uk-margin-medium-top">
      <ul class="uk-flex-center" uk-tab data-uk-tab="{connect:'#my-id'}">
        <li class="uk-active"><a href="#">Stars</a></li>
        <li><a href="#">Followers</a></li>
        <li><a href="#">Followings</a></li>
        <li><a href="#">Reposotries</a></li>
      </ul>
      <ul id="my-id" class="uk-switcher uk-margin">
        <li>
          <div v-for="star in stars" :key="star">
            <div class="card">
              <img :src="star.owner.avatar_url" alt="" />
              <p>{{ star.name }}</p>
              <a :href="star.html_url" target="_blank" uk-icon="github"></a>
            </div>
          </div>
        </li>
        <li>
          <div v-for="follower in followers" :key="follower">
            <div class="card">
              <img :src="follower.avatar_url" alt="" />
              <p>{{ follower.login }}</p>
              <a :href="follower.html_url" target="_blank" uk-icon="github"></a>
            </div>
          </div>
        </li>
        <li>
          <div v-for="follow in followings" :key="follow">
            <div class="card">
              <img :src="follow.avatar_url" alt="" />
              <p>{{ follow.login }}</p>
              <a target="_blank" :href="follow.html_url" uk-icon="github"></a>
            </div>
          </div>
        </li>
        <li>
          <div v-for="repo in repos" :key="repo">
            <div class="card">
              <img :src="repo.owner.avatar_url" alt="" />
              <p>{{ repo.name }}</p>
              <a target="_blank" :href="repo.html_url" uk-icon="github"></a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      data: "",
      stars: [],
      followers: [],
      followings: [],
      repos: [],
    };
  },
  methods: {
    getData() {
      // info
      fetch(`https://api.github.com/users/${this.user}`)
        .then((res) => res.json())
        .then((e) => (this.data = e))
        .catch((err) => console.log(err));
      // repos
      fetch(`https://api.github.com/users/${this.user}/repos`)
        .then((res) => res.json())
        .then((e) => (this.repos = e))
        .catch((err) => console.log(err));
      // followers
      fetch(`https://api.github.com/users/${this.user}/followers`)
        .then((res) => res.json())
        .then((e) => (this.followers = e))
        .catch((err) => console.log(err));
      // followings
      fetch(`https://api.github.com/users/${this.user}/following`)
        .then((res) => res.json())
        .then((e) => (this.followings = e))
        .catch((err) => console.log(err));
      // stars
      fetch(`https://api.github.com/users/${this.user}/starred`)
        .then((res) => res.json())
        .then((e) => (this.stars = e))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="css" scoped>
input {
  padding: 10px 30px;
  border: 1px solid #251749;
}
button {
  padding: 10px 27px;
  border: 1px solid #251749;
  letter-spacing: 1px;
}
img {
  border-radius: 50%;
  height: 220px;
  width: 220px;
}

.headCard {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card {
  display: flex;
  justify-content: space-around;
  width: 300px;
  border: 1px solid #251749;
  border-radius: 3px;
  align-items: center;
  margin: 20px auto;
}

.card img {
  width: 50px;
  height: 50px;
}
.card p {
  font-size: 18px;
}

.card {
  font-weight: 600;
}
</style>
