import React from 'react'
import navImage from '../../images/Image.png'
import chevron from '../../images/Chevron Down.png'
import home from '../../images/Navbar Icon.png'
import orders from '../../images/orders.png'
import products from '../../images/products.png'
import delivery from '../../images/bus.png'
import marketing from '../../images/Navbar Icon-1.png'
import analytics from '../../images/Navbar Icon-2.png'
import payouts from '../../images/Navbar Icon-3.png'
import discounts from '../../images/Navbar Icon-4.png'
import audience from '../../images/Navbar Icon-5.png'
import appearance from '../../images/Navbar Icon-6.png'
import plugins from '../../images/Navbar Icon-7.png'
import wallet from '../../images/Frame 1113.png'
const navMenu = [
    {
        name:'Home',
        image:home
    },
    {
        name:'Orders',
        image:orders
    },
    {
        name:'Products',
        image:products
    },
    {
        name:'Delivery',
        image:delivery
    },
    {
        name:'Marketing',
        image:marketing
    },
    {
        name:'Analytics',
        image:analytics
    },
    {
        name:'Payouts',
        image:payouts
    },
    {
        name:'Discounts',
        image:discounts
    },
    {
        name:'Audience',
        image:audience
    },
    {
        name:'Appearance',
        image:appearance
    },
    {
        name:'Plugins',
        image:plugins
    },
]
const Navbar = () => {
  return (
    <div className='h-full w-[224px] bg-[#1E2640] px-2 pt-4 pb-4 flex flex-col'>
        <div className='div flex gap-3 px-2'> 
            <img src={navImage} height={40} width={40}/>
            <div className='flex flex-col flex-1 gap-1'>
                <p className='text-background text-[15px] font-medium'>Nishyam</p>
                <p className='text-background underline text-[13px] font-normal'>Visit store</p>
            </div>
            <div className='flex items-center'>
                <img src={chevron}/>
            </div>
        </div>
        <div className='mt-6 flex-1'>
            <div className='flex flex-col gap-1 px-4 pt-2'>
                {
                    navMenu.map(menu=>(
                        <div className='flex justify-start gap-4 py-2 '>
                            <img src={menu.image}/>
                            <p className='text-background text-sm font-inter font-medium'>{menu.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='w-full bg-[#353C53] rounded py-1.5 px-3'>
            <div className='flex items-center gap-3'>
            <img src={wallet}/>
            <div className='flex flex-col gap-0.5 text-background'>
                <p className='font-normal text-sm'>
                    Available credits
                </p>
                <p className='font-medium text-base'>
                    222.10
                </p>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar