import React, { Fragment } from "react";
import PropTypes from  "prop-types"
import { connect } from "react-redux";

function Event(props) {
    const {user} = props;

    
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
                  <button type="button" data-modal-target="add-journal-modal" data-modal-toggle="add-journal-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Conclude
                  </button>
                  <button type="button" data-modal-target="add-journal-modal" data-modal-toggle="add-journal-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Update
                  </button>

                  <button type="button" data-modal-target="add-journal-modal" data-modal-toggle="add-journal-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Delete
                  </button>
                  </div>
                </div>

                <div className="grid xl:grid-cols-5 border-b">
                    
                    <div className="xl:col-span-2 min-w-full py-6">
                        Event details here
                    </div>
                    <div className="xl:col-span-3 min-w-full py-6">
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

	                          <button type="button" data-modal-target="add-journal-modal" data-modal-toggle="add-journal-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
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
            <div class="md:w-4/5 bg-white border px-6 py-2 border-gray-200 rounded-lg shadow-md xl:col-span-3 relative overflow-x-auto">

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
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                        </tr>

                    </tbody>
                </table>
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



