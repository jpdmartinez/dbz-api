<script>
import PersonagemCard from '@/components/PersonagemCard.vue'

    export default {
        name: "HomeView",
        components: {
            PersonagemCard
        },
        data(){
            return {
                nome: null,
                personagens: []
            }
        },
        mounted() {
            this.searchCharacters()
        },
        methods: {
            async searchCharacters(){
                const url = `https://dragonball-api.com/api/characters?name=${this.nome}`
                fetch(url).then(res => res.json()).then(data => {
                    this.personagens = data
                    console.log(this.personagens)
                })
            }
        }, 
    }
</script>

<template>
    <b-container class="d-flex flex-column align-items-center">
        <img src="/src/assets/pngwing.com (1).png" alt="Logo Dragon Ball Super" id="logo">

        <div class="menu">
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
        </div>

        <b-form class="d-flex gap-3 flex-wrap justify-content-center">
            <b-form-input v-model="nome" placeholder="Buscar personagem..." class="mr-2"/>
            <b-button variant="primary" @click="searchCharacters(nome)">Buscar</b-button>
        </b-form>

    </b-container>
    <b-row class="justify-content-center w-100">
        <b-col cols="4" md="4" lg="3" v-for="personagem in personagens" :key="personagem.name">
            <PersonagemCard
            :personagem = "personagem"
            style="margin-top: 20px;
            width: 250px;"/>
        </b-col>
        
    </b-row>
</template>

<style>

#logo{
    max-width: 60vh;
}

.menu{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 20px;
    background-color: #f7f7f7;
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