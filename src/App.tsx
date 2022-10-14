import React from 'react';
import FullCalendar, { DateSelectArg, EventContentArg, EventSourceInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

function App() {

  const handleDateSelect = (date: DateSelectArg) => {
    console.log(date);
  }

  const loadEvents = (): EventSourceInput => {
    return [
      {
        title: 'event 1',
        start: "2022-10-12T06:30:00.000Z",
        end: "2022-10-12T08:00:00.000Z",
      }
    ]
  }



  return (
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
        initialView="timeGridWeek"
        initialEvents={loadEvents()}
        eventContent={renderEventContent}
        selectable={true}
        selectMirror={true}
        select={handleDateSelect}
      />
  );
}

export default App;

function renderEventContent(event: EventContentArg) {
  return (
    <>
      <b>{event.timeText} - </b>
      <i>{event.event.title}</i>
    </>
  )
}

