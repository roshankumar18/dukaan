import React from 'react'
import help from '../../images/Help.png'
import search from '../../images/search.png'
import ellipse from '../../images/Ellipse 3.png'
import menu from '../../images/Menu.png'
import dropmenu from '../../images/dropdownicon.png.png'
const Header = () => {
  return (
    <div className='flex px-8  py-3 gap-4 w-full bg-[#FFFFFF]
    border-b-[1px] border-[#D9D9D9] justify-between items-center'>
        <div className='flex-initial w-[360px] h-[28px]'>
            <div className='flex gap-4 text-center'>
                <p className='font-medium text-[20px]'>Payouts</p>
                <div className='flex items-center gap-1.5'>
                    <div className='flex  items-center'>
                        <img src={help}/>
                    </div>
                    <p className='font-normal text-[12px]'>How it works</p>
                </div>
            </div>
        </div>
        {/* <div className='flex flex-initial w-[400px] h-[40px] items-center justify-center'> */}
        <div className='text-[#999999] flex flex-initial w-[400px] h-[40px] bg-[#F2F2F2] relative text-[14px] font-normal 
                    rounded border-[1px] border-[#F2F2F2] '>
                        <input type="text" className='pl-[38px] bg-[#F2F2F2]  py-[10px]'
                                placeholder="Search features, tutorials, etc." /> 
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
        {/* </div> */}
        <div className='flex flex-initial w-[400px] h-[40px] items-center justify-end gap-x-3'>
            <img src={menu}/>
            <img src={dropmenu}/>
        </div>
    </div>
  )
}

export default Header