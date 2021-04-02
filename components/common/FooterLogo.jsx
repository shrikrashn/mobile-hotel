import React from 'react';

export default function FooterLogo() {
  return (
    <>
        <div className="bg-gray-800 w-full">
            	<div className="container py-2 xl:px-20 px-2 border-gray-700 lg:border-b m-auto flex-wrap">
                	<ul className="flex items-center justify-around">
                    	<li className="px-4 lg:py-4">
                            <img src="images/patners-img.png" alt="Incredible India" />
                        </li>
                        <li className="px-4 lg:py-4">
                            <img src="images/patners-img1.png" alt="International Association of Travel Agents" />
                        </li>
                        <li className="px-4 lg:py-4">
                            <img src="images/patners-img2.png" alt="TOFTigers" />
                        </li>
                        <li className="px-4 lg:py-4">
                            <img src="images/patners-img5.png" alt="Travel Agents Association of India" />
                        </li>
                    </ul>
               	
                </div>
            </div>
    </>
  );
}
