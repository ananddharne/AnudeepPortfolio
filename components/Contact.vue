<template>
  <div>
    <div class="border">
    </div>
      <div>
          <h2>Anudeep Vangapandu</h2>
          <a href=mailto:{{emailaddress}}>{{emailaddress}}</a>
          <p> Contact no. +1(213) 326-4399</p>
          <h2>Location</h2>
          <address>
          Address<br>
            University Avenue, Umass Lowell.<br>
            City: Lowell MA<br>
            USA<br>
             </address>
      </div>
    </div>



</template>
<div>
<img v-bind:src='contact' <br> </div>

<script>
export default {
  data () {
    return {
      emailaddress: 'anudeep.vangapandu@gmail.com',
      contact:'../assets/images/contact.jpg'
    }
  }
}
</script>

<style lang="sass" scoped>
img{
width: 300px;
}

</style>
