import React from 'react';


const schedule = {
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


const DoctrosSchedule = () =>{

    // I guess 



    // const [workingTime,setWorkingTime] = useState([])
    // for(let i = 0;i < schedule.appointments.length;i++){
    //     setWorkingTime(schedule.appointments[i])
    // }
    // console.log(workingTime)
    console.log(schedule.appointments)


    return (
        <div>
            {
                schedule.appointments.map((item,idx)=>{
                    <div><p>{item}</p></div>
                })
            }
        </div>
    )
}

export default DoctrosSchedule