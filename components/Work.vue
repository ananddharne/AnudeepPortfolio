<template>
<div <title><h1> Work Experience </h1> </title>

        <h2> Web Developer  May 2016-June 2017 </h2>
        <h3> Indian Student Association, University of Massachusetts Lowell  </h3>
        <p>
        1)Have developed and maintained the website for the club, ISA as mentioned as part of student activity. <br>
        2)Roles starting from updates, alerts, invitations, photography of events and further hosting them on the website creating easy way for students of community to access all inputs at common platform<br>
        3)Website was build using jquery, and well hosted for an year. <br>
        website: isaumasslowell.com
        </p>


        </div>
        <div>

                <h2> Intership-1 May 2014-Aug 2014 </h2>
                <h3> Network Engineer- Intern </h3>
                <p>
                1)Trained under Computer Science department, entities of focus are web development, APIs, frameworks & Object-oriented approach. <br>
                2)Roles starting from OS Installing(Any), Shell scripting, HTML, CSS, Java script (jquery, Angular), <br>Packing Managing (Bower, component), version control(Git), Testing (Selenium). <br>
                3)As a part of web development team maintained and developed many company websites and blogs. <br>
                </p>

                <img v-bind:src='intern'
                </div>
                <div>


                <h2> Intership-2 Dec 2014-Aug 2015</h2>
                <h3> Software Engineer- Intern </h3>
                <p>
                1)Hands-on experience covering roles such as configuring router, working on IP tablets, TCP/IP, configuring LAN port, <br>creating network tests, detail functioning analysis of functioning  Main Distribution frame ( MDF) & Main switching center (MSC).<br>

                2)Detail study of various add-on apps provided by BSNL, Broadband services, wireless service, ISDN, wi-max & GSM. <br>
                 </p>
        </div>
</template>

<script>
export default {
  data () {
    return {
    intern: '../assets/images/intern.jpg'

    };
  },
}
</script>

<style lang="sass" scoped>
.p {
    font-family: "Times New Roman", Times, serif;
    font-size: 14px;
    text-align: center;
}

h1 {
    font-size: 40px;
    text-align: left;
}

h2 {
    font-size: 30px;
    text-align: left;
}



</style>
