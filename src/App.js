import React, { useState } from 'react';
import './App.css'
// import katty from "./assets/katty.jpeg";



// const internimages ={
//  1: katty,
// };

const Intern = ({ name, picture, info, overallGrade, assignments }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="intern-card">
      {picture && <img src={picture} alt={name} className="intern-picture" />}
      <div className="intern-info">
        <h3>{name}</h3>
        <p>{info}</p>
      </div>
      <div className="progress">
        <p>Overall Grade: {overallGrade}</p>
        <div className="progress-bar">
          {/* Update width based on overallGrade */}
          <div style={{ width: `${overallGrade * 10}%` }}></div>
        </div>
      </div>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Assignments'}
      </button>
      {showDetails && (
        <div className="assignment-details">
          <h4 className="assignment">Assignments</h4>
          <ul>
            {assignments.map((assignment) => (
              <li key={assignment.name}>
                {assignment.name} - Grade: {assignment.grade}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const InternTracker = () => {
  const [interns] = useState([
    {
      name: 'Osinachi',
      picture: 'https://via.placeholder.com/150', 
      info: 'Frontend Intern',
      overallGrade: 99.5,
      assignments: [
        { name: 'Project 1', grade: 80 },
        { name: 'Midterm Exam', grade: 90 },
      ],
    },
    {
      name: 'Khalifa Bin zaheed',
      picture: 'https://via.placeholder.com/150',
      info: 'Frontend intern',
      overallGrade: 92,
      assignments: [
        { name: 'Social Media Campaign', grade: 95 },
        { name: 'Market Research Report', grade: 90 },
      ],
    },
     {
    name: 'Asante',
      picture: 'https://via.placeholder.com/150', 
      info: 'Frontend Intern',
      overallGrade: 15,
      assignments: [
        { name: 'Project 1', grade: 80 },
        { name: 'Midterm Exam', grade: 90 },
      ],
    },
    {
      name: 'Benjamin',
      picture: 'https://via.placeholder.com/150', 
      info: 'Frontend Intern',
      overallGrade: 72,
      assignments: [
        { name: 'Project 1', grade: 80 },
        { name: 'Midterm Exam', grade: 90 },
      ],
    },
    {
      name: 'Ella',
      picture: 'https://via.placeholder.com/150', 
      info: 'Frontend intern',
      overallGrade: 100,
      assignments: [
        { name: 'Social Media Campaign', grade: 95 },
        { name: 'Market Research Report', grade: 90 },
      ],
    },
     {
    name: 'Chisom',
      picture: 'https://via.placeholder.com/150', 
      info: 'Frontend Intern',
      overallGrade: 99,
      assignments: [
        { name: 'Project 1', grade: 80 },
        { name: 'Midterm Exam', grade: 90 },
      ],
    },
    {
      name: 'Adora',
      picture: 'https://via.placeholder.com/150', 
      info: 'Frontend Intern',
      overallGrade: 89,
      assignments: [
        { name: 'Project 1', grade: 80 },
        { name: 'Midterm Exam', grade: 90 },
      ],
    },
    {
      name: 'Chizzy',
      picture: 'https://via.placeholder.com/150', 
      info: 'Frontend intern',
      overallGrade: 95,
      assignments: [
        { name: 'Social Media Campaign', grade: 95 },
        { name: 'Market Research Report', grade: 90 },
      ],
    },
     {
    name: 'Nmesoma',
      picture: 'https://via.placeholder.com/150', 
      info: 'Frontend Intern',
      overallGrade: 30,
      assignments: [
        { name: 'Project 1', grade: 80 },
        { name: 'Midterm Exam', grade: 20 },
      ],
    },
    {
      name: 'Shino',
      picture: 'https://via.placeholder.com/150', 
      info: 'Frontend Intern',
      overallGrade: 85,
      assignments: [
        { name: 'Project 1', grade: 80 },
        { name: 'Midterm Exam', grade: 90 },
      ],
    },
    {
      name: 'Oyibo',
      picture: 'https://via.placeholder.com/150', 
      info: 'Frontend intern',
      overallGrade: 92,
      assignments: [
        { name: 'Social Media Campaign', grade: 95 },
        { name: 'Market Research Report', grade: 90 },
      ],
    },
     {
    name: 'Smart',
      picture: 'https://via.placeholder.com/150', 
      info: 'Frontend Intern',
      overallGrade: 85,
      assignments: [
        { name: 'Project 1', grade: 80 },
        { name: 'Midterm Exam', grade: 90 },
      ],
    },
    {
      name: 'Kathy',
      picture: './images/katty.jpeg', 
      info: 'Frontend Intern',
      overallGrade: 60,
      assignments: [
        { name: 'Project 1', grade: 80 },
        { name: 'Midterm Exam', grade: 90 },
      ],
    },
    {
      name: 'Mobility',
      picture: 'https://via.placeholder.com/150', 
      info: 'Frontend intern',
      overallGrade: 92,
      assignments: [
        { name: 'Social Media Campaign', grade: 95 },
        { name: 'Market Research Report', grade: 90 },
      ],
    },
     {
    name: 'Commrade',
      picture: 'https://via.placeholder.com/150', 
      info: 'Frontend Intern',
      overallGrade: 85,
      assignments: [
        { name: 'Project 1', grade: 80 },
        { name: 'Midterm Exam', grade: 90 },
      ],
    },

    
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState('name'); 

  const filteredInterns = interns.filter((intern) =>
    intern.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const sortedInterns = [...filteredInterns].sort((a, b) => {
    if (sortCriteria === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortCriteria === 'overallGrade') {
      return b.overallGrade - a.overallGrade; 
    }
    return 0;
  });

  return (
    <div className="app">
      <h1 className='heading' >Intern Score Tracker</h1>
      <input className="input"
        type="text"
        placeholder="Search interns..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select className="sort" value={sortCriteria} onChange={handleSortChange}>
        <option value="name">Sort by Name</option>
        <option value="overallGrade">Sort by Overall Grade (Desc)</option>
      </select>
      <div className="intern-cards">
        {sortedInterns.map((intern) => (
          <Intern key={intern.name} {...intern} />
        ))}
      </div>
    </div>
  );
};
export default InternTracker;

 