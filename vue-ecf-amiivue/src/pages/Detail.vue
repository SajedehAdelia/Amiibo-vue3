<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAmiiboStore } from '../stores/amiiboStore'
import { i } from 'vite/dist/node/types.d-aGj9QkWt';
import { useRoute } from 'vue-router';
const {params} = useRoute()

const amiiboStore = useAmiiboStore()
const randomAmiibos = ref([])

onMounted(async () => {
  if (amiiboStore.allAmiibos.length === 0) {
    await amiiboStore.fetchAllAmiibos()
  }

  amiiboStore.fetchAmiiboById(params.id)
})
</script>

<template>
    <div id="page-wrapper">
      <section id="main">
        <div class="container">
          <article class="box post">
            <header>
              <h2>Amiibo Details</h2>
            </header>
            <div v-if="amiiboStore.singleAmiibo">
              <section class="box">
                <header>
                  <h3>Infos</h3>
                </header>
                <p>
                  amiiboSeries: <b>{{ amiiboStore.singleAmiibo.amiiboSeries }}</b><br />
                  character: {{ amiiboStore.singleAmiibo.character }}<br />
                  gameSeries: {{ amiiboStore.singleAmiibo.gameSeries }}<br />
                  type: {{ amiiboStore.singleAmiibo.type }}
                </p>
              </section>
              <section class="box" v-if="amiiboStore.singleAmiibo.release">
                <header>
                  <h3>Release Dates</h3>
                </header>
                <ul class="divided">
                  <li v-for="(date, region) in amiiboStore.singleAmiibo.release" :key="region">
                    {{ region }}: {{ date }}
                  </li>
                </ul>
              </section>
              <section class="box post">
                <a href="#" class="featured">
                  <img :src="amiiboStore.singleAmiibo.image" alt="amiibo character image" />
                </a>
                <header>
                  <h2>{{ amiiboStore.singleAmiibo.name }}</h2>
                  <p>{{ amiiboStore.singleAmiibo.type }}</p>
                </header>
              </section>
            </div>
            <div v-else>
              <p>Loading...</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  </template>
  