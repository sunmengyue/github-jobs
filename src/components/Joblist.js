import React from 'react';
import Job from './Job';

const Joblist = ({ jobs }) => {
  const jobList = jobs.map((job) => <Job key={job.id} job={job} />);

  return <div>{jobList}</div>;
};

export default Joblist;
