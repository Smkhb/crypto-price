import axios from 'axios'
import { create } from 'zustand'

const showStore = create((set) => ({
    graphData: [],
    coinMarketData: null,

    fetchCoinData: async id => {
        const [ resGraphData, resMarketData ] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`) 
        ]) 

        const graphData = resGraphData.data.prices.map(price => {
            const [time,p] = price;
            const date = new Date(time).toLocaleDateString('pt-br')
            return {
                Date: date,
                Price: p,
            }
        })
        
        set({ coinMarketData: resMarketData.data})
        set({ graphData })
    }
}))

export default showStore