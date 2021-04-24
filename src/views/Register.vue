
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

  
  
  <!-- <h1>Signup with us to post and apply for Jobs </h1> -->
  
    <br />
    <p class="headline font-weight-black">
      Sign Up to manage your current Job board
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
        <!-- <v-text-field
          label="First name"
            solo 
            placeholder="FirstName"
            dense
             v-model="firstname"
              :rules="nameRules"
              :counter="10"
              required
          ></v-text-field>

             <v-text-field
           label="Last name"
            single-line
            solo
            placeholder="LastName"
            v-model="lastname"
              :rules="nameRules"
              :counter="10"
              required
          ></v-text-field> -->
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
         
          <aside class="text-caption">By selecting Agree and continue below,
             I agree to Jobber’s Terms of Service, Payments Terms of Service, 
             Privacy Policy, and Nondiscrimination Policy </aside>
         
            <br />
            <v-col class="text-center" cols="12" sm="12" 
         >
          <v-btn type="submit" block  color="error" @click= "register">Agree and continue </v-btn>
             <br/>
            
                    or
             
            
              <br>
                <router-link to="/signin">
                <br>
          <v-btn  block  color="primary" >Sign In </v-btn>
               </router-link>
               <br>
             </v-col>
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

// import {firebaseApp} from '../firebase'
// import 'firebase/firebase-auth'

export default {
  components: {},
   data: () => ({
    name: 'Register',
    valid: false,
    show: true,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
      password: '',
      passwordrules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password must be more than 6 characters"
      ]
  }),
  methods:{
    register(){

    }
  }
  
}
</script>
 
<style>

</style>