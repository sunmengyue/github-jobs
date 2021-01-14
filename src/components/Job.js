import react from 'react';
import '../css/Job.css';

const Job = ({ job }) => {
  return (
    <div className='job-container'>
      <div className='job-desc'>
        <div className='logo'>
          <img src={`${job.company_logo}`} alt='job logo' />
        </div>
        <div className='job'>
          <p className='job-company'>{job.company}</p>
          <p className='job-title'>{job.title}</p>
          <p className='job-type'>{job.type}</p>
        </div>
      </div>
      <div className='location-time'>
        <div className='location'>
          <i class='fa fa-globe' aria-hidden='true'></i>
          {job.location}
        </div>
        <div className='time'>
          <i className='fa fa-clock-o'></i>
          {new Date(job.created_at).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Job;
