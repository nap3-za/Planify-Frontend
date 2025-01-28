import React, { Fragment, useEffect } from "react";
import PropTypes from  "prop-types"
import { connect } from "react-redux";
import { initFlowbite } from "flowbite";


function Event(props) {
    const {user} = props;
    useEffect(
        () => {
    		window.initFlowbite();
        }
    )
    
    return (
        <Fragment>

        <div className="px-4 pt-6">
            <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
              
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="flex items-center justify-between border-b pb-4 ">
                  <div className="flex-shrink-0">
                    <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">
                        Event Title
                    </span>
                    <h3 className="text-base font-light text-gray-500 dark:text-gray-400">
                        Client details
                    </h3>
                  </div>
                  <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                  <button type="button" data-modal-target="delete-event-modal" data-modal-toggle="delete-event-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Conclude
                  </button>
                  <button type="button" data-modal-target="update-event-modal" data-modal-toggle="update-event-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Update
                  </button>

                  <button type="button" data-modal-target="delete-event-modal" data-modal-toggle="delete-event-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Delete
                  </button>
                  </div>
                </div>

                <div className="grid xl:grid-cols-2 border-b">
                    
                    <div className="xl:col-span-1 min-w-full py-6">
                        Event details here
                    </div>
                    <div className="xl:col-span-1 min-w-full py-6">
                        Some Event details here
                    </div>
                </div>
              </div>
              

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                    <div className="flex flex-col">
                    	<div className="flex flex-row items-center justify-between pb-4">
	                    	<div className="text-xl font-bold">
	                    		Client-Name Profile
	                    	</div>

	                          <button type="button" data-modal-target="delete-event-modal" data-modal-toggle="delete-event-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
	                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
	                          </button>
                    	</div>
                    	<div className="font-light">
                    		details here
                    	</div>
                    </div>
                </div>
            </div>
        </div>


        <div className="flex  justify-center px-4 pt-8">
            <div class="w-full bg-white border px-6 py-2 border-gray-200 rounded-lg shadow-md xl:col-span-3 relative overflow-x-auto">

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
                                details
                            </th>
                            <th scope="col" class="px-6 py-3">
                                status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                due date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                priority
                            </th>
                            <th scope="col" class="px-6 py-3">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          
			                <td scope="col" class="">
			                    <div class="flex items-center">
			                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
			                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
			                    </div>
			                </td>

                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </td>
                            <td scope="row" class="px-6 py-4">
                                D
                            </td>
                            <td scope="row" class="px-6 py-4">
                                05 Mar 2025
                            </td>


                            <td class="px-6 py-4">
                                Low
                            </td>
                            <td class="px-6 py-4 space-x-4">
						      <button type="button" data-modal-target="update-task-modal" data-modal-toggle="update-task-modal" className="inline-flex items-center text-sm font-medium text-center text-dark rounded-lg border-primary-700 hover:bg-primary-800 hover:text-white focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
						          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
						      </button>

								<button type="button" data-modal-target="delete-task-modal" data-modal-toggle="delete-task-modal" className="inline-flex items-center text-sm font-medium text-center text-dark border-red-600 rounded-lg hover:bg-red-800 focus:ring-4 hover:text-white focus:ring-red-300 dark:focus:ring-red-900">
					            	<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
					          	</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

		<div id="update-event-modal" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 bg-gray-500 bg-opacity-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" tabIndex="-1" aria-hidden="true" >
			<div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
				
				<div className="relative bg-white rounded-lg mt-[200px] shadow dark:bg-gray-800">
					
					<div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
						<h3 className="text-xl font-semibold dark:text-white">
							Update Event
						</h3>
						<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-toggle="update-event-modal">
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

		<div id="update-task-modal" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 bg-gray-500 bg-opacity-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" tabIndex="-1" aria-hidden="true" >
			<div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
				
				<div className="relative bg-white rounded-lg mt-[200px] shadow dark:bg-gray-800">
					
					<div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
						<h3 className="text-xl font-semibold dark:text-white">
							Update Task
						</h3>
						<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-toggle="update-task-modal">
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

		<div id="delete-event-modal" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 bg-gray-500 bg-opacity-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" tabIndex="-1" aria-hidden="true" >
            <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">      
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">      
                    <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                        <h3 className="text-xl font-semibold dark:text-white">
                            Delete Trade
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-toggle="delete-event-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                    </div>
                    
                    <div className="flex flex-row space-x-4 items-center align-center p-6">
                      <svg class="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <h3 class="text-lg text-gray-500 dark:text-gray-400">Are you sure you want to delete this event? This action is irreversible</h3>
                    </div>
                        
                      <div className="items-center px-6 py-3 space-x-4 border-t border-gray-200 rounded-b dark:border-gray-700">
                          <button data-modal-toggle="delete-event-modal" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-900">
                              Yes, I'm sure
                          </button>
                          <button data-modal-toggle="delete-event-modal" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                              No, cancel
                          </button>
                      </div>
                </div>
            </div>
		</div>


		<div id="delete-task-modal" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 bg-gray-500 bg-opacity-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" tabIndex="-1" aria-hidden="true" >
            <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">      
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">      
                    <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                        <h3 className="text-xl font-semibold dark:text-white">
                            Delete Task
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-toggle="delete-task-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                    </div>
                    
                    <div className="flex flex-row space-x-4 items-center align-center p-6">
                      <svg class="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <h3 class="text-lg text-gray-500 dark:text-gray-400">Are you sure you want to delete this task? This action is irreversible</h3>
                    </div>
                        
                      <div className="items-center px-6 py-3 space-x-4 border-t border-gray-200 rounded-b dark:border-gray-700">
                          <button data-modal-toggle="delete-task-modal" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-900">
                              Yes, I'm sure
                          </button>
                          <button data-modal-toggle="delete-task-modal" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                              No, cancel
                          </button>
                      </div>
                </div>
            </div>
		</div>

        </Fragment>
    )
}

Event.propTypes = {
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    user: state.account.user,
})

export default connect(mapStateToProps)(Event);



