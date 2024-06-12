import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CoinChart from './CoinChart'

const formatPrice = (n) => {
    return `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

const formatChange = (n) => {
    return n.toFixed(2)
}

// eslint-disable-next-line react/prop-types
const Table = ({ displayCoins }) => {
    return (
        <div className="overflow-x-auto w-full max-w-6xl mx-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Volume</th>
                        <th>Market Cap</th>
                        <th>Last 7 Days</th>
                    </tr>
                </thead>
                <tbody>
                    {displayCoins === null
                        ?
                        <div className="skeleton h-64 w-full"></div>
                        :
                        // eslint-disable-next-line react/prop-types
                        displayCoins.map((coin) => (
                            <tr key={coin.id} className="hover">
                                <td><p>{coin.market_cap_rank}</p></td>
                                <td>
                                    <div className="flex items-center">
                                        <img src={coin.image} alt={coin.id} className=" w-6 mr-2" />
                                        <p className="text-gray-500 font-medium">{coin.name} <span className=" text-sm font-normal">{coin.symbol.toUpperCase()}</span></p>
                                    </div>
                                </td>
                                <td>
                                    <p>{formatPrice(coin.current_price)}</p>
                                </td>
                                {
                                    coin.price_change_percentage_24h > 0
                                        ? <td className=" text-green-500 text-medium"><FontAwesomeIcon icon="fa-solid fa-caret-up" /> {formatChange(coin.price_change_percentage_24h)}%</td>
                                        : <td className=" text-red-500 text-medium"><FontAwesomeIcon icon="fa-solid fa-caret-down" /> {formatChange(-1 * coin.price_change_percentage_24h)}%</td>
                                }
                                <td>{formatPrice(coin.total_volume)}</td>
                                <td>{formatPrice(coin.market_cap)}</td>
                                <td><CoinChart coin={coin}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table