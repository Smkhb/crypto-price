import axios from 'axios'
import { create } from 'zustand'

const showStore = create((set) => ({
    fetchCoinMarket: () => {
        console.log('hey')
    }
}))

export default showStore