import React from 'react';
import './DoctorsList.css'
                

const Pagination = ({ doctorsPerPage, totalDoctors, paginate }) => {

const [pageNumbers, setPageNumbers] = React.useState([])

React.useEffect(() => {
	const tempPageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalDoctors / doctorsPerPage); i++) {
    tempPageNumbers.push(i);
  }
  setPageNumbers(tempPageNumbers);
}, [totalDoctors, doctorsPerPage])



  return (
    <nav className="pagination-block_nav">
      <ul className="pagination-nav_list">
        {pageNumbers.map(number => (
          <li key={number} className="pagination-nav_item">
            <button onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;