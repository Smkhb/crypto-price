import axios from 'axios'
import debounce from '../helpers/debounce'
import { create } from 'zustand'

const homeStore = create((set) => ({
    trending: [],
    coins: [],
    query: '',

    setQuery: e => {
        set({query: e.target.value})
        homeStore.getState().searchCoins()
    },

    searchCoins: debounce( async () => {
        const {query, trending} = homeStore.getState()
        if(query.length>2){
            const resSearchCoin =  await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
            const coins = resSearchCoin.data.coins.map(coin=> {
                return {
                    name: coin.name,
                    image: coin.large,
                    id: coin.id
                }
            })
            set({ coins })            
        } else {
            set({ coins: trending })
        }

    },500),

    fetchTrendingCoins: async () => {
        const [resTrendingCoins, resBtcPrice] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/search/trending/` ),
            axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`)
        ])
        const btcPrice = resBtcPrice.data.bitcoin.usd;
        const coins = resTrendingCoins.data.coins.map(coin=>{
           return {
            name: coin.item.name,
            image: coin.item.large,
            id: coin.item.id,
            priceBTC: coin.item.price_btc,
            priceUsd: (coin.item.price_btc*btcPrice).toFixed(6),
           } 
        })
        console.log(coins)

        set({ trending: coins, coins })
    }
}))

export default homeStore