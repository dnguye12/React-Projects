import { useEffect, useState } from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import CoinGeckoServices from "./services/CoinGecko"

import Hero from "./components/Hero"
import Filter from "./components/Filter"
import Table from "./components/Table"

function App() {
  const [coins, setCoins] = useState(null)
  const [displayCoins, setDisplayCoins] = useState([])
  const [filterCoin, setFilterCoin] = useState('')


  useEffect(() => {
    CoinGeckoServices.getCoins().then(res => {
      setCoins(res)
      setDisplayCoins(res)
    })
  }, [])

  useEffect(() => {
    if (filterCoin !== '') {
      const helper = coins.filter(coin => coin.id.toLowerCase().includes(filterCoin.toLowerCase()) || coin.symbol.toLowerCase().includes(filterCoin.toLowerCase()) || coin.name.toLowerCase().includes(filterCoin.toLowerCase()))
      setDisplayCoins(helper)
    }else {
      setDisplayCoins(coins)
    }
  }, [filterCoin, coins])

  return (
    <div className=" bg-neutral-900 min-h-screen flex flex-col justify-center items-center">
      <Hero />
      <Filter filterCoin={filterCoin} setFilterCoin={setFilterCoin} />
      <Table displayCoins={displayCoins}/>
      
    </div>
  )
}

export default App
