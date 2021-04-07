import React from 'react';

const DoctorsList = ({ doctors, loading }) => {
  if (loading) {
    return <h2>Here can be ur spinner :)</h2>;
  }
  return (
    <ul >
           {doctors.map(doctor => (
        <li key={doctor.id} >
          {doctor.firstName} {doctor.lastName}
          <br/>
          <p>
            {Array.isArray(doctor.speciality)? 
               doctor.speciality.map(item=>`${item} `) : doctor.speciality}
          </p>
        </li>
      ))}
      {}
    </ul>
  );
};

export default DoctorsList;
