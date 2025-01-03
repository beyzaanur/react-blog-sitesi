import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const QuestionCard = ({ question, options, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    onAnswer(selectedOption);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' , marginLeft:'15rem' , marginBottom:'20rem'}}>
      <Card style={{ width: '38rem', height:'38rem' ,margin: '1rem', textAlign: 'center'  }}>
        <Card.Body style={{ textAlign: 'center' }}>
          <Card.Title  style={{fontSize:'40px' , marginTop:'3rem' , marginBottom:'3rem'}}>{question}</Card.Title>
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`option${index}`}
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label style={{fontSize:'32px' , marginBottom:'2rem'}} htmlFor={`option${index}`}>{option}</label>
            </div>
          ))}
          <Button variant="primary" style={{ backgroundColor: 'darkred'}} onClick={handleSubmit} className="mt-2">
            Sonraki
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuestionCard;



