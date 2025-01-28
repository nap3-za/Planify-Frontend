import React, { Fragment } from "react";
import PropTypes from  "prop-types"
import { connect } from "react-redux";

function Dashboard(props) {
    const {user} = props;

    
    return (
        <Fragment>
            
        <div className="p-4 block sm:flex items-center justify-between rounded-lg  lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full mb-1">
                <div className="sm:flex">
                  <div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                      
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                        Dashboard
                    </h1>
                  </div>

                  <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                      <button type="button" data-modal-target="add-task-modal" data-modal-toggle="add-task-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                          <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                          Add Task
                      </button>
                      <button type="button" data-modal-target="add-event-modal" data-modal-toggle="add-event-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                          <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                          Add Event
                      </button>
                  </div>
                </div>
            </div>
        </div>

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

                  <button type="button" data-modal-target="add-journal-modal" data-modal-toggle="add-journal-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Conclude
                  </button>
                </div>

                <div className="grid xl:grid-cols-2 border-b">
                    
                    <div className="min-w-full py-6">
                        Event details
                    </div>

                    <div className="overflow-x-auto">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden shadow">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Task
                                            </th>
                                            <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 ">                        
                                          <td className="p-3 text-base whitespace-nowrap dark:text-white">
                                            something
                                          </td>
                                          <td className="p-3 text-base whitespace-nowrap dark:text-white">
                                            something
                                          </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

              </div>
              

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                    <div class="flex flex-col w-full h-full justify-around">
                        <div class="flex items-center space-x-8">
                            <div class="text-sm dark:text-white">In progress</div>
                            <div class="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                              <div class="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style={{width: "65%"}}></div>
                            </div>
                          </div>
                        <div class="flex items-center space-x-8">
                            <div class="text-sm dark:text-white">Paid</div>
                            <div class="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                              <div class="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style={{width: "65%"}}></div>
                            </div>
                        </div>
                        <div class="flex items-center space-x-8">
                            <div class="text-sm dark:text-white">High priority</div>
                            <div class="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                              <div class="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style={{width: "65%"}}></div>
                            </div>
                        </div>
                        <div class="flex items-center space-x-8">
                            <div class="text-sm dark:text-white">High profile</div>
                            <div class="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                              <div class="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style={{width: "65%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="px-4 pt-10 ">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800">
                  <div className="p-4 2xl:col-span-2 dark:border-gray-700 sm:p-6">
                    <div className="flex items-center justify-between border-b pb-4 ">
                      <div className="flex-shrink-0">
                        <span className="text-xl font-semibold leading-none text-gray-900 sm:text-2xl dark:text-white">
                            Event Type
                        </span>
                      </div>

                          <button type="button" data-modal-target="add-journal-modal" data-modal-toggle="add-journal-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                          </button>
                    </div>

                    <div className="border-b">

                        <div className="overflow-x-auto">
                            <div className="inline-block min-w-full align-middle">
                                <div className="overflow-hidden shadow">
                                    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                                        <thead className="bg-gray-100 dark:bg-gray-700">
                                            <tr>
                                                <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    Title
                                                </th>
                                                <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    client
                                                </th>
                                                <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    status
                                                </th>
                                                <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    date
                                                </th>
                                                <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    duration
                                                </th>
                                                <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    priority
                                                </th>
                                                <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    Bill status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 ">                        
                                              <td className="p-3 text-base whitespace-nowrap dark:text-white">
                                                something
                                              </td>
                                              <td className="p-3 text-base whitespace-nowrap dark:text-white">
                                                something
                                              </td>
                                              <td className="p-3 text-base whitespace-nowrap dark:text-white">
                                                something
                                              </td>
                                              <td className="p-3 text-base whitespace-nowrap dark:text-white">
                                                something
                                              </td>
                                              <td className="p-3 text-base whitespace-nowrap dark:text-white">
                                                something
                                              </td>
                                              <td className="p-3 text-base whitespace-nowrap dark:text-white">
                                                something
                                              </td>
                                              <td className="p-3 text-base whitespace-nowrap dark:text-white">
                                                something
                                              </td>


                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

            </div>
        </div>


        </Fragment>
    )
}

Dashboard.propTypes = {
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    user: state.account.user,
})

export default connect(mapStateToProps)(Dashboard);



