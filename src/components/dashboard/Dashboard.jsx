import React from 'react'
import Header from '../header/Header'
import Overview from '../overwiew/Overview'
import Transactions from '../transaction/Transactions'

const Dashboard = () => {
  return (
    <div className='bg-[#FAFAFA]'>
        <Header/>
        <Overview/>
        <Transactions/>
    </div>
  )
}

export default Dashboard