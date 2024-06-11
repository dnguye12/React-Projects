import { useEffect, useState } from "react"

import CoinGeckoServices from "./services/CoinGecko"

const formatPrice = (n) => {
  return `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

const formatChange = (n) => {
  return n.toFixed(2)
}

function App() {
  const [coins, setCoins] = useState(null)
  const [displayCoins, setDisplayCoins] = useState(null)


  useEffect(() => {
    CoinGeckoServices.getCoins().then(res => {
      setCoins(res)
      setDisplayCoins(res)
    })
  }, [])

  return (
    <div className=" bg-neutral-900 min-h-screen flex flex-col justify-center items-center">
      <div id="hero" className="rounded-xl bg-neutral-800 p-10 flex justify-between items-center w-full max-w-4xl m-auto my-8">
        <div className="flex flex-col justify-center items-center flex-1">
          <h1 className="text-3xl sm:text-4xl text-white font-bold mb-5">Top 100 Cryptos</h1>
          <p className="text-white text-md font-medium">Cryptocurrency Prices by Market Cap</p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src="https://stocknear.com/_app/immutable/assets/list_logo.D3ZWhH3Q.png" alt="" className="w-32 ml-4" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Coin</th>
              <th>Price</th>
              <th>Change</th>
              <th>Volume</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {
              coins.map((coin, index) => (
                <tr key={coin.id} className="hover">
                  <td><p>{index + 1}</p></td>
                  <td>
                    <div className="flex items-center">
                      <img src={coin.image} alt={coin.id} className=" w-6 mr-2" />
                      <p className="text-gray-500 font-medium">{coin.name} <span className=" text-sm font-normal">{coin.symbol}</span></p>
                    </div>
                  </td>
                  <td>
                    <p>{formatPrice(coin.current_price)}</p>
                  </td>
                  {
                    coin.price_change_percentage_24h > 0
                    ? <td className=" text-green-500 text-medium">{formatChange(coin.price_change_percentage_24h)}%</td>
                    : <td className=" text-red-500 text-medium">{formatChange( -1 * coin.price_change_percentage_24h)}%</td>
                  }
                  <td>{formatPrice(coin.total_volume)}</td>
                  <td>{formatPrice(coin.market_cap)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
