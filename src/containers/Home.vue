<template>
  <v-container>
  
    <v-row class="text-center">
      
      <v-col >
       <br>
       <br>
<h1>Welcome to Jobber </h1>
<br>
<v-btn @click="signOut"  color="blue"> Sign out  </v-btn>
 {{$store.state}}

 <!-- <v-btn @click="getJobs"  color="error"> Add Python JOBS  </v-btn> -->
 {{$store.state.job}}
 <!-- <v-img
          contain 
          :lazy-src="require('../assets/character 16.svg')"
          max-height="550"
          max-width="200"
          position = right
         
          :src="require('../assets/character 16.svg')"
/> -->
      </v-col>
     
<br>
<hr>
<br>
<br>
<br>


 hello there
Lorem ipsum dolor sit, amet consectetur adipisicing elit.

<router-link to='/post'>
<v-btn elevation="7"  color="orange"> Post A job  </v-btn>
</router-link> Vel nobis eligendi nisi, odit quod saepe eveniet nulla? Quos sit aliquid vero quam, labore excepturi facilis ullam, ut, soluta expedita voluptas accusamus! Fuga minus vitae eveniet illum voluptas, molestias tempore, accusamus sint maiores, minima laudantium delectus ipsam eius magni optio vero laborum! Iure explicabo iusto similique, fuga nemo ad dolor fugiat neque, facere praesentium vitae modi atque quas est ipsa, laudantium labore assumenda voluptatem sunt eveniet eius! Ipsum quaerat corporis dolorem atque voluptates ullam magni rerum provident, enim corrupti iusto iste tempore dolor sit quos totam voluptatem modi nam ducimus. Consectetur, ipsam blanditiis veritatis id harum culpa ad est quia non a aspernatur, exercitationem corrupti. Sequi, ipsa! Quibusdam deleniti, sed placeat, cum voluptate quidem sit totam doloribus quae sunt magnam! Blanditiis cupiditate ipsum aperiam reiciendis quis nulla, necessitatibus adipisci atque! Modi blanditiis porro dignissimos tempore eaque doloribus reprehenderit mollitia aliquam voluptatibus natus nesciunt, fugit eum? Nihil distinctio similique labore accusantium beatae et perspiciatis minus animi est voluptatibus aspernatur hic, ea saepe reiciendis possimus iste. Id qui tempora, totam repellendus eligendi optio at dolores vel! Libero, vel? Alias voluptatum ab sed dolor doloribus molestiae facilis quae molestias perferendis, praesentium veritatis. Mollitia minima tempora incidunt et doloribus obcaecati aut deserunt aspernatur assumenda repudiandae, praesentium recusandae voluptates ratione dignissimos id commodi quia reiciendis itaque, architecto at suscipit. Nihil repellat maxime ratione natus vitae perspiciatis, aliquam quo doloribus officia aspernatur nulla saepe, autem illum dolor illo animi quis, nobis soluta omnis alias delectus eaque est! Consequatur quam est modi soluta eius aliquid temporibus possimus qui alias fugiat corporis, voluptas porro nam delectus perferendis voluptate amet culpa nobis esse. Ullam dolorum cupiditate aspernatur magnam, neque ipsa nam excepturi omnis reiciendis non quo a ducimus voluptates. Neque sed atque, fugit, sint ab blanditiis ipsam saepe inventore natus maxime rem. Expedita modi itaque repellat nam repellendus nostrum, placeat dignissimos iste distinctio ex fugit blanditiis libero molestias minima corrupti perspiciatis dolore omnis deleniti iure dolor cumque! Maxime libero obcaecati vel officiis commodi nobis veniam suscipit minus, aliquam quibusdam itaque fuga, cum odit nisi, perferendis temporibus asperiores sapiente! Dolor, pariatur numquam, quos provident iure fuga a molestiae incidunt neque sed enim totam aperiam temporibus impedit dolores tenetur aliquid assumenda vel veritatis quae consectetur cumque repellat possimus. Quidem iste incidunt asperiores quo, earum tempora cumque nam, animi saepe in mollitia nostrum. Ipsam, aut quam similique culpa illum blanditiis sapiente iure tempora.
<!-- <v-btn @click="signOut"  color="red-2">Sign out </v-btn> -->
      <!-- <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a> -->
        <!-- </v-row>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<style scoped>
 a {
    text-decoration: none;
}
</style>

<script>
import {firebaseApp} from '../firebaseApp'
import 'firebase/auth'
// import {mapActions} from 'vuex'
// import App from '../App'

  export default {
    components:{
    //  App
},
    name: 'Home',

    data: () => ({
      // ecosystem: [
      //   {
      //     text: 'vuetify-loader',
      //     href: 'https://github.com/vuetifyjs/vuetify-loader',
      //   },
      //   {
      //     text: 'github',
      //     href: 'https://github.com/vuetifyjs/vuetify',
      //   },
      //   {
      //     text: 'awesome-vuetify',
      //     href: 'https://github.com/vuetifyjs/awesome-vuetify',
      //   },
      // ],
      // importantLinks: [
      //   {
      //     text: 'Documentation',
      //     href: 'https://vuetifyjs.com',
      //   },
      //   {
      //     text: 'Chat',
      //     href: 'https://community.vuetifyjs.com',
      //   },
      //   {
      //     text: 'Made with Vuetify',
      //     href: 'https://madewithvuejs.com/vuetify',
      //   },
      //   {
      //     text: 'Twitter',
      //     href: 'https://twitter.com/vuetifyjs',
      //   },
      //   {
      //     text: 'Articles',
      //     href: 'https://medium.com/vuetify',
      //   },
      // ],
      // whatsNext: [
      //   {
      //     text: 'Explore components',
      //     href: 'https://vuetifyjs.com/components/api-explorer',
      //   },
      //   {
      //     text: 'Select a layout',
      //     href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
      //   },
      //   {
      //     text: 'Frequently Asked Questions',
      //     href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      //   },
      // ],
    }),
    methods:{
      signOut(){
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      },
      // mapActions(
      //   'getJobs'
      //  )
    }
  }
</script>
