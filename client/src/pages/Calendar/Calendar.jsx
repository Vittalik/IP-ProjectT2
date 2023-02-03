import React, { Component, useState, useRef } from "react";
import ReactDOM, {render} from "react-dom";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

import { Calendar, dateFnsLocalizer, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import TimeRange from 'react-time-range';
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment"
import 'moment/locale/ro'; 
import { ro } from 'date-fns/locale'

import { Overlay, Tooltip, Button, Row, Col } from "react-bootstrap";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Calendar.css";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from "./Popup.scss";
import { TextField } from "react-text-field";

import { Link, useLocation } from 'react-router-dom';


const locales = {
    'ro': ro,
};

const localizer = momentLocalizer(moment)

const localizerr = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  localizer
});


const events = [];

const IconStyle = {
  cursor: "pointer"
};


const contentStyle = { background: '#000' };
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const arrowStyle = { color: '#000' }; // style for an svg element


const TooltipContent = ({onClose, event}) => {
  var echipa1 = document.getElementById("select_echipa1");
  var echipa2 = document.getElementById("select_echipa2");
  var team1_logo = "/logos/" + echipa1.options[echipa1.selectedIndex].value + ".jpg";
  var team2_logo = "/logos/" + echipa2.options[echipa2.selectedIndex].value + ".jpg";
  var scor_e1 = document.getElementById("scor_echipa1").value;
  var scor_e2 = document.getElementById("scor_echipa2").value;
//"https://assets.codepen.io/285131/chelsea.svg"
  return (

  <div class="container_match">
	<div class="match">
		<div class="match-header">
			<div class="match-tournament">{event.title}</div>
		</div>
		<div class="match-content">
			<div class="column">
				<div class="team team--home">
					<div class="team-logo">
						
						<img src= {team1_logo}/>
					</div>
					<h2 class="team-name">{echipa1.options[echipa1.selectedIndex].text}</h2>
				</div>
			</div>
			<div class="column">
				<div class="match-details">
					<div class="match-score">
						<span class="match-score-number match-score-number--leading">{scor_e1}</span>
						<span class="match-score-divider">:</span>
						<span class="match-score-number">{scor_e2}</span>
					</div>
				</div>
			</div>
			<div class="column">
				<div class="team team--away">
					<div class="team-logo">
				
						<img src= {team2_logo} />
					</div>
					<h2 class="team-name">{echipa2.options[echipa2.selectedIndex].text}</h2>
				</div>
			</div>
		</div>
	</div>
</div>
    )}

function Event(event) {
  const [showTooltip, setShowTooltip] = useState(false);

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  const openTooltip = () => {
    setShowTooltip(true);
  }
  const ref = useRef(null);

  const getTarget = () => {
    return ReactDOM.findDOMNode(ref.current);
  };
  return (
    <div ref={ref}>
      <span onMouseOver={openTooltip}>{[event.title, event.numeEchipa1]}</span>
      <Overlay
        rootClose
        target={getTarget}
        show={showTooltip}
        placement="top"
        onHide={closeTooltip}
      >
        <Tooltip id="test">
          <TooltipContent event={event} onClose={closeTooltip} />
        </Tooltip>
      </Overlay>
    </div>
  );
}
//==END==



const Calendarr = () => {


  //constants and func declarations

  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" ,numeEchipa1:"", numeEchipa2:""});
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {

        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("Conflict in stabilirea datei"); 
                break;
             }
             if (newEvent.title === "")
             {
                alert("titlu eveniment invalid");
                break;
             }
             
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }

    
const [selected, setSelected] = useState();

const handleSelected = (event) => {
    setSelected(event);
    console.info('[handleSelected - event]', event);
};




  return (

    

    <div className="Calendarrr">
      {/* <h1 id='activitati'>Activități C.S.M.</h1> */}
    <div>
        <div className='match-input'>
        <h4 id='adauga-eveniment'>Creează un eveniment nou:</h4>
        <input className='input-calendar' type="text" placeholder="Numele meciului" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />

        
        <div className = 'input-calendar'>Echipa 1:
        <select id="select_echipa1">
        <option value="Suceava">CSM Suceava</option>
        <option value="Lugoj">CSM Lugoj</option>
        <option value="Bucuresti">CSM Bucuresti</option>
        </select><br></br>
        <input id="scor_echipa1" type="text" placeholder="Scor" style={{ width: "20%", marginRight: "10px" }} />
        </div>

        <div className = 'input-calendar'>Echipa 2:
        <select id="select_echipa2">
        <option value="Suceava">CSM Suceava</option>
        <option value="Lugoj">CSM Lugoj</option>
        <option value="Bucuresti">CSM Bucuresti</option>
        </select><br></br>
        <input id="scor_echipa2" type="text" placeholder="Scor" style={{ width: "20%", marginRight: "10px" }} />
        </div>


        <div><DatePicker className='input-calendar' timeFormat="HH:mm" showTimeSelect timeIntervals={5} dateFormat="dd-MM HH:mm" placeholderText="Data inceput" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} /></div>
        <DatePicker className='input-calendar' timeFormat="HH:mm" showTimeSelect timeIntervals={5} dateFormat="dd-MM HH:mm" placeholderText="Data final" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
        <button className='add-button'stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
            Adaugă
        </button>

      </div>
        <p className='calendar-message'>Calendar meciuri:</p>
        <Calendar
        tooltipAccessor={null}
        components={{ event: Event }}
        selected={selected}
        onSelectEvent={handleSelected}
         messages={{
          next: 'Inainte',
          previous: 'Inapoi',
          today: 'Astazi',
          month: 'Luna',
          week: 'Saptamana',
          day: 'Ziua',
          work_week: 'Рабочая неделя',
          allDay: 'Весь день',
          yesterday: 'Вчера',
          tomorrow: 'Завтра',
          noEventsInRange: 'Eveniment invalid',
          showMore: function showMore(total) {
            return '+' + total + 'событий';
          }
}} localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
    </div>
    
</div>
    
  )
}

//document.getElementById("insert_team1").addEventListener("input", () => console.log(document.getElementById("insert_team1").value));
export default Calendarr