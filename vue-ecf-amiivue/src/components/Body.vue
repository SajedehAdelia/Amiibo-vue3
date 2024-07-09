<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAmiiboStore } from '../stores/amiiboStore'

const amiiboStore = useAmiiboStore()
const randomAmiibos = ref([])

const getRandomAmiibos = () => {
  const shuffled = amiiboStore.allAmiibos.sort(() => 0.5 - Math.random())
  randomAmiibos.value = shuffled.slice(0, 3)
}

onMounted(() => {
  if (amiiboStore.allAmiibos.length === 0) {
    amiiboStore.fetchAllAmiibos().then(() => {
      getRandomAmiibos()
    })
  } else {
    getRandomAmiibos()
  }
})
</script>

<template>
  <div id="page-wrapper">
    <section id="intro" class="container">
      <div class="row">
        <div class="col-4 col-12-medium" v-for="amiibo in randomAmiibos" :key="amiibo.tail">
          <section class="middle">
            <img :src="amiibo.image" alt="amiibo character image" />
            <header>
              <h2>{{ amiibo.character }}</h2>
            </header>
            <p>{{ amiibo.gameSeries }}</p>
          </section>
        </div>
      </div>
      <footer>
        <ul class="actions">
          <li>
            <router-link to="/liste" class="button large">Complete List</router-link>
          </li>
        </ul>
      </footer>
    </section>
  </div>
</template>

