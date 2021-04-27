<template>
  <v-app>
   
    <v-app-bar
      app
      color="white"
      absolute 
      flat
      
    >
    
    
    <a >
      <router-link to = "/home">
      <h3 class="text-center"> Jobber</h3>
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
        <router-link to = "/signup">
         <v-icon
          dark
          right
        >
          mdi-account-plus
        </v-icon>
           SignUp
        </router-link>

  <!-- <v-btn @click="signOut()"  color="red-4">Sign out </v-btn> -->
  
          <router-link to="/signin">
        <v-icon
          dark
          right
        >
          mdi-account
        </v-icon>
          
        Login
      
      

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
// import {firebaseApp} from './firebaseApp';


export default {
  name: 'App',

  components: {
    // Home,
    // Counter,
    // SignIn,
    // Register,
  },

  data:() => ({
    methods:{
      // signOut(){
      //   this.$store.dispatch('signOut')
      //   firebaseApp.auth().signOut()
      // },
     disabled: true,
     loading:true,
     
    
    }
  }),
};
</script>
