<template>
<article class="card">
    <h3 class="card__title">{{ card.title }} &hearts;{{ card.likes }}</h3>
    <p class="card__description">{{ card.description }}</p>
    <button
      @click="like"
      class="card__like"
      ref="button"
      type="button"
    >
      <span>&plus;</span>
    </button>
</article>
</template>

<script>
export default {
  // lifecicle hooks dos componentes é gerenciado pela view
  name: 'Card',

  props: { // propriedades especiais que levam dados para dentro dos componentes
    // trafega dados do pai para o filho
    // props enquanto objeto é passado por referência. Ou seja, de fato ele altera o array de cards
    card: {
      required: true,
      type: Object
    }
  },

  // lifecicle hook 
  created () {
    // é iniciado antes de ser renderizado (em memória)
  },

  mounted () {
    // é iniciado assim que o DOM for montado (no browser)
    console.log(this.$refs.button)
    // não é indicado fazer referência à janela global
    // para server side rendering esse objeto não existe
    console.log(window.location)
    // recebendo o location vindo do data da vue
    console.log(this.$root.location.host)
  },

  methods: {
    like () { // é indicado não fazer mutação de props, como no caso abaixo, elas devem ser imutáveis.
      ++this.card.likes
    }
  }
}
</script>