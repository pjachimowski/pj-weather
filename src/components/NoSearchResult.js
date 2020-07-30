import React from 'react';

function NoSearchResult() {
  return (
    <div>
      <h2> To check the weather please insert a valid name of the city :) </h2>
      <div className="no-search-result-icon">
      <i className="fas fa-cloud"></i>
      <i className="fas fa-cloud-sun-rain"></i> 
      <i className="fas fa-umbrella"></i> 
      <i className="far fa-snowflake"></i> 
      <i className="fas fa-smog"></i> 
      <i className="fas fa-cloud-moon"></i> 
      <i className="fas fa-sun"></i> 
       </div>
    </div>
  );
}

export default NoSearchResult;
