<template>
<div>
<h2>This is a counter</h2>
<v-btn x-large @Click="increment">+</v-btn>
<v-btn x-large @Click="decrement">-</v-btn>
</div>
   
</template>

 <script>
 


        export default {
    name: 'Counter',

    data: () => ({
        computed: {
    count () {
	return this.$store.state.count
    },
     methods: {
          increment() {
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  },
    decrement() {
    this.$store.commit('decrement')
    console.log(this.$store.state.count)
  }

     }
        }
             })
        }
 </script>