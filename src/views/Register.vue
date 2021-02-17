
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
            label="FirstName"
            solo 
            placeholder="FirstName"
            dense
          ></v-text-field>

             <v-text-field
            label="LastName"
            single-line
            solo
            placeholder="LastName"
          ></v-text-field>
          <v-text-field
            label="Email"
            solo 
            placeholder="Email"
            dense
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
   </v-card>
   
        </div>
</template>

<script>
export default {
  components: {
  
   
  },
  name: 'Register',
}
</script>

<style>

</style>