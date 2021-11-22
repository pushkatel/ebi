import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Grid} from 'gridjs-react'
import {HoldingCard} from './HoldingCard'

const StockTable = () => {
  const [stocks, setStocks] = useState([])
  useEffect(() => {
    const fetchStocks = async () => {
      const res = await axios.get('/api/holdings/all')
      setStocks(res.data)
    }
    fetchStocks()
  }, [])
  // console.log('test', stocks[0])

  return (
    <div>
      {/* <Grid data={stocks} /> */}
      {stocks.map(stock => (
        <HoldingCard key={stock.key} stock={stock} />
      ))}
    </div>
  )
}

export default StockTable
