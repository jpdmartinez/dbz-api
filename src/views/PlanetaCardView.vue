<script>
    import PlanetaCard from '../components/PlanetaCard.vue';

    export default {
        name: 'PlanetaListView',
        components: {
            PlanetaCard
        }, data() {
            return {
                limit: 12,
                planetas: [],
                total: 0,
                currentPage: 1
            }
        },
        watch: {
            currentPage(newCurrentPage){
                this.currentPage = newCurrentPage
                this.fetchPlaneta()
            }
        },
        mounted(){
            this.fetchPlaneta()
        },
        methods: {
            fetchPlaneta(){
                const url = `https://dragonball-api.com/api/planets?page=${this.currentPage}&limit=${this.limit}`
                fetch(url).then(res => res.json()).then(data => {
                    this.planetas = data.items
                    this.total = data.meta.totalItems
                    console.log(this.planeta)
                })
            }
        }
    }
</script>

<template>
    <header class="header">
        <a href="/"><img src="/src/assets/pngwing.com (1).png" alt="Logo Dragon Ball Super" class="logo"></a>

        <nav class="nav">
            <a href="/">
            <img src="../assets/[CITYPNG.COM]Dragon Ball Z DBZ Crystal Ball 2 Stars PNG - 2000x2000.png" alt="Ícone" />
            <span>Home</span>
            </a>
            <a href="/characters">
            <img src="../assets/[CITYPNG.COM]Dragon Ball Z DBZ Crystal Ball 2 Stars PNG - 2000x2000.png" alt="Ícone" />
            <span>Characters</span>
            </a>
            <a href="/planets">
            <img src="../assets/[CITYPNG.COM]Dragon Ball Z DBZ Crystal Ball 2 Stars PNG - 2000x2000.png" alt="Ícone" />
            <span>Planets</span>
            </a>
        </nav>
    </header>

    <div class="container d-flex flex-column align-items-center">
        <h1 class="mb-3">Planets</h1>
        <b-row class="justify-content-center w-100">
            <b-col cols="12" md="4" lg="3" v-for="planeta in planetas" :key="planeta.name">
                <PlanetaCard
                :planeta = "planeta"/>
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