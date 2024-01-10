import React from 'react'
import arrow from '../../images/arrow.png'
import chevron from '../../images/Chevron Right.png'
import helpWhite from '../../images/Help-white.png.png'
import help from '../../images/Help.png'
import chevronBlue from '../../images/Chevron Right-blue.png'

const Overview = () => {
  return (
    <div className='p-8 bg-[#FAFAFA] flex flex-col w-full '>
        <div className='flex justify-between items-start'>
            <p className='text-[20px] font-medium'>Overview</p>
            <div className='flex items-center gap-x-1.5 border-[#D9D9D9] border-[1px] py-1.5'>
                <p className='ml-[14px] font-normal text-[16px] text-[#4D4D4D]'>This Month</p>
                <div className='mr-[10px]'>
                        <img src={arrow}/>
                </div>
                
            </div>
        </div>
        <div className='mt-6  flex flex-row gap-x-[20px] items-start '>
            <div className='flex flex-col  rounded bg-[#146EB4]  '>
                <div className='flex ] flex-col p-[20px]'>
                    <div className='  flex flex-col'>
                    <div className='flex flex-row gap-x-2 items-center'>
                        <p className='text-background text-[16px] font-normal'>Next Payout</p>
                        <div className='text-background'>
                            <img src={helpWhite} alt='help'/>
                        </div>
                    
                    </div>
                    <div className='flex mt-4  justify-between items-center'>
                        <div>
                            <p className='text-background font-medium text-[32px]'>2,312.23</p>
                        </div>
                        <div className='flex ml-[102px] items-center'>
                            <p className='font-medium text-[16px] underline text-background'>23 orders</p>
                            <div>
                                <img src={chevron} alt='arrow'/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='bg-[#0E4F82] rounded py-2 px-6 text-[#F2F2F2] flex gap-x-[90px]' >
                    <p className='font-normal text-[14px]'>
                        Next payout date:
                    </p>
                    <p className='font-medium text-[14px]'>
                        Today, 04:00PM
                    </p>
                </div>
            </div>
            <div className='flex flex-col p-[20px] flex-1 bg-background  rounded gap-y-4'>
                <div className='flex items-center gap-x-2'>
                    <p>
                        Amount Pending
                    </p>
                    <div>
                        <img src={help} alt='help'/>
                    </div>
                </div>
                <div className='flex gap-x-[82px] items-center'>
                    <p className='text-[##1A181E] font-medium text-[32px]'>92,312.20</p>
                    <div className='flex '>
                        <p className='text-[#146EB4] text-[16px] font-medium'>
                            13 orders
                        </p>
                        <div>
                            <img src={chevronBlue} alt='chevron'/>
                        </div>
                    </div>
                </div>
               
                
            </div>
            <div className='flex flex-col p-[20px] flex-1   bg-background roundede gap-y-4'>
                <div className='flex items-center gap-x-2'>
                    <p>
                        Amount Processed
                    </p>
                    <div>
                        <img src={help} alt='help'/>
                    </div>
                </div>
                <div className='flex gap-x-[82px] items-center'>
                    <p className='text-[##1A181E] font-medium text-[32px]'>23,92,312.90</p>
                </div>
                
            </div>
        </div>
       
    </div>
  )
}

export default Overview