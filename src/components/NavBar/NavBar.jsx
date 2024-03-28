import React from 'react'

const NavBar = () => {
    return (
        <div className='navBar flex justify-between items-center p-[3rem]'>
            <div className="logo Div">
                <h1 className="logo text-[25px] text-blue-600"><strong>Job</strong>oard</h1>
            </div>

            <div className="menu flex gap-8">
                <div className="menulist text-[#6f6f6f] hover:text-blue-600 list-none cursor-pointer relative hover:before:absolute before:h-[4px] before:w-full before:bg-blue-600 before:right-0 before:bottom-[-10px] before:text-blue-600 before:content-['']">Jobs</div>
                <div className="menulist text-[#6f6f6f] hover:text-blue-600 list-none cursor-pointer relative hover:before:absolute before:h-[4px] before:w-full before:bg-blue-600 before:right-0 before:bottom-[-10px] before:text-blue-600 before:content-['']">Companies</div>
                <div className="menulist text-[#6f6f6f] hover:text-blue-600 list-none cursor-pointer relative hover:before:absolute before:h-[4px] before:w-full before:bg-blue-600 before:right-0 before:bottom-[-10px] before:text-blue-600 before:content-['']">About</div>
                <div className="menulist text-[#6f6f6f] hover:text-blue-600 list-none cursor-pointer relative hover:before:absolute before:h-[4px] before:w-full before:bg-blue-600 before:right-0 before:bottom-[-10px] before:text-blue-600 before:content-['']">Contact</div>
                <div className="menulist text-[#6f6f6f] hover:text-blue-600 list-none cursor-pointer relative hover:before:absolute before:h-[4px] before:w-full before:bg-blue-600 before:right-0 before:bottom-[-10px] before:text-blue-600 before:content-['']">Blog</div>
                <div className="menulist text-[#6f6f6f] hover:text-blue-600 list-none cursor-pointer relative hover:before:absolute before:h-[4px] before:w-full before:bg-blue-600 before:right-0 before:bottom-[-10px] before:text-blue-600 before:content-['']">Login</div>
                <div className="menulist text-[#6f6f6f] hover:text-blue-600 list-none cursor-pointer relative hover:before:absolute before:h-[4px] before:w-full before:bg-blue-600 before:right-0 before:bottom-[-10px] before:text-blue-600 before:content-['']">Register</div>
            </div>
        </div>
    )
}

export default NavBar