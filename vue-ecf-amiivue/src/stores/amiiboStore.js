import { defineStore } from 'pinia'
import ky from 'ky'
import { ref } from 'vue'

export const useAmiiboStore = defineStore('amiibos', {
  state: () => ({
    allAmiibos: [],
    singleAmiibo: null
  }),
  actions: {
    async fetchAllAmiibos() {
      try {
        const response = await ky.get('https://www.amiiboapi.com/api/amiibo/').json()
        this.allAmiibos = response.amiibo
      } catch (error) {
        console.error('Failed to fetch amiibos:', error)
      }
    },

    async fetchAmiiboById(id) {
      try {
        const response = await ky.get(`https://www.amiiboapi.com/api/amiibo/?tail=${id}`).json()
        console.log(response)
        this.singleAmiibo = response.amiibo[0]
      } catch (error) {
        console.error('Failed to fetch amiibo:', error)
      }
    }
  }
})
