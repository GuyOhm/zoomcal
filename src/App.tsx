import React from 'react';
import FullCalendar, { DateSelectArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

function App() {

  const handleDateSelect = (date: DateSelectArg) => {
    console.log(date);
  }
  
  return (
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
        initialView="timeGridWeek"
        selectable={true}
        selectMirror={true}
        select={handleDateSelect}
      />
  );
}

export default App;
