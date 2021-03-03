<template>
  <v-app>
    <v-app-bar
      app
      color="black-2"
      dark
      dense
    >
    
    <a >
      <router-link to = "/home">
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
        <router-link to = "/register">
         <v-icon
          dark
          right
        >
          mdi-checkbox-marked-circle
        </v-icon>
          <a> Register </a>
        </router-link>


          <router-link to="/signin">

          <v-btn
       
        class="ma- "
        color="white"
        plain
      >
      
        Login
      
      </v-btn> 

        </router-link>

    </v-app-bar>
 <router-view></router-view>
    <v-main>
       <div class="d-flex align-center">
      <!-- <Home/> -->
       </div>
    </v-main>
  </v-app>
</template>

<style scoped>
 a {
    text-decoration: none;
}
</style>

<script>
// import Home from './containers/Home';
// import Counter from './components/Counter';
// import SignIn from './views/SignIn';
// import Register from './views/Register';

export default {
  name: 'App',

  components: {
    // Home,
    // Counter,
    // SignIn,
    // Register,
  },

  data:() => ({
    //
    methods:{
     disabled: true,
     loading:true
    }
  }),
};
</script>
