import React from 'react';

    
const schedule={
    "start": "10:00",
    "appointments": [
      {
        "start": "10:45",
        "duration": 45
      },
      {
        "start": "13:50",
        "duration": 20
      }
    ],
    "end": "15:00"
}

const DoctrosSchedule = (  ) =>{

  // The idea was to receive data and put them into a state, 
  //after which start and duration are summed up and, 
  //a new date is written into the state and then output
  //
  // const [duration,setDuration] = React.useState()
  // const [start,setStart] = React.useState()
  // React.useEffect(()=>{
  //   schedule.appointments.map((time)=>{ 
  //       setDuration(time)
  //       setStart(time.start)
  //   })
  // },[])

    return (
        <div>
          {
            schedule.appointments.map((start,idx)=>{
              return <div key={idx}>{start.start};{start.duration} </div>
            })
          }      
        </div>
    )
}

export default DoctrosSchedule