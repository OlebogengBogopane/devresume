import React from 'react'

const TabButton = ({ active , selectTab , children}) => {
    const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE] '
 
    return (
    <button onClick={selectTab}>
    < p className={`mr-3 font-semibold hover:text-white ${buttonClasses} border-green-500 text-[#ADB7BE] mt-bold `}>
        {children}
        </p>
    </button>
  )
}

export default TabButton