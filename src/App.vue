<template>
  <v-app>
   
    <v-app-bar
      app
      color="black"
      collapse-on-scroll
      
       dark
      
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
 
    
    <a>
      <router-link to = "/home">
      <h3 class="text-center"> Jobber</h3>
      </router-link>
      </a>
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="require('../assets/character 16.svg')"
          transition="scale-transition"
          width="40"
        />
        
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="require('../assets/character 16.svg')"
          width="100"
        /> -->
      <!-- </div> -->
        
      
         
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

     <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      color="black"
    >
    <v-list
        nav
        dense
      >
      <v-list-item-group
          v-model="group"
          active-class="black"
        >
        <v-list-item>
          <router-link to = "/signup">
         <v-icon
          dark
          right
        >
          mdi-account-plus
        </v-icon>
           SignUp
        </router-link>
          </v-list-item>
        <v-list-item>
           <router-link to="/signin">
        <v-icon
          dark
          right
        >
          mdi-account
        </v-icon> 
          
         Login 

        </router-link>
         </v-list-item>
         <v-list-item>
         <v-btn  @click="signOut" > Sign out  </v-btn>
          <v-icon
          dark
          right
        >
          mdi-exit-to-app
        </v-icon> 
         </v-list-item>
        </v-list-item-group>
      </v-list>
      </v-navigation-drawer>
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
    color:brown;
}
</style>

<script>
import {firebaseApp} from './firebaseApp';


export default {
  name: 'App',

  components: {
    // Home,
    // Counter,
    // SignIn,
    // Register,
  },

  data:() => ({
    disabled: true,
     loading:true,
      drawer: false,
      group: null,
    methods:{
      signOut(){
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      },
     
    
    },
     watch: {
      group () {
        this.drawer = false
      },
    },
  }),
};
</script>
