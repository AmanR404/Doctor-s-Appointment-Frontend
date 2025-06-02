import React from 'react'

const Footer = () => {
    return (
        <footer className='absolute bottom-0 flex flex-col gap-1 justify-center items-center w-full border-t-1 border-gray-300 h-12'>
            {/* Social Media Handles */}
            <div className='flex gap-5'>
               <a href="https://www.facebook.com/DoctorsToYou/" target='_blank'>
                <lord-icon
                    src="https://cdn.lordicon.com/bfoumeno.json"
                    trigger="hover"
                    style={{"width":"20px","height":"20px","cursor":"pointer"}}>
                </lord-icon></a>

              <a href="https://www.instagram.com/accounts/login/" target='_blank'>
                <lord-icon
                    src="https://cdn.lordicon.com/tgyvxauj.json"
                    trigger="hover"
                     style={{"width":"20px","height":"20px","cursor":"pointer"}}>
                </lord-icon></a>

                <a href="https://x.com/i/flow/login?redirect_after_login=%2Fdoctorscompany" target='_blank'>
                    <lord-icon
                    src="https://cdn.lordicon.com/wlbymhoo.json"
                    trigger="hover"
                      style={{"width":"20px","height":"20px","cursor":"pointer"}}>
                </lord-icon>
                </a>
            </div>
            <span className='text-gray-700 text-xs'>Made With Love By Aman All Right Reserved</span>
        </footer>
    )
}

export default Footer