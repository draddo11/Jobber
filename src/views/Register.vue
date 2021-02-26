
<template>
<div class="px-4 mx-auto">
<!-- <v-spacer></v-spacer> -->
<v-col
          cols="12"
          sm="12"
          md="12"
        >
  
  
  <h1>Register Component </h1>
  <h1>Register Component </h1>
  <h1>Signup with us to post and apply for Jobs </h1>
  >
    <br />
    <p class="headline font-weight-black">
      Sign In to manage your current Job boards.
    </p>
    <p class="caption font-weight-medium">
      By continuing, you agree to our Terms of Use and Privacy Policy
    </p>
 
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
          ></v-text-field>
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
            label="Password"
            solo 
            placeholder="Password"
            dense
            v-model="password"
            :rules="passwordrules"
            required
          ></v-text-field>
          <!-- <v-divider> -->
          <aside class="text-caption">By selecting Agree and continue below,
             I agree to Airbnb’s Terms of Service, Payments Terms of Service, 
             Privacy Policy, and Nondiscrimination Policy </aside>
          <!-- </v-divider> -->

          <v-btn  color="error">Agree and continue </v-btn>

          <v-divider class= "vertical">or</v-divider>

        </v-col>
      </v-row>
    </v-container>
  </v-form>
   </v-card>
   
        </div>
</template>
<style scoped>
#agree{
  font-size: 13;
}
</style>
<script>
export default {
  components: {},
   data: () => ({
    name: 'Register',
    valid: false,
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
      password: " ",
      passwordrules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Name must be more than 6 characters"
      ]
  })
  
}
</script>

<style>

</style>