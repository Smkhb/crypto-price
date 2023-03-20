import React from 'react'
import { Link } from 'react-router-dom';
import homeStore from '../stores/homeStore'

function Home() {
  const store = homeStore()

  React.useEffect(()=>{
    store.fetchTrandingCoins()
  },[])

  return (
    <div>
    <input type='text' value={store.query} onChange={store.setQuery} />
      {store.coins.map(coin => {
        return (
          <div key={coin.id}>
            <Link to={`/${coin.id}`}>
              {coin.name}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Home
