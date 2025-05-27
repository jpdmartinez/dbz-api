<script>
    export default {
        name: 'PersonagemCard',
        props: {
            personagem: Object
        }, 
        methods: {
            getImageUrl(){
                const id = this.personagem
                return this.personagem.image
            }
        }
    }
</script>

<template>
    <b-card class="mb-3 text-center align-items-center" :title="this.personagem.name">
        <b-img
            :src="getImageUrl()"
            style="height: 100px;"
            class="mx-auto d-block mb-3"
            />
            <b-button variant="primary">
                Ver Detalhes
            </b-button>
    </b-card>
</template>

<style>

</style>