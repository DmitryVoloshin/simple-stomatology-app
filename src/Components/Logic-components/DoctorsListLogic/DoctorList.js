import React from 'react';
import DoctrosSchedule from '../DoctorsSchedule/DoctorsSchedule';

import './DoctorsList.css'

const DoctorsList = ({ doctors, loading }) => {
  if (loading) {
    return <h2>Here can be ur spinner :)</h2>;
  }
  return (
    <ul className="doctors-list_block">
           {doctors.map(doctor => (
        <li key={doctor.id} className="doctors-list_item">
          <a href={doctor.link} className="doctors-list_links">
          <img src={doctor.avatar} className="doctors-item_avatar" alt="something gone wrong"/>
          <p className="doctors-item_name">{doctor.firstName} {doctor.lastName}</p>
          <p className="doctors-item_speciality">
            {Array.isArray(doctor.speciality)? 
               doctor.speciality.map(item=>`${item} `) : doctor.speciality}
          </p>
          <DoctrosSchedule/>
          </a>
        </li>
      ))}
      {}
    </ul>
  );
};

export default DoctorsList;
