import axios from 'axios'
import { create } from 'zustand'

const showStore = create((set) => ({
    graphData: [],


    fetchCoinMarketValue: async id => {
        const resFetchCoinMarketValue = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`)

        const graphData = resFetchCoinMarketValue.data.prices.map(price => {
            const [time,p] = price;
            const date = new Date(time).toLocaleDateString('pt-br')
            return {
                Date: date,
                Price: p,
            }
        })
        set({ graphData })
    }
}))

export default showStore