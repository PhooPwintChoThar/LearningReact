import { useState, useEffect } from 'react';

function CountryStats() {
  // TODO: Define state variables for countryName with default 'France' and countryInfo as an object with properties name and capital
  const [countryName , setCountryName]=useState('France');
  const [countryInfo , setcountryInfo]=useState({name:'',capital:''}); 

  // TODO: Use the useEffect hook to fetch country stats when countryName changes
  useEffect(()=>{
    fetch(`https://api-regional.codesignalcontent.com/countryStats/search?name=${countryName}`)
    .then(response=>
    {
      if(!response.ok){
        throw Error('e')
      }
      return response.json();
    })
    .then(data => setcountryInfo(data.data))
    .catch(error=> console.log('error',error))
    
  },[countryName])
  // TODO: Inside useEffect, fetch the data from the API and update countryInfo state
  // Handle the loading state, error state, and update the countryInfo with fetched data

  return <p> name is {countryInfo.name} . capital is {countryInfo.capital} </p>;
  // TODO: Render the countryInfo on the screen, showing country name and capital

}

export default CountryStats;
