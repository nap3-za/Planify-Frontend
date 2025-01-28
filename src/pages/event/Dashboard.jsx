import React, { Fragment } from "react";
import PropTypes from  "prop-types"
import { connect } from "react-redux";


function Dashboard(props) {


    return (
        <>
        	
        <div className="px-4 pt-6 w-full">
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

        <div className="px-4 pt-6">
            <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">


            <div className="2xl:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800">
                  <div className="p-4 2xl:col-span-2 dark:border-gray-700 sm:p-6">
                    <div className="flex items-center justify-between border-b pb-4 ">
                      <div className="flex-shrink-0">
                        <span className="text-xl font-semibold leading-none text-gray-900 sm:text-2xl dark:text-white">
                            January
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


                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

            </div>
              

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
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
        </div>
        </>
    )
}

Dashboard.propTypes = {
    user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    user: state.authentication.user,
})

export default connect(mapStateToProps, null)(Dashboard);
