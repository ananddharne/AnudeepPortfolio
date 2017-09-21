<template>
  <div>
      <img v-bind:src='bioImage' <br> </div>

<div>
          <p> My name is Anudeep Vangapandu. I'm a Software Developer.<br>
        I build applications with modern, scalable and productive routine.<br>
            </p>
          <p>My Internships & course work gave me bright set of skills which grew sharp with time,such as <br> Communication, Adaptabilty, work-method & Team-player.
            </p>
          <p>My education has provided me with a variety of information systems knowledge and practical skills; primarily in software engineering,<br>  Java development, network design, implementation, and administration, information systems security, SQL Server and NoSQL query development, and database management (MongoDB, MySQL). <br>I also have proficient skills with website design, HTML, CSS, and JavaScript development (Angular.js, backbone.js, Node.js), as well as website administration.
<br>
            </p>
          <p> This website/App is designed in away to display my skills and thereby give breif about my frontend knowledge<br>
          </p>

  </div>
</template>

import background from "./background.vue"

<script>
export default {
  data () {
    return {
      bioImage: '../assets/images/bio.jpg', // put your picture here
      background: '../assets/images/background.jpg'
    }
  }
}
</script>


<style lang=sass scoped>


img{
width: 500px;
}






</style>
