import React from 'react'
import homeStore from '../stores/homeStore'

function Home() {
  const store = homeStore();

  React.useEffect(()=>{
    store.fetchTrandingCoins()
  },[])

  return (
    <div>Home</div>
  )
}

export default Home