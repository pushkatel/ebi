import React, {useEffect, useState} from 'react'
import StockTable from './StockTable'
import axios from 'axios'

const PurchaseStock = () => {
  // const [stocks, setStocks] = useState([{id: 0}])
  // useEffect(() => {
  //   const fetchStocks = async () => {
  //     const res = await axios.get('/api/holdings/all')
  //     setStocks(res.data)
  //   }
  //   fetchStocks()
  // }, [])
  // console.log('test', stocks)
  return (
    <>
      <h1>test</h1>
      <StockTable />
    </>
  )
}

export default PurchaseStock
