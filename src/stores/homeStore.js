import axios from 'axios'
import { create } from 'zustand'

const homeStore = create((set) => ({
    coins: [],
    query: '',

    setQuery: e => {
        set({query: e.target.value})
        homeStore.getState().searchCoins()
    },

    searchCoins: async () => {
        const {query} = homeStore.getState()
        const resSearchCoin =  await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
        console.log(resSearchCoin)
    },

    fetchTrandingCoins: async () => {
        const resTrandingCoins = await axios.get(`https://api.coingecko.com/api/v3/search/trending`);
        const coins = resTrandingCoins.data.coins.map(coin=>{
           return {
            name: coin.item.name,
            image: coin.item.large,
            id: coin.item.id,
            priceBTC: coin.item.price_btc
           } 
        })
        set({coins})
    }
}))

export default homeStore