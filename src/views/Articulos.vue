<template>
  <h2> Los artículos disponibles actualmente son:</h2>

  <div v-for="articulo in articulos" :key="articulo.id">
      <router-link :to="`/articulos/${articulo.id}`">
        {{ articulo.title }}
      </router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            articulos: []
        }
    },
    methods: {
        async pedirArticulos(){
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts');
                const array = await data.json();
                this.articulos = array;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.pedirArticulos();
    }
}
</script>

<style>

</style>