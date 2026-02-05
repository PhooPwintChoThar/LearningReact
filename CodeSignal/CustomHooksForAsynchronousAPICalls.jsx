import React from 'react';
import useFetchSpaceships from './useFetchSpaceships';

const MarsSpaceships = () => {
  // Use the custom hook to fetch Mars spaceship data
  const {data: spaceships, loading} = useFetchSpaceships('https://api-regional.codesignalcontent.com/spaceships/mars');

  return loading ? <div>Loading...</div> : <div>{spaceships.map(ship => <p>{ship.name}</p>)}</div>;
};

export default MarsSpaceships;
