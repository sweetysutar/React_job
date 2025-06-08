import React from 'react';
import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

  const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchJobs = async () => {
      const apiUrl = isHome ? `${import.meta.env.VITE_API_URL}/jobs?_start=0&_end=3` : `${import.meta.env.VITE_API_URL}/jobs`
      try {
        await new Promise(res => setTimeout(()=>{res()}, 1000));
        const res = await fetch(apiUrl);

        const data = await res.json();
        setJobs(data);
        } catch (error) {
          console.log('Error fetching data', error)
        } finally {
          setLoading(false);
        }
    };

    fetchJobs();
  }, []);

  // console.log(import.meta.env.VITE_API_URL);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
          { loading ? (
            <Spinner loading={loading} />
          ) :(
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
            <JobListing key={job.id} job={job}/>
          ))}
            </div>
          ) }
      </div>
    </section>
  );
};

export default JobListings;
