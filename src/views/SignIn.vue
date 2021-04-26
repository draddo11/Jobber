

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
      Sign In to manage your current Job board
    </p>
    <!-- <p class="caption font-weight-medium">
      By continuing, you agree to our Terms of Use and Privacy Policy
    </p> -->
 
</v-col>
   <v-card
    class="mx-auto"
    max-width="344"
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
            label="E-mail"
            solo 
            placeholder="Email"
            dense
             v-model="email"
              :rules="emailRules"
              required
          ></v-text-field>

            <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            label=" Password "
            solo 
            placeholder="Password"
            dense
            v-model="password"
            :rules="passwordrules"
            required
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
          ></v-text-field>
<!--          
          <aside class="text-caption">By selecting Agree and continue below,
             I agree to Jobber’s Terms of Service, Payments Terms of Service, 
             Privacy Policy, and Nondiscrimination Policy </aside> -->
         
        <br />
        <v-col class="text-center" cols="12" sm="12" >

          <v-btn @click="signIn()" type="submit" block  color="error"> Log In  </v-btn>
          <br />
          <p class=" grey-2 red--text text--darken-3">{{error.message}}</p>

               
        <aside class="text-caption" > 
           Don't have an account?
          Either you are a company or a developer, what are you waiting for?</aside>
<router-link to="signup">
                <br>
          <v-btn  block  color="primary" >Sign In </v-btn>
               </router-link>
               <br>

            </v-col>
           <!-- <br />
           <span class="text-center" cols="12" sm="12">  or </span>
<GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin> -->
        </v-col>
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
        show: true,
      
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
      password: '',
      passwordrules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password must be more than 6 characters"
      ],
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