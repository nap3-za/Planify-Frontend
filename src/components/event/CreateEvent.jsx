import React, { Fragment, useEffect, useState, useRef, Suspense } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PropTypes from  "prop-types"
import { connect } from "react-redux";

import { createEvent } from "../../reduxApp/actions/event/actions";
import { getFieldChoices } from "../../reduxApp/actions/app/actions";

import { Select, Label } from "flowbite-react";

import Spinner from "../../components/misc/Spinner";
import { getUrl } from "../../AppUrls";

import {
	FC_CREATE_UPDATE_EVENT,
	getOptions,
} from "../../FieldChoices"

import { initFlowbite } from "flowbite";



function CreateEvent(props) {
    useEffect(
        () => {
    		window.initFlowbite();
        }
    );

    // + + + Field Choices + + + 

    const [fieldChoices, setFieldChoices] = useState({
      clients: null,
    })

	function handleCreateEventClick(event) {
	    const populateFieldChoices = (data) => {setFieldChoices(data)}
      props.getFieldChoices(populateFieldChoices, FC_CREATE_UPDATE_EVENT);
			
	}

    let CLIENTS = [];
    if (fieldChoices !== null && fieldChoices.clients !== null) {
    	CLIENTS = getOptions("Client", fieldChoices.clients);
    }

	// - - - Field Choices - - -


	// + + + Form handling + + +

	const createEventForm = useRef(null);
	const [createEventData, setCreateEventData] = useState({
		symbol: null,
		journal: null, trading_model: null, entry_model: null,
		risk_appetite: null, riskreward_profile: null,
		order_type: null,
		fill_price: null, exit_price: null,
		stoploss_price: null, takeprofit_price: null,
		execution_time: null, exit_time: null,
		trade_review: null,	
	})

	function handleCreateEventChange(event) {
	  const { name, value } = event.target
	  event.preventDefault();
	  setCreateEventData((prevState) => {
			return {
			  ...createEventData,
			  [name]: value,
			};
	  });
	}

	function handleCreateEventSubmit(event) {
	  event.preventDefault();

	  props.createEvent(createEventData);
	  clearCreateEventForm();
	  
		if (props.clickEvent !== undefined) {
			props.clickEvent();
		}
	}

	function clearCreateEventForm() {
	  createEventForm.current && createEventForm.current.reset();
	}

	// - - - Form handling - - -



    return (
        <>
          <button onClick={handleCreateEventClick} type="button" data-modal-target="add-event-modal" data-modal-toggle="add-event-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
              Add Event
          </button>

		<div id="add-event-modal" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 bg-gray-500 bg-opacity-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" tabIndex="-1" aria-hidden="true" >
			<div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
				
				<div className="relative bg-white rounded-lg mt-[200px] shadow dark:bg-gray-800">
					
					<div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
						<h3 className="text-xl font-semibold dark:text-white">
							New Event
						</h3>
						<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-toggle="add-event-modal">
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
						<button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit" >Create Event</button>
					</div>
					</form>
				</div>
			</div>
		</div>

        </>
    )
}

CreateEvent.propTypes = {
    createEvent: PropTypes.object,
}


export default connect(null, { createEvent })(CreateEvent);
