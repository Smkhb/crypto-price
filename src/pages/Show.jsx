import React from 'react'
import showStore from '../stores/showStore'

function Show() {
  const store = showStore()

  React.useEffect(()=>{
    store.fetchCoinMarket()
  },[])
  return (
    <div>Show</div>
  )
}

export default Show