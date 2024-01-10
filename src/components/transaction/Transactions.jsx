import React from 'react'
import sort from '../../images/Sort.png'
import download from '../../images/download.png'
import green from '../../images/green.png'
import grey from '../../images/grey.png'
const transaction = [
    {
        id:'#281209',
        status:'Successful',
        transaction:'131634495747',
        date:'Today, 08:45 PM',
        amount:'₹1,125.00'
    },
    {
        id:'#281208',
        status:'Processing',
        transaction:'131634495747',
        date:'Yesterday, 3:00 PM',
        amount:'₹1,125.00'
    },
    {
        id:'#281207',
        status:'Successful',
        transaction:'131634495747',
        date:'12 Jul 2023, 03:00 PM',
        amount:'₹1,125.00'
    },
    {
        id:'#281206',
        status:'Successful',
        transaction:'131634495747',
        date:'12 Jul 2023, 03:00 PM',
        amount:'₹1,125.00'
    },
    {
        id:'#281205',
        status:'Successful',
        transaction:'131634495747',
        date:'12 Jul 2023, 03:00 PM',
        amount:'₹1,125.00'
    },
    {
        id:'#281204',
        status:'Successful',
        transaction:'131634495747',
        date:'12 Jul 2023, 03:00 PM',
        amount:'₹1,125.00'
    },
]



const Transactions = () => {
  return (
    <div className='flex flex-col gap-y-6'>
        <div className=' px-8 flex flex-col gap-y-6'>
        <p className='font-medium  text-[20px]'>
        Transactions | This Month
        </p>
        <div className='flex gap-x-3  '>
            <div className=' bg-[#E6E6E6]  rounded-[40px]  text-[14px]  font-medium'>
                <p className='py-1.5 px-4 text-[#808080] '>
                    Payouts (22)
                </p>
            </div>
            <div className='bg-[#146EB4] text-background rounded-[40px] text-[14px]  font-medium'>
            <p className='py-1.5 px-4 '>
                Refunds (6)
            </p>
                
            </div>
        </div>
        </div>
        <div className='px-8 rounded-lg'>
            <div className='flex flex-col p-3 bg-background'>
                <div className='flex  justify-between'>
                    <div className='text-[#999999] flex-initial w-[248px] relative text-[14px] font-normal 
                    rounded border-[1px] border-[#D9D9D9] '>
                        <input type="text" className='pl-[38px] pr-4 py-[10px]'
                                placeholder="Order ID or transaction ID" /> 
                            <div className="absolute inset-y-0 left-0 pl-4  
                                        flex items-center  
                                        pointer-events-none"> 
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_103086_75730)">
                                <path d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25403 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z" fill="#999999"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_103086_75730">
                                <rect width="14" height="14" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>

                    </div>
                    <div className='flex gap-x-4'>
                        <div className='border-[1px] rounded border-[#D9D9D9]'>
                            <div className='flex items-center gap-x-1.5 px-3 py-1.5 text-[#4D4D4D]'>
                                Sort
                                <div>
                                    <img src={sort} alt='sort'/>
                                </div>
                            </div>
                        
                        </div>
                        <div className='border-[1px] rounded border-[#D9D9D9] h-[36px] w-[36px]'>
                            <div className='flex items-center w-full h-full justify-center'>
                                <img src={download} alt='download'/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='min-w-full mt-[14px] '>
    <table className='w-full text-left'>
        <thead>
            <tr className='rounded overflow-hidden bg-[#F2F2F2]'>
                <th className="py-[10px] px-[12px] w-150  text-[#4D4D4D] font-medium">
                    <div className='w-150'>
                        Order ID
                    </div>
                </th>
                <th className="py-[10px] w-150 text-[#4D4D4D] font-medium">
                <div className='w-150'>
                        Status
                    </div>
                </th>
                <th className="py-[10px] w-150 text-[#4D4D4D] font-medium">
                <div className='w-150'>
                        Transactions
                    </div>
                </th>
                <th className="py-[10px] w-150 text-[#4D4D4D] font-medium">
                <div className='w-150'>
                    Refund date
                    </div>
                </th>
                <th className=" py-[10px] px-3 w-150 text-[#4D4D4D] font-medium text-right">
                
                    Order amount
                    {/* </div> */}
                    </th>
            </tr>
        </thead>
        <tbody>
            {transaction.map((order) => (
                <tr className="px-3 py-[14px] border-b-[1px] border-[#F2F2F2] last:border-none">
                    <td className="whitespace-nowrap px-3 py-[14px] w-150 text-[#146EB4] text-[14px] font-medium">{order.id}</td>
                    <td className="whitespace-nowrap py-[14px] w-150 text-[#1A181E] text-[14px] font-normal">
                        <div className='flex gap-x-1.5 items-center'>
                            <div>
                                <img src={order.status === 'Successful' ? green : grey} alt={order.status} />
                            </div>
                            <p>{order.status}</p>
                        </div>
                    </td>
                    <td className="whitespace-nowrap py-[14px] w-150 text-[#4D4D4D] font-inter text-[14px] font-normal ">
                        {order.transaction}
                    </td>
                    <td className="whitespace-nowrap py-[14px] w-150 text-[#4D4D4D] font-normal text-[14px] ">{order.date}</td>
                    <td className="whitespace-nowrap py-[14px] px-3 w-150 text-[#1A181E] font-normal text-[14px]  text-right">{order.amount}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>



            </div>
        </div>
    </div>
  )
}

export default Transactions


