<template>
  <h2>Artículo: {{ $route.params.id }}</h2>
  <h3>{{ articulo.title }}</h3>
  <p>{{ articulo.id }} - {{ articulo.body }}</p>
</template>

<script>
export default {
    data() {
        return {
            articulo: {}
        }
    },
    methods: {
        async consumirArticulo(){
            try {
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
                const objeto = await data.json();
                this.articulo = objeto;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.consumirArticulo();
    }
}
</script>

<style>

</style>