<script setup>
import { onMounted } from 'vue'
import { useAmiiboStore } from './stores/amiiboStore'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const amiiboStore = useAmiiboStore()

onMounted(() => {
  amiiboStore.fetchAllAmiibos()
})
</script>

<template>
  <div id="page-wrapper">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

