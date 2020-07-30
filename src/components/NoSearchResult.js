import React from 'react';

function NoSearchResult() {
  return (
    <div>
      <h2> To check the weather please insert a valid name of the city :) </h2>
      <div className="no-search-result-icon">
      <i class="fas fa-cloud"></i>
      <i className="fas fa-cloud-sun-rain"></i> 
      <i class="fas fa-umbrella"></i> 
      <i class="far fa-snowflake"></i> 
      <i class="fas fa-smog"></i> 
      <i class="fas fa-cloud-moon"></i> 
      <i class="fas fa-sun"></i> 
       </div>
    </div>
  );
}

export default NoSearchResult;
