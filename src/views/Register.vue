
<template>
<div class="mx-auto">
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
  <h1>Register Component </h1>
 
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