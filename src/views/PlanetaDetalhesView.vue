<script>
    import PersonagemCard from '@/components/PersonagemCard.vue';

    export default {
        name: 'PlanetaDetalhesView',
        components: {PersonagemCard},
        data(){
            return {
                planeta: null
            }
        },
        mounted(){
            const id = this.$route.params.id
            fetch(`https://dragonball-api.com/api/planets/${id}`)
            .then(res => res.json())
            .then(data => {
                this.planeta = data
            });
        },
        methods:{
            viewDetails(personagem){
                console.log(personagem)
                const id = personagem.id
                console.log(id)
                this.$router.push({name: 'PersonagemDetalhes', params: {id}})
            },
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

    <body>
        <div class="container d-flex text-center flex-column">
            <b-card class="" v-if="planeta">
                <h2>
                    {{ planeta.name }}
                </h2>
                <b-img 
                    :src="planeta.image"
                    class="img-planeta d-block mx-auto"
                />
                <h3><strong>Personagens:</strong></h3>
                <b-row class="justify-content-center w-100" v-if="planeta.characters.length != 0">
                    <b-col cols="12" md="5" lg="3" v-for="personagem in planeta.characters" :key="personagem.name">
                        <PersonagemCard
                        :personagem="personagem"
                        @view-details="viewDetails"
                        style="background-color: white !important;"
                        />
                    </b-col>
                </b-row>
                <b-row v-else>
                    <b-col class="d-flex gap-2 justify-content-center mt-3">
                        <b-button variant="warning">Sem personagens conhecidos</b-button>
                    </b-col>
                </b-row>
            </b-card>
            <b-button variant="primary" class="mt-2" @click="$router.back()">
                Voltar
            </b-button>
        </div>
    </body>
</template>

<style>
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

.img-planeta {
    height: 300px;
    margin: 20px;
}
</style>