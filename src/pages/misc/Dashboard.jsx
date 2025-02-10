import React, { Fragment, useEffect, useState, useRef, Suspense } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PropTypes from  "prop-types"
import { connect } from "react-redux";

import { createEvent } from "../../reduxApp/actions/event/actions";
import { loadDashboard, getFieldChoices } from "../../reduxApp/actions/app/actions";

import { Select, Label } from "flowbite-react";

import Spinner from "../../components/misc/Spinner";
import { getUrl } from "../../AppUrls";

import {
    FC_CREATE_UPDATE_EVENT,
    getOptions,
} from "../../FieldChoices"

import { initFlowbite } from "flowbite";

import CreateEvent from "../../components/event/CreateEvent";
import CreateTask from "../../components/event/CreateTask";



function Dashboard(props) {
    const { dashboard } = props;

    useEffect(
        () => {
            window.initFlowbite();
            if (dashboard.stats === null) {
                props.loadDashboard();
            }
        }
    )

    const { event } = dashboard;

    // +++ Components - events by type 
    const { events } = dashboard;

    let eventsByType = [];
    if (events !== null) {
        for (var i = events.length - 1; i >= 0; i--) {
            let eventsData = []
            const { type, stats, data } = events[i];

            for (var j = data.length - 1; j >= 0; j--) {
                const item = data[j]

                eventsData.push(
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.title}
                        </th>
                        <td class="px-6 py-4">
                            {item.client_display}
                        </td>
                        <td class="px-6 py-4">
                            {item.date_time_display}
                        </td>
                        <td class="px-6 py-4">
                            {item.duration}
                        </td>
                        <td class="px-6 py-4">
                            {item.priority_display}
                        </td>
                        <td class="px-6 py-4">
                            {item.bill_status_display}
                        </td>
                    </tr>
                )
            }

            eventsByType.push(
                <div className="px-4 pt-10 ">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800">
                          <div className="p-4 2xl:col-span-2 dark:border-gray-700 sm:p-6">
                            <div className="flex items-center justify-between border-b pb-4 ">
                              <div className="flex-shrink-0">
                                <span className="text-xl font-semibold leading-none text-gray-900 sm:text-2xl dark:text-white">
                                    { type }
                                </span>
                              </div>

                                  <button type="button" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                  </button>
                            </div>

                            <div className="">

                                <div className="overflow-x-auto">
                                    <div className="inline-block min-w-full align-middle">
                                        <div className="overflow-hidden shadow">
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
                                                            Title
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Client
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Date & Time
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Duration
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Priority
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Bill Status
                                                        </th>
                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {...eventsData}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>

                    </div>
                </div>

            )
        }
      }
      // --- Components - events by type


      // +++ components - event tasks
    const { tasks } = event;

    let eventTasks = [];
    if (tasks !== undefined && tasks !== null && tasks !== []) {
        for (var i = tasks.length - 1; i >= 0; i--) {
            const task = tasks[i];

            eventTasks.push(
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {task.details}
                    </th>
                    <td class="px-6 py-4">
                        {task.due_date}
                    </td>
                    <td class="">
                        <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                            {task.status_display}                           
                        </span>
                    </td>
                </tr>
            )
        }
      }

      // --- components - event tasks


      // --- components - stats

    const { stats } = dashboard;

    let eventStats = [];
    if (stats !== undefined && stats !== null && stats !== []) {
        for (const [statTitle, statValue] of Object.entries(stats)){
            eventStats.push(
                <div className="flex flex-row justify-between align-center items-center border border-gray-200 bg-white rounded-lg shadow-md py-6 px-8">
                    <div>
                        <h1 className="text-xl font-semibold">{ statTitle }</h1>
                        <h1 className="text-sm font-light">{ statValue[0] }</h1>
                    </div>
                    <h1 className="text-xl font-semibold text-primary-700">{ statValue[1] }</h1>
                </div>
            )
        }
      }



      // --- components - stats


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
                      <CreateEvent />
                  </div>
                </div>
            </div>
        </div>

        { event !== undefined && event.client !== undefined ?
            <div className="px-4 pt-6">
                <div className="grid gap-4 xl:grid-cols-5 2xl:grid-cols-3">
                  
                  <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm xl:col-span-4 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="flex items-center justify-between border-b pb-4 ">
                      <div className="flex-shrink-0">
                        <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">
                            { event.title }
                        </span>
                        <h3 className="text-base font-light text-gray-500 dark:text-gray-400">
                            { event.client.name }
                        </h3>
                      </div>

                      <button type="button"className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                          Conclude
                      </button>
                    </div>

                    <div className="grid xl:grid-cols-5 border-b">
                        
                        <div className="xl:col-span-2 min-w-full py-6">
                            { event.details }
                        </div>

                            <div class="xl:col-span-3 relative overflow-x-auto">

                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                title
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                date
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {...eventTasks}
                                    </tbody>
                                </table>
                            </div>
                    </div>
                  </div>
                  

                    <div className="xl:col-span-1 p-3 w-full">
                        <div className="grid gap-4 h-full grid-cols-1">
                            {...eventStats}
                        </div>
                    </div>
                </div>
            </div>
            : <></>
        }

        <>
            {...eventsByType}
        </>

        </Fragment>
    )
}

Dashboard.propTypes = {
    dashboard: PropTypes.object.isRequired,

    loadDashboard: PropTypes.func,
}

const mapStateToProps = state => ({
    dashboard: state.app.dashboard,
})

export default connect(mapStateToProps, { loadDashboard })(Dashboard);



