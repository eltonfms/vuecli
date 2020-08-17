<template>
<div>
  <h1>Cards</h1>
  <section>
    <Card
      :card="card"
      :key="card.id"
      :title="key"
      v-for="(card, key) in cards"
    ></Card>
  </section>
</div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'Cards',

  components: {
    Card
  },

  data () { // estado deste componente, é o conjunto de dados que ele possui no momento de sua criação
    // retorna o estado local do componente
    return {
      cards: [
        {
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit asperiores magnam placeat quis rerum architecto.',
          id: '1',
          likes: 0,
          title: 'Card Um'
        },
        {
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit asperiores magnam placeat quis rerum architecto.',
          id: '2',
          likes: 0,
          title: 'Card Dois'
        },
        {
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit asperiores magnam placeat quis rerum architecto.',
          id: '3',
          likes: 0,
          title: 'Card Três'
        }
      ]
    }
  }
}
</script>