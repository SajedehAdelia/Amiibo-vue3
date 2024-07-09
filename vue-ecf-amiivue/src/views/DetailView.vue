<script setup>
import  Detail from '../pages/Detail'

const props = defineProps('amiibo')

</script>

<template>
  <main>
    <Detail :amiibo="amiibo"/>
  </main>
</template>