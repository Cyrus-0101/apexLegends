<template>
  <section class="search">
      <div class="container">If you've played Apex you'd probably want to know where you rank. Enter a user's gamertag to see the rank:</div>
      <h1>Track Player Stats</h1>
      <form v-on:submit.prevent="onSubmit">
          <div class="form-group">
              <label for="platform">Platform</label>
              <select name="platform" id="platfrom" v-model="platform">
                  <option value="psn">PlayStation</option>
                  <option value="xbl">X-box</option>
                  <option value="Origin">Origin</option>
              </select>
          </div>
          <div class="form-group">
              <label for="gamertag">Gamertag</label>
              <input 
                type="text" 
                name="text" 
                id="gamertag" 
                v-model="gamertag"
                placeholder="Origin ID, Xbox Live Gamertag, PSN ID, etc."
            />
          </div>
            <div class="form-group">
                <input type="submit" value="Submit" class="btn">
            </div>
      </form>
  </section>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            platform: "psn",
            gamertag: ""
        };
    },
    beforeCreate() {
        document.body.className = "body-bg-image"
    },
    methods: {
        onSubmit() {
            if (!this.gamertag) {
                this.$toasted.show("Please enter a gamertag!", {
                    duration: 3000,
                    icon: "exclamation-circle"
                });
            } else {
                this.$router.push(`/profile/${this.platform}/${this.gamertag}`);
            }
        }
    }
};
</script>

<style>

</style>