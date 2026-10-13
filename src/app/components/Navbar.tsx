import React from 'react'

const Navbar = () => {
  return (
    <div className="hidden lg:block">
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text blackish">
                <div className="navbar__link relative cursor-pointer relative text-black hover:text-[#ff8f9c] transition-all duration-400 group">Home<span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ff8f9c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 block"  />
</div>
                <div className="navbar__link relative cursor-pointer relative text-black hover:text-[#ff8f9c] transition-all duration-400 group">Categories <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ff8f9c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 block"  /></div>
                <div className="navbar__link relative cursor-pointer relative text-black hover:text-[#ff8f9c] transition-all duration-400 group">Men's <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ff8f9c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 block"  /></div>
                <div className="navbar__link relative cursor-pointer relative text-black hover:text-[#ff8f9c] transition-all duration-400 group">Women's <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ff8f9c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 block"  /></div>
                <div className="navbar__link relative cursor-pointer relative text-black hover:text-[#ff8f9c] transition-all duration-400 group">Jewelry <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ff8f9c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 block"  /></div>
                <div className="navbar__link relative cursor-pointer relative text-black hover:text-[#ff8f9c] transition-all duration-400 group">Perfume <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ff8f9c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 block"  /></div>
                <div className="navbar__link relative cursor-pointer relative text-black hover:text-[#ff8f9c] transition-all duration-400 group">Blog <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ff8f9c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 block"  /></div>
                <div className="navbar__link relative cursor-pointer relative text-black hover:text-[#ff8f9c] transition-all duration-400 group">Hot Offers <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ff8f9c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 block"  /></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar