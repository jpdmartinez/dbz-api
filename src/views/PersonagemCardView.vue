<script>
    import PersonagemCard from '@/components/PersonagemCard.vue';

    export default {
        name: 'PersonagemListView',
        components: {
            PersonagemCard
        }, data() {
            return {
                limit: 12,
                personagens: [],
                total: 0,
                currentPage: 1
            }
        },
        watch: {
            currentPage(newCurrentPage){
                this.currentPage = newCurrentPage
                this.fetchPersonagem()
            }
        },
        mounted(){
            this.fetchPersonagem()
        },
        methods: {
            fetchPersonagem(){
                const url = `https://dragonball-api.com/api/characters?page=${this.currentPage}&limit=${this.limit}`
                fetch(url).then(res => res.json()).then(data => {
                    this.personagens = data.items
                    this.total = data.meta.totalItems
                    console.log(this.personagens)
                })
            }
        }
    }
</script>

<template>
    <div class="container d-flex flex-column align-items-center">
        <b-row class="justify-content-center w-100">
            <b-col cols="12" md="4" lg="3" v-for="personagem in personagens" :key="personagem.name">
                <PersonagemCard
                :personagem = "personagem"/>
            </b-col>
            
        </b-row>
        <b-pagination 
           v-model="currentPage"
           :total-rows="total"
           :perPage="limit"
           align="center"
           />
    </div>
</template>

<style>

</style>