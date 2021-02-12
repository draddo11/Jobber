<template>
  <v-app>
    <v-app-bar
      app
      color="black-2"
      dark
    >
    
    <a >
      <h3> Jobber</h3></a>
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
          <a> Register </a>

          <v-btn
        :disabled="loading"
        class="ma- "
        color="white"
        
        plain
      >
        Login
      </v-btn>

     
    </v-app-bar>

    <v-main>
      <HelloWorld/>
      <Counter/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
export default {
  name: 'App',

  components: {
    HelloWorld,
    Counter
  },

  data: () => ({
    //
  }),
};
</script>
