
<template>
<div class="px-4 mx-auto">
<!-- <v-spacer></v-spacer> -->
<v-col
          cols="12"
          sm="12"
          md="12"
        >
  <h1
   
        >Register Component </h1>
  <h1>Register Component </h1>
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
          <v-btn  color="error">Register</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
   </v-card>
   
        </div>
</template>

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
    ]
  })
  
}
</script>

<style>

</style>