import React, { useState, useEffect } from 'react';
import Pagination from './Pagintaion'
import axios from 'axios';
import DoctorsList from './DoctorList';


const DoctorsBlock = () => {

  const [doctors,setDoctors] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsPerPage] = useState(9);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://5fe21e077a94870017682132.mockapi.io/api/testtask/doctors');

        setDoctors(res.data)
      setLoading(false);
      console.log(res.data)
    };
    fetchPosts();
  }, []);

  // Getting info about how many doctors on page
  const indexOfLastDoc = currentPage * doctorsPerPage;
  const indexOfFirstDoc = indexOfLastDoc - doctorsPerPage;
  const docsOnPage = doctors.slice(indexOfFirstDoc, indexOfLastDoc);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  

  return (
    <div>
        <DoctorsList doctors={docsOnPage} loading={loading}/>
        <Pagination
        doctorsPerPage={doctorsPerPage}
        totalDoctors={doctors.length}
        paginate={paginate}
        />
    </div>
  );
};

export default DoctorsBlock;