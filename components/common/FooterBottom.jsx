import React from 'react';

export default function FooterBootom() {
  return (
    <>
        <div className="bg-gray-800 text-gray-50 sm:text-sm font-medium text-xs sm:pb-0 pb-20">
            <div className="container flex justify-between m-auto items-center lg:py-5 py-2 flex-wrap border-gray-700 sm:border-b">
                <div className="w-full pl-2">
                <ul className="flex flex-wrap items-center xl:justify-center sm:justify-center xl:px-20">
                    <li className="px-3 sm:py-2 py-1 flex items-center"><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> C - 81C, Sector - 8, Noida - 201301</li>
                    <li className="px-3 sm:py-2 py-1 flex items-center"><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path></svg> +91-120-4052615 - 99 (85 hunting lines are available)</li>
                    <li className="px-3 sm:py-2 py-1 flex items-center"><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> info@tourmyindia.com</li>
                    <li className="px-3 sm:py-2 py-1 flex items-center"><img className="mr-1" src="images/whatsapp.svg" alt="icon"/> +91-9212777225</li>
                </ul>
            </div>
        </div>
        </div>
        <div className="copyright bg-gray-800 py-4 hidden sm:block">
            <div className="container mx-auto">
                <p className="text-xs text-gray-400 text-center">© 2020 TOUR MY INDIA PRIVATED LIMITED | ALL RIGHTS RESERVED</p>
            </div>
        </div>
    </>
  );
}
