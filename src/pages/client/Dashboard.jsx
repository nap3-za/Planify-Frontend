import React, { Fragment, useEffect } from "react";
import PropTypes from  "prop-types"
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUrl } from "../../AppUrls"
import { initFlowbite } from "flowbite";


function Dashboard(props) {
	const { dashboard } = props;
    useEffect(
        () => {
    		window.initFlowbite();
        }
    )

	const URL_CLIENTS_LIST = getUrl("CLIENTS_LIST");
	const URL_CLIENT = getUrl("CLIENT");

    return (
        <>
       
        <div className="p-4 block sm:flex items-center justify-between rounded-lg  lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full mb-1">
                <div className="sm:flex">
                  <div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                      
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                        Clients
                    </h1>
                  </div>

                  <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                      <button type="button" data-modal-target="add-client-modal" data-modal-toggle="add-client-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                          <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                          Add Client
                      </button>
                  </div>
                </div>
            </div>
        </div>


        <div className="px-4 py-6 w-full">
            <div className="grid gap-4 xl:grid-cols-4">
            	<div className="flex flex-row justify-between align-center items-center border border-gray-200 bg-white rounded-lg shadow-md py-6 px-8">
            		<div>
            			<h1 className="text-xl font-semibold">Stat</h1>
            			<h1 className="text-sm font-light">Some verbose helpful text</h1>
            		</div>
            		<h1 className="text-xl font-semibold text-primary-700">679</h1>
            	</div>
            	<div className="flex flex-row justify-between align-center items-center border border-gray-200 bg-white rounded-lg shadow-md py-6 px-8">
            		<div>
            			<h1 className="text-xl font-semibold">Stat</h1>
            			<h1 className="text-sm font-light">Some verbose helpful text</h1>
            		</div>
            		<h1 className="text-xl font-semibold text-primary-700">679</h1>
            	</div>
            	<div className="flex flex-row justify-between align-center items-center border border-gray-200 bg-white rounded-lg shadow-md py-6 px-8">
            		<div>
            			<h1 className="text-xl font-semibold">Stat</h1>
            			<h1 className="text-sm font-light">Some verbose helpful text</h1>
            		</div>
            		<h1 className="text-xl font-semibold text-primary-700">679</h1>
            	</div>
            	<div className="flex flex-row justify-between align-center items-center border border-gray-200 bg-white rounded-lg shadow-md py-6 px-8">
            		<div>
            			<h1 className="text-xl font-semibold">Stat</h1>
            			<h1 className="text-sm font-light">Some verbose helpful text</h1>
            		</div>
            		<h1 className="text-xl font-semibold text-primary-700">679</h1>
            	</div>
            </div>
        </div>

		<div className="px-4 py-4">
			<div class="relative overflow-x-auto border border-gray-300 shadow-md bg-white p-4 rounded-lg">
			    <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
			        <div>
			            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
			                <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
			                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
			                    </svg>
			                Last 30 days
			                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
			                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
			                </svg>
			            </button>
			            <div id="dropdownRadio" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style={{position: "absolute",inset: "auto auto 0px 0px", margin:"0px", transform: "translate3d(522.5px, 3847.5px, 0px)"}}>
			                <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
			                    <li>
			                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
			                            <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
			                            <label for="filter-radio-example-1" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
			                        </div>
			                    </li>
			                    <li>
			                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
			                            <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
			                            <label for="filter-radio-example-2" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
			                        </div>
			                    </li>
			                    <li>
			                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
			                            <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
			                            <label for="filter-radio-example-3" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
			                        </div>
			                    </li>
			                    <li>
			                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
			                            <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
			                            <label for="filter-radio-example-4" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
			                        </div>
			                    </li>
			                    <li>
			                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
			                            <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
			                            <label for="filter-radio-example-5" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
			                        </div>
			                    </li>
			                </ul>
			            </div>
			        </div>
			        <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
			        <Link to={URL_CLIENTS_LIST} class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
			        	All Clients
			        </Link>
			        <label for="table-search" class="sr-only">Search</label>
			        <div class="relative">
			            <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
			                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
			            </div>
			            <input type="text" id="table-search" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
			        </div>
			        </div>
			    </div>

			    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			            <tr>
			                <th scope="col" class="p-4">
			                    <div class="flex items-center">
			                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
			                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
			                    </div>
			                </th>
			                <th scope="col" class="px-6 py-3">
			                    
			                    	Product name
			                </th>
			                <th scope="col" class="px-6 py-3">
			                    Color
			                </th>
			                <th scope="col" class="px-6 py-3">
			                    Category
			                </th>
			                <th scope="col" class="px-6 py-3">
			                    Price
			                </th>
			                <th scope="col" class="px-6 py-3">
			                    Action
			                </th>
			            </tr>
			        </thead>
			        <tbody>
			            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
			                <td class="w-4 p-4">
			                    <div class="flex items-center">
			                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
			                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
			                    </div>
			                </td>
			                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
			                    <Link to={URL_CLIENT}>Apple MacBook Pro 17"</Link>
			                </th>
			                <td class="px-6 py-4">
			                    Silver
			                </td>
			                <td class="px-6 py-4">
			                    Laptop
			                </td>
			                <td class="px-6 py-4">
			                    $2999
			                </td>
			                <td class="px-6 py-4">
			                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
			                </td>
			            </tr>
			            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
			                <td class="w-4 p-4">
			                    <div class="flex items-center">
			                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
			                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
			                    </div>
			                </td>
			                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
			                    Microsoft Surface Pro
			                </th>
			                <td class="px-6 py-4">
			                    White
			                </td>
			                <td class="px-6 py-4">
			                    Laptop PC
			                </td>
			                <td class="px-6 py-4">
			                    $1999
			                </td>
			                <td class="px-6 py-4">
			                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
			                </td>
			            </tr>
			            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
			                <td class="w-4 p-4">
			                    <div class="flex items-center">
			                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
			                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
			                    </div>
			                </td>
			                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
			                    Magic Mouse 2
			                </th>
			                <td class="px-6 py-4">
			                    Black
			                </td>
			                <td class="px-6 py-4">
			                    Accessories
			                </td>
			                <td class="px-6 py-4">
			                    $99
			                </td>
			                <td class="px-6 py-4">
			                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
			                </td>
			            </tr>
			            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
			                <td class="w-4 p-4">
			                    <div class="flex items-center">
			                        <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
			                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
			                    </div>
			                </td>
			                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
			                    Apple Watch
			                </th>
			                <td class="px-6 py-4">
			                    Silver
			                </td>
			                <td class="px-6 py-4">
			                    Accessories
			                </td>
			                <td class="px-6 py-4">
			                    $179
			                </td>
			                <td class="px-6 py-4">
			                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
			                </td>
			            </tr>
			            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
			                <td class="w-4 p-4">
			                    <div class="flex items-center">
			                        <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
			                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
			                    </div>
			                </td>
			                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
			                    iPad
			                </th>
			                <td class="px-6 py-4">
			                    Gold
			                </td>
			                <td class="px-6 py-4">
			                    Tablet
			                </td>
			                <td class="px-6 py-4">
			                    $699
			                </td>
			                <td class="px-6 py-4">
			                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
			                </td>
			            </tr>
			            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
			                <td class="w-4 p-4">
			                    <div class="flex items-center">
			                        <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
			                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
			                    </div>
			                </td>
			                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
			                    Apple iMac 27"
			                </th>
			                <td class="px-6 py-4">
			                    Silver
			                </td>
			                <td class="px-6 py-4">
			                    PC Desktop
			                </td>
			                <td class="px-6 py-4">
			                    $3999
			                </td>
			                <td class="px-6 py-4">
			                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
			                </td>
			            </tr>
			        </tbody>
			    </table>

	    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
	        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
	        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
	            <li>
	                <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
	            </li>
	            <li>
	                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
	            </li>
	            <li>
	                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
	            </li>
	            <li>
	                <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
	            </li>
	            <li>
	                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
	            </li>
	            <li>
	                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
	            </li>
	            <li>
	        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
	            </li>
	        </ul>
	    </nav>

			</div>
		</div>

        <div className="px-4 py-8 border-b">
            <div className="grid gap-4 xl:grid-cols-3 2xl:grid-cols-3">


            <div className="bg-white xl:col-span-2 2xl:col-span-2 rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800">
                  <div className="p-4  dark:border-gray-700 sm:p-6">
                    <div className="flex items-center justify-between border-b pb-4 ">
                      <div className="flex-shrink-0">
                        <span className="text-xl font-semibold leading-none text-gray-900 sm:text-2xl dark:text-white">
                            Good
                        </span>
                      </div>

                          <button type="button" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                          </button>
                    </div>

                    <div className="border-b">

						<div class="relative overflow-x-auto">

						    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						            <tr>
						                <th scope="col" class="">
						                    <div class="flex items-center">
						                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
						                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
						                    </div>
						                </th>
						                <th scope="col" class="px-6 py-3">
						                    title
						                </th>
						                <th scope="col" class="px-6 py-3">
						                    status
						                </th>
						                <th scope="col" class="px-6 py-3">
						                    date
						                </th>
						            </tr>
						        </thead>
						        <tbody>
						            <tr class="dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						                <td class="">
						                    <div class="flex items-center">
						                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
						                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
						                    </div>
						                </td>
						                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
						                    Apple MacBook Pro 17"
						                </th>
						                <td class="px-6 py-4">
						                    Silver
						                </td>
						                <td class="px-6 py-4">
						                    Laptop
						                </td>
						            </tr>

						        </tbody>
						    </table>
						</div>
                    </div>
                  </div>

            </div>
              

            <div className="px-4 space-y-4">
            	<div className="flex flex-row justify-between align-center items-center border border-gray-200 bg-white rounded-lg shadow-md py-6 px-8">
            		<div>
            			<h1 className="text-xl font-semibold">Stat</h1>
            			<h1 className="text-sm font-light">Some verbose helpful text</h1>
            		</div>
            		<h1 className="text-xl font-semibold text-primary-700">679</h1>
            	</div>

            	<div className="flex flex-row justify-between align-center items-center border border-gray-200 bg-white rounded-lg shadow-md py-6 px-8">
            		<div>
            			<h1 className="text-xl font-semibold">Stat</h1>
            			<h1 className="text-sm font-light">Some verbose helpful text</h1>
            		</div>
            		<h1 className="text-xl font-semibold text-primary-700">679</h1>
            	</div>
            	<div className="flex flex-row justify-between align-center items-center border border-gray-200 bg-white rounded-lg shadow-md py-6 px-8">
            		<div>
            			<h1 className="text-xl font-semibold">Stat</h1>
            			<h1 className="text-sm font-light">Some verbose helpful text</h1>
            		</div>
            		<h1 className="text-xl font-semibold text-primary-700">679</h1>
            	</div>
            	<div className="flex flex-row justify-between align-center items-center border border-gray-200 bg-white rounded-lg shadow-md py-6 px-8">
            		<div>
            			<h1 className="text-xl font-semibold">Stat</h1>
            			<h1 className="text-sm font-light">Some verbose helpful text</h1>
            		</div>
            		<h1 className="text-xl font-semibold text-primary-700">679</h1>
            	</div>
            </div>
            </div>
        </div>

        <div className="px-4 py-8 border-b">
            <div className="grid gap-4 xl:grid-cols-3 2xl:grid-cols-3">


            <div className="bg-white xl:col-span-2 2xl:col-span-2 rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800">
                  <div className="p-4  dark:border-gray-700 sm:p-6">
                    <div className="flex items-center justify-between border-b pb-4 ">
                      <div className="flex-shrink-0">
                        <span className="text-xl font-semibold leading-none text-gray-900 sm:text-2xl dark:text-white">
                            Average
                        </span>
                      </div>

                          <button type="button" data-modal-target="add-journal-modal" data-modal-toggle="add-journal-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                          </button>
                    </div>

                    <div className="border-b">

						<div class="relative overflow-x-auto">

						    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						            <tr>
						                <th scope="col" class="">
						                    <div class="flex items-center">
						                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
						                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
						                    </div>
						                </th>
						                <th scope="col" class="px-6 py-3">
						                    title
						                </th>
						                <th scope="col" class="px-6 py-3">
						                    status
						                </th>
						                <th scope="col" class="px-6 py-3">
						                    date
						                </th>
						            </tr>
						        </thead>
						        <tbody>
						            <tr class="dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						                <td class="">
						                    <div class="flex items-center">
						                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
						                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
						                    </div>
						                </td>
						                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
						                    Apple MacBook Pro 17"
						                </th>
						                <td class="px-6 py-4">
						                    Silver
						                </td>
						                <td class="px-6 py-4">
						                    Laptop
						                </td>
						            </tr>

						        </tbody>
						    </table>
						</div>
                    </div>
                  </div>

            </div>
              

            <div className="px-4 space-y-4">
            	<div className="flex flex-row justify-between align-center items-center border border-gray-200 bg-white rounded-lg shadow-md py-6 px-8">
            		<div>
            			<h1 className="text-xl font-semibold">Stat</h1>
            			<h1 className="text-sm font-light">Some verbose helpful text</h1>
            		</div>
            		<h1 className="text-xl font-semibold text-primary-700">679</h1>
            	</div>

            	<div className="flex flex-row justify-between align-center items-center border border-gray-200 bg-white rounded-lg shadow-md py-6 px-8">
            		<div>
            			<h1 className="text-xl font-semibold">Stat</h1>
            			<h1 className="text-sm font-light">Some verbose helpful text</h1>
            		</div>
            		<h1 className="text-xl font-semibold text-primary-700">679</h1>
            	</div>
            	<div className="flex flex-row justify-between align-center items-center border border-gray-200 bg-white rounded-lg shadow-md py-6 px-8">
            		<div>
            			<h1 className="text-xl font-semibold">Stat</h1>
            			<h1 className="text-sm font-light">Some verbose helpful text</h1>
            		</div>
            		<h1 className="text-xl font-semibold text-primary-700">679</h1>
            	</div>
            	<div className="flex flex-row justify-between align-center items-center border border-gray-200 bg-white rounded-lg shadow-md py-6 px-8">
            		<div>
            			<h1 className="text-xl font-semibold">Stat</h1>
            			<h1 className="text-sm font-light">Some verbose helpful text</h1>
            		</div>
            		<h1 className="text-xl font-semibold text-primary-700">679</h1>
            	</div>
            </div>
            </div>
        </div>


		<div id="add-client-modal" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 bg-gray-500 bg-opacity-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" tabIndex="-1" aria-hidden="true" >
			<div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
				
				<div className="relative bg-white rounded-lg mt-[200px] shadow dark:bg-gray-800">
					
					<div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
						<h3 className="text-xl font-semibold dark:text-white">
							New Client
						</h3>
						<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-toggle="add-client-modal">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
						</button>
					</div>
					<form action="#">
					<div className="p-6 space-y-6">
						
							<div className="grid grid-cols-6 gap-6">

								<div className="col-span-6 sm:col-span-3">
									<label htmlFor="riskreward_profile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Risk Reward
									</label>
									<input type="text" name="riskreward_profile" placeholder="Risk reward" id="riskreward_profile" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
								</div>
								<div className="col-span-6 sm:col-span-3">
									<label htmlFor="fill_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Fill price
									</label>
									<input type="text" name="fill_price" placeholder="Fill price" id="fill_price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
								</div>


								<div className="col-span-6 sm:col-span-3">
									<label htmlFor="exit_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Exit price
									</label>
									<input type="text" name="exit_price" placeholder="Exit price" id="exit_price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
								</div>
								<div className="col-span-6 sm:col-span-3">
									<label htmlFor="stoploss_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Stoploss
									</label>
									<input type="text" name="stoploss_price" placeholder="Stoploss" id="stoploss_price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
								</div>
								<div className="col-span-6 sm:col-span-3">
									<label htmlFor="takeprofit_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Takeprofit
									</label>
									<input type="text" name="takeprofit_price" placeholder="Takeprofit" id="takeprofit_price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
								</div>
								<div className="col-span-6 sm:col-span-3">
									<label htmlFor="execution_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Execution time
									</label>
									<input type="text" name="execution_time" placeholder="YYYY-MM-DD hh:mm:ss" id="execution_time" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
								</div>
								<div className="col-span-6 sm:col-span-3">
									<label htmlFor="exit_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Exit time
									</label>
									<input type="text" name="exit_time" placeholder="" id="exit_time" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
								</div>

								<div className="col-span-6">
									<label htmlFor="trade_review" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trade review</label>
									<textarea name="trade_review" placeholder="Lorem ipsum dolor et" id="trade_review" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
								</div>
							</div> 
						
					</div>
						
					<div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
						<button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit" >Create Trade</button>
					</div>
					</form>
				</div>
			</div>
		</div>

        </>
    )
}

Dashboard.propTypes = {
    dashboard: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    dashboard: state.client.dashboard,
})

export default connect(mapStateToProps, null)(Dashboard);
