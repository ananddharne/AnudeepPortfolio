<template>
  <div>
      <img v-bind:src="homeImage" >
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeImage: '../assets/images/vu.jpg'
    }
  }
}
</script>

<style lang="sass" scoped
img {
  width: "200px";
}


</style>
