

<template>
<div class="px-4 mx-auto">
<!-- <v-spacer></v-spacer> -->
<v-col
          cols="12"
          sm="12"
          md="12"
        >
  <br />
 <br />

  
  
  <!--  -->
  
    <br />
    <p class="headline font-weight-black">
      Post a job
    </p>
    <!-- <p class="caption font-weight-medium">
      By continuing, you agree to our Terms of Use and Privacy Policy
    </p> -->
 
</v-col>
   <v-card
    class="mx-auto"
    max-width="450"
    width='500'
    outlined
  >
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="12"
        >
        
          <v-text-field
            label=" company name"
            solo 
            placeholder="company name"
            dense
             
          ></v-text-field>

            <v-text-field
        
            label=" job title "
            solo 
            placeholder="Job title : Software Engineer"
            
          ></v-text-field>
         
          
          <v-form
        
            label=" job description "
            solo 
            placeholder="Job title : Software Engineer"
            
          >  
          </v-form>

         

               
       
<router-link to="home">
                <br>
          <v-btn  block  color="red" >Post Job </v-btn>
               </router-link>
               <br>

            </v-col>
        
         
        <!-- </v-col> -->
      </v-row>
    </v-container>
  </v-form>
   </v-card>
   
        </div>
</template>
<style scoped>
a {
    text-decoration: none;
}
</style>
<script>

  import {firebaseApp} from '../firebaseApp';
  import 'firebase/auth';
  // import {mapActions} from 'vuex'

export default {
  components: {
     
  },

   data: () => ({
    name: 'Register',
    valid: false,
        show: false,
      
   
     
      error:{
        message:''
      }
  }),
  methods:{
    signIn(){
      firebaseApp.auth().signInWithEmailAndPassword(this.email , this.password)
      .catch(error => {
        this.error = error 
      })
    }
  }
  
}
</script>

<style>

</style>