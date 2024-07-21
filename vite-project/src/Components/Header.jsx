import React from 'react'
import Coffee_logo from '../assets/Borcelle__2_-removebg-preview 1.svg';

const Header = () => {
    // const [isOpen, setIsOpen] = useState(false);
     
    // const toggleNav = () => {
    //     setIsOpen(!isOpen);
    // };
    return (
    <>
      <header className="bg-brown bg-center bg-cover h-18 flex flex-col justify-center items-center">
        {/* contenet */}
        <div className="w-full p-1 flex justify-between items-center px-6">
            {/* logo */}
            <img src={Coffee_logo} alt="Coffee Logo" className="h-24 w-24 md:h-24 md:w-24 mb-4 md:mb-0" /> {/* Adjust the class for size */}

            {/* Toggle Button for Mobile */}
            {/* <button 
            className="md:hidden text-white focus:outline-none mb-4 md:mb-0" 
            onClick={toggleNav}
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                )}
            </button> */}

            {/* navigation */}
            <nav className="text-white text-lg flex">
                <a href="#" className="bg-white text-brown px-2 py-1 rounded md:ml-4 mb-2 md:mb-0">Home</a>
                <a href="#" className="hover:underline md:ml-4 px-2 py-1 mb-2 md:mb-0">About</a>
                <a href="#" className="hover:underline md:ml-4 px-2 py-1 mb-2 md:mb-0">Features</a>
                <a href="#" className="hover:underline md:ml-4 px-2 py-1 mb-2 md:mb-0">Purchase</a>
                <a href="#" className="hover:underline md:ml-4 px-2 py-1 mb-2 md:mb-0">Contact</a>
            </nav>
        </div>

      </header>
      
    </>
  )
}

export default Header