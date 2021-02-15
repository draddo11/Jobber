<template>
  <v-app>
    <v-app-bar
      app
      color="black-2"
      dark
    >
    
    <a >
      <router-link to = "/">
      <h3> Jobber</h3>
      </router-link>
      </a>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
        
      
         
          <v-spacer ></v-spacer>
      <!-- <v-divider class="horizontal"></v-divider> -->
       <!-- <span></span> -->
        <router-link to = "/">
         <v-icon
          dark
          right
        >
          mdi-checkbox-marked-circle
        </v-icon>
          <a> Register </a>
        </router-link>


          <router-link to="/">

          <v-btn
        :disabled="loading"
        class="ma- "
        color="white"
        plain
      >
      
        Login
       <!-- </router-link> -->
      </v-btn> 

        </router-link>

    </v-app-bar>
 <router-view></router-view>
    <v-main>
      <HelloWorld/>
      <Counter/>
      <SignIn/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import SignIn from './views/SignIn'
export default {
  name: 'App',

  components: {
    HelloWorld,
    Counter,
    SignIn,
  },

  data:() => ({
    //
    methods:{
     disabled: true
    }
  }),
};
</script>
