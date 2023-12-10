'use client'
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from './firebase.config';

export default function Home() {
  const [complains, setComplains] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const complainsRef = ref(database, 'Complains');
    
    // Fetch data from Firebase
    onValue(complainsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert object to an array for easier mapping
        const complainsArray = Object.values(data);
        setComplains(complainsArray);

        // Extract headers dynamically from the first item's keys
        const firstItemKeys = Object.keys(complainsArray[0]);
        setHeaders(firstItemKeys);
      }
    });
  }, []);

  return (
    <main className="container mx-auto">
      <h1 className='text-4xl font-bold text-center my-10'>Fetched Data of Complains</h1>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border border-gray-400 px-4 py-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {complains.map((complain, index) => (
            <tr key={index}>
              {headers.map((header, index) => (
                <td key={index} className="border border-gray-400 px-4 py-2">
                  {complain[header]}
                  {header === 'imageURL' && <img src={complain[header]} alt={`Image for ${complain.id}`} />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
