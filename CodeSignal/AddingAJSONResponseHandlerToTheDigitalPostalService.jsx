import { useState, useEffect } from 'react';

function PostOffice() {
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
    .then(response => {
      if (!response.ok) {throw Error('Error occurred')}
      return new Promise(resolve => setTimeout(resolve, 3000)).then(() => response.json());
    })
      // TODO: Add a line here to handle the response and throw an error if the response is not ok
      // TODO: Add a line to parse the response body as JSON
      // TODO: If any error occur, set the error state to true, otherwise set it to false
      .catch(() => setError('No letters today. Please try again later.'));
  }, []);

  return (
    <div className="PostOffice">
      {error ? <p>Error: {error}</p> : error === null ? 'Checking the mailbox...' : 'Success!'}
    </div>
  );
}

export default PostOffice;
