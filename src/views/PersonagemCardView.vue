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
    <header class="header">
        <img src="/src/assets/pngwing.com (1).png" alt="Logo Dragon Ball Super" class="logo">

        <nav class="nav">
            <a href="http://localhost:5173">
            <img src="../assets/[CITYPNG.COM]Dragon Ball Z DBZ Crystal Ball 2 Stars PNG - 2000x2000.png" alt="Ícone" />
            <span>Home</span>
            </a>
            <a href="http://localhost:5173/characters">
            <img src="../assets/[CITYPNG.COM]Dragon Ball Z DBZ Crystal Ball 2 Stars PNG - 2000x2000.png" alt="Ícone" />
            <span>Characters</span>
            </a>
            <a href="#">
            <img src="../assets/[CITYPNG.COM]Dragon Ball Z DBZ Crystal Ball 2 Stars PNG - 2000x2000.png" alt="Ícone" />
            <span>Planets</span>
            </a>
        </nav>
    </header>

    <div class="container d-flex flex-column align-items-center">
        <h1 class="mb-3">Characters</h1>
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
    body{
        background-color: rgb(245, 245, 229) !important;
    }

    .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #f7f7f7;
}

.logo {
  height: 80px;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s;
}

.nav a img {
  height: 30px;
  margin-right: 8px;
}

.nav a:hover {
  color: #e67e22;
}

</style>