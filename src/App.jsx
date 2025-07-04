import React from 'react';
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
 } from 'react-router-dom';
 import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage';
import JobPage,{ jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPag from './pages/EditJobPage'


const App = () => {
  // Add new job 
  const addJob = async (newJob) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
};

// Delete Job
const deleteJob = async (id) => {
   const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
};

// Update Job
const updatedJob = async (job) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(job),
    });
}

const router = createBrowserRouter (
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  <Route index element={ <HomePage />} />
  <Route path='/jobs' element={ <JobsPage />} />
  <Route path='/add-job' element={ <AddJobPage addJobSubmit={addJob}/>} />
  <Route path='/edit-job/:id' element={ <EditJobPag updateJobSubmit={updatedJob} /> } loader={jobLoader} />
  <Route path='/jobs/:id' element={ <JobPage deleteJob={ deleteJob } />} loader={jobLoader} />
  <Route path='*' element={ <NotFoundPage />} />
  </Route>)
);

  return <RouterProvider router={router}/>
};

export default App