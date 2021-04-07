import React from 'react';
                
const Pagination = ({ doctorsPerPage, totalDoctors, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDoctors / doctorsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav>
      <ul >
        {pageNumbers.map(number => (
          <li key={number} >
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