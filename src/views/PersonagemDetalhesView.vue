<script>
    export default {
        name: 'PersonagemDetalhesView',
        data(){
            return {
                personagem: null,
                imagemAtual: ''
            }
        },
        mounted(){
            const id = this.$route.params.id
            fetch(`https://dragonball-api.com/api/characters/${id}`)
            .then(res => res.json())
            .then(data => {
                this.personagem = data
                this.imagemAtual = data.image
            });
        },
        methods: {
            mudarImagem(transformacao){
                this.imagemAtual = transformacao.image
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
            <a href="planets">
            <img src="../assets/[CITYPNG.COM]Dragon Ball Z DBZ Crystal Ball 2 Stars PNG - 2000x2000.png" alt="Ícone" />
            <span>Planets</span>
            </a>
        </nav>
    </header>

    <body>
        <div class="container d-flex text-center flex-column">
            <b-card class="" v-if="personagem">
                <h3>
                    {{ personagem.name }}
                </h3>
                <b-img 
                    v-if="imagemAtual"
                    :src="imagemAtual"
                    class="img-personagem d-block mx-auto"
                />
                <p><strong>Ki: </strong>{{ personagem.ki }}</p>
                <p><strong>Raça: </strong>{{ personagem.race }}</p>
                <p><strong>Planeta de origem: </strong>{{ personagem.originPlanet.name }}</p>
                <p><strong>Transformações:</strong>
                    <b-row v-if="personagem.transformations.length != 0">
                        <b-col class="d-flex gap-2 justify-content-center mt-3">
                            <b-button variant="warning" @click="mudarImagem(personagem)">Original</b-button>
                            <b-button class="" variant="warning" v-for="transformacao in personagem.transformations" @click="mudarImagem(transformacao)">{{ transformacao.name }}</b-button>
                        </b-col>
                    </b-row>
                    <b-row v-else>
                        <b-col class="d-flex gap-2 justify-content-center mt-3">
                            <b-button class="" variant="warning">Não tem transformação</b-button>
                        </b-col>
                    </b-row>
                </p>
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

.img-personagem {
    height: 300px;
    margin: 20px;
}
</style>