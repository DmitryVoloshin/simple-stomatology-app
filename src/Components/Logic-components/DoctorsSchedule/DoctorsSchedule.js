import React from 'react';



const DoctrosSchedule = () =>{
   
  let schedule = {
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
let parsed = JSON.parse(schedule)


//  React.useEffect(()=>{
//     console.log("sup")
//     return () =>{
//         console.log('unmount')
//     }
//  },[])
 
//  console.log("pog")

    // I guess 

  //     setWorkingTime(schedule.appointments[i])

    // const [workingTime,setWorkingTime] = React.useState(null)
    // for(let i = 0;i < schedule.length;i++){
    //     for(let j = 0; j < schedule.appointments.length;j++){
           
    //     }
    // }
 
    // console.log(schedule.appointments[0])


    return (
        <div>
            {/* {
                schedule.appointments.map((item,idx)=>{
                    <div>{item}</div>
                })
            } */}
        </div>
    )
}

export default DoctrosSchedule