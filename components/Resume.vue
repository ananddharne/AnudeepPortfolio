
 // If you don't need this page, remove it from Navigation.vue, main.js (the require and the router), and App.vue. If you miss somewhere it will show up as an error.

 <template>
  <div>
    <div class="border">

    </div>
  <section>
          <h2>Projects</h2>
        <div class="show-section" v-for="Project in Projects">
          <p>{{Project.date}}</p>
          <p>{{Project.name}}</p>
          <p>{{Project.link}}</h3>
        </div>

        <div>
        <img v-bind:src='proImage'</div><br>




          <h2>Repositories</h2>
        <div class="show-section" v-for="Repo in Repositories">
          <p >{{Repo.date}}</p>
          <p>{{Repo.name}}</p>
        </div>
        <div>
        <img v-bind:src='repoImage'</div><br>
  </section>
  </div>
  </template>


<script>
export default {
  data () {
    return {
        Projects: [
            //Add your Projects here
            {date: '1-1-2016',name: 'Project IOT', link: 'n/a' },
            {date: '1-2-2016',name: 'Project Network Design', link: 'https://github.com/Anudeep1993'},
            {date: '1-3-2016',name: 'Project Network Security', link: 'https://github.com/Anudeep1993/Network-Security'},
            {date: '1-4-2016',name: 'Project Portfolio(Angular, Node JS)', link: 'https://github.com/Anudeep1993/Anudeep1993.github.io'},
            {date: '1-5-2016',name: 'Project Web Portfolio(Vue, Node JS)', link: 'https://github.com/Anudeep1993/VuePort'}
        ],
        Repositories: [
            //Add your Repo Projects here
            {date: '1-1-2016',name: 'repository ND'},
            {date: '1-2-2016',name: 'repository Port'},
            {date: '1-3-2016',name: 'repository Port 2.0'},
            {date: '1-4-2016',name: 'repository VuePort'},
            {date: '1-5-2016',name: 'repository Binbaat'}
        ],
        repoImage: '../assets/images/repo.jpg', position:'center', width:'600px',
        proImage: '../assets/images/pro.jpg', position:'center', width:'600px'
        };

  },
}
</script>

<style lang="sass" scoped>

section {
  display: flex;
  flex-wrap: wrap;
}
div {
  width: 100%;
}
.show-section {
  display: flex;
}
p:first-child {
  margin-right: .5em;
}

.p{
text-align:center;
}

.h3{
text-align: right;
}


</style>
