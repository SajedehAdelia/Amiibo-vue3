<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAmiiboStore } from '../stores/amiiboStore'

const amiiboStore = useAmiiboStore()
const currentPage = ref(1) 
const pageSize = 10 
onMounted(() => {
  amiiboStore.fetchAllAmiibos()
})

const loadMoreAmiibos = () => {
  currentPage.value++
  
  amiiboStore.fetchAllAmiibos(currentPage.value * pageSize)
}
</script>

<template>
  <div id="page-wrapper">
    <section id="main">
      <div class="container">
        <article class="box post">
          <header>
            <h2>My Collection ({{ pageSize }} by {{ pageSize }})</h2>
            <p>Page {{ currentPage }}/{{ Math.ceil(amiiboStore.allAmiibos.length / pageSize) }}</p>
          </header>
          <table>
            <thead>
              <tr>
                <th>Character</th>
                <th>Game Series</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(amiibo, index) in amiiboStore.allAmiibos.slice(0, currentPage * pageSize)" :key="index">
                <td>{{ amiibo.character }}</td>
                <td>{{ amiibo.gameSeries }}</td>
                <td><router-link :to="`/detail/${index}`">see</router-link></td>
              </tr>
            </tbody>
          </table>
          <button @click="loadMoreAmiibos">Load more</button>
        </article>
      </div>
    </section>
  </div>
</template>
