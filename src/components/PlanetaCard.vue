<script>
    export default {
        name: 'PlanetaCard',
        props: {
            planeta: Object
        }, 
        methods: {
            getImageUrl(){
                const id = this.planeta
                return this.planeta.image
            },
            verDetalhes(){
                this.$emit('view-details', this.planeta)
            }
        }
    }
</script>

<template>
    <b-card class="mb-3 text-center align-items-center" :title="this.planeta.name">
        <b-img
            :src="getImageUrl()"
            style="height: 130px;"
            class="mx-auto d-block mb-3"
            />
            <b-button variant="primary" @click="verDetalhes()">
                Ver Detalhes
            </b-button>
    </b-card>
</template>

<style>
    .card{
        box-shadow: 2px 2px 2px black;
    }

    .card img:hover{
        transform: scale(1.10)
    }
</style>