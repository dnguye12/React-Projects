import axios from 'axios'

const baseUrl = 'https://api.coingecko.com/api/v3'
const coingeckoApi = import.meta.env.VITE_COINGECKO_API

const getCoinList = async () => {
    const request = await axios.get(`${baseUrl}/coins/markets?x_cg_demo_api_key=${coingeckoApi}&vs_currency=usd&sparkline=true&price_change_percentage=24h`)
    return request.data
}

const getCoins = async () => {
    const request = await axios.get('http://localhost:3001/coins')
    return request.data
}

export default {getCoinList, getCoins}