import React from 'react'

export default function Filter() {
    return (
        <>  
            <div className="hidden filter-side w-full md:block bg-white pt-4 pb-16 shadow-lg fixed top-0 left-0 h-full z-50">
                <div className="filter max-h-full overflow-y-auto px-4">
                    <div className="head flex justify-between">
                        <a href="#" className="text-gray-600 w-6 h-6 md:hidden block cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        </a>
                        <label className="text-base font-bold text-gray-700">FILTERS</label>
                        <span className="text-gray-700 text-base">Clear All</span>
                    </div>
                    <div className="budget w-full py-3">
                        <h6 className="text-base text-gray-700 uppercase font-normal flex justify-between">BUDGET <img src="images/arrow-open.svg" /></h6>
                        <ul className="pt-3">
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal">Upto ₹ 2,000</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" checked/>
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal">₹ 2,001 - ₹ 4,000</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal">₹ 4,001 - ₹ 6,000</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal">₹ 6,001 - ₹ 8,000</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal">₹ 8,001 - ₹ 10,000</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="property-type w-full py-3">
                        <h6 className="text-base text-gray-700 uppercase font-normal flex justify-between">PROPERTY TYPE <img src="images/arrow-open.svg" /></h6>
                        <ul className="pt-3">
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" checked />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal">Aparthotel</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal">Bed and Breakfast</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal">Campsite</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal">Capsule Hotel</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal">Country house</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="category-type w-full py-3">
                        <h6 className="text-base text-gray-700 uppercase font-normal flex justify-between">CATEGORY <img src="images/arrow-open.svg" /></h6>
                        <ul className="pt-3">
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" checked />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal flex items-center justify-between">2 stars <svg class="mx-2 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg></span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal flex items-center justify-between">3 Stars <svg class="mx-2 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg></span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal flex items-center justify-between">5 stars <svg class="mx-2 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg></span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal">Budget</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" />
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="ml-2 text-base text-gray-600 cursor-pointer font-normal">Boutique</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="rating-type w-full py-3">
                        <h6 className="text-base text-gray-700 uppercase font-normal flex justify-between">RATINGS <img src="images/arrow-open.svg" /></h6>
                        <ul className="pt-3">
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only"/>
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="rounded-full px-3 bg-green-600 text-white text-xs ml-2 w-11 text-center">4.5+</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only"/>
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="rounded-full px-3 bg-blue-400 text-white text-xs ml-2 w-11 text-center">4+</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only" checked/>
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="rounded-full px-3 bg-yellow-400 text-white text-xs ml-2 w-11 text-center">3.5+</span>
                                </label>
                            </li>
                            <li>
                                <label class="inline-flex items-center py-1">
                                    <input type="checkbox" className="sr-only"/>
                                    <span className="form-checkbox text-blue-400 bg-gray-300 cursor-pointer rounded-sm" aria-hidden="true"></span>
                                    <span className="rounded-full px-3 bg-blue-600 text-white text-xs ml-2 w-11 text-center">2+</span>
                                </label>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="bg-white py-2 px-4 shadow fixed bottom-0 w-full z-20">
                    <button className="text-white text-sm block rounded-full bg-blue-500 py-2 font-bold w-full" type="button">Apply</button>
                </div>
            </div>
        </>
    )
}
