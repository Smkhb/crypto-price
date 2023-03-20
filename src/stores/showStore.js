import axios from 'axios'
import { create } from 'zustand'

const showStore = create((set) => ({
    fetchCoinMarket: async id => {
        const resFetchCoinMarket = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
        console.log(resFetchCoinMarket.data)
    }
}))

export default showStore