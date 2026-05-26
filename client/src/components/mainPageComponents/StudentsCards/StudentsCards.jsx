import React from 'react';
import './StudentsCards.css';

const studentsData = [
  {
    name: 'Sophia',
    startScore: '1080',
    finalScore: '1510!',
    imgUrl: './students/stud1.jpg' 
  },
  {
    name: 'Isaad ',
    startScore: '1060',
    finalScore: '1600!',
    imgUrl: './students/stud2.jpg'
  },
  {
    name: 'Akylai',
    startScore: '600',
    finalScore: '1300!', 
    imgUrl: './students/stud3.jpg'
  }
];

export default function StudentCards() {
  return (
    <div className="cards-container">
      {studentsData.map((student, index) => (
        <div key={index} className="student-card">
          <div className="image-wrapper">
            <img src={student.imgUrl} alt={student.name} className="student-photo" />
          </div>
          
          <div className="card-content">
            <h3 className="student-name">{student.name}</h3>
            
            <div className="score-start">
              SAT {student.startScore}
            </div>
            
            <div className="score-final">
              {student.finalScore}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
