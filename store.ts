import axios from 'axios'
import { defineStore } from 'pinia'     

export const useGamesStore = defineStore({
  id: 'games-store',
  state: () => ({
    games: [],
    loading: false,
  }),

  getters: {
    
  },

  actions: {
    async getGames() {
      this.loading = true;
      this.games = (await axios('http://localhost:3004/games')).data.slice(0);
      this.loading = false;
    }
  },
})