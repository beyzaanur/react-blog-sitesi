import React, { useState } from 'react';
import TestSelection from '../components/qandans/selection';
import QuestionCard from '../components/qandans/qcard';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet'

const testData = [
  {
    character: 'Naruto',
    description: 'Ne kadar naruto olduğunuzu test edin!',
    questions: [
      {
        "id": 1,
        "question": "Gürültücü müsün?",
        "options": ["Çokk fazla", "Gürültü sevmem", "Hiç değilim", "Yerine göre"],
        "answer": "Çokk fazla"
      },
      {
        "id": 2,
        "question": "Cümlelerin sonuna ne sıklıkla Dattebayo!! eklersin?",
        "options": ["Bazen", "Sürekli", "Hiçbir zaman", "O da ne?"],
        "answer": "Sürekli"
      },
      {
        "id": 3,
        "question": "Cesur musun?",
        "options": ["Sayılır", "Hayır", "Gereksiz", "Kesinlikle evet"],
        "answer": "Kesinlikle evet"
      },
      {
        "id": 4,
        "question": "Jutsu konusunda ne kadar iyisin?",
        "options": ["Harikayım", "Genelde iyiyim", "Berbatım", "Tek jutsuda ustayım"],
        "answer": "Tek jutsuda ustayım"
      },
    ]
  },
  {
    character: 'Sasuke',
    description: 'Ne kadar Sasuke olduğunuzu test edin!',
    questions: [
      {
        id: 1,
        question: "Klanınınızın adı nedir?",
        options: ["Uchiha", "Senju", "Hyuga", "Akimichi"],
        answer: "Uchiha"
      },
      {
        id: 2,
        question: "En büyük amacınız?",
        options: ["İntikam almak", "Hokage olmak", "Yalnız yaşamak", "Klanını geri getirmek"],
        answer: "İntikam almak"
      },
      {
        id: 3,
        question: "Hangi yetenek?",
        options: ["Sharingan", "Byakugan", "Rinnegan", "Senjutsu"],
        answer: "Sharingan"
      },
      {
        id: 4,
        question: "Kime karşı sürekli rekabet içindesiniz?",
        options: ["Naruto", "Itachi", "Kakashi", "Madara"],
        answer: "Naruto"
      },
    ]
  },
  {
    character: 'Kakashi',
    description: 'Ne kadar Kakashi olduğunuzu test edin!',
    questions: [
      {
        id: 1,
        question: "Lakabınız nedir?",
        options: ["Kopya Ninja", "Savaş Ustası", "Hokage", "Sessiz Savaşçı"],
        answer: "Kopya Ninja"
      },
      {
        id: 2,
        question: "Hangi göz yeteneğine sahipsiniz?",
        options: ["Sharingan", "Byakugan", "Rinnegan", "Mangekyo Sharingan"],
        answer: "Sharingan"
      },
      {
        id: 3,
        question: "En sevdiğiniz kitap serisi nedir?",
        options: ["İcha İcha Serisi", "Ninja Teknikleri", "Hokage'nin Hatıraları", "Usta Jiraiya'nın Hikayeleri"],
        answer: "İcha İcha Serisi"
      },
      {
        id: 4,
        question: "Sensei'niz kimdir?",
        options: ["Minato Namikaze", "Jiraiya", "Sarutobi", "Itachi"],
        answer: "Minato Namikaze"
      },
    ]
  },
];

const Qanda = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelectTest = (test) => {
    setSelectedTest(test);
    setCurrentQuestionIndex(0);
    setScore(0);
    setFinished(false);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === selectedTest.questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < selectedTest.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setFinished(true);
    }
  };

  const calculatePercentage = () => {
    return Math.round((score / selectedTest.questions.length) * 100);
  };

  const getFeedback = (percentage) => {
    const character = selectedTest.character;
    if (percentage >= 75) {
      return `Kesinlikle sen ${character} olmalısınn!`;
    } else if (percentage >= 50) {
      return `${character} ile oldukça ortak noktan var!`;
    } else {
      return `${character} dünyasına daha çok çalışmalısın!`;
    }
  };

  return (
    <div className="container mt-4">
      <Helmet>
          <title>Testler</title>
        </Helmet>
      {!selectedTest ? (
        <TestSelection tests={testData} onSelectTest={handleSelectTest} />
      ) : finished ? (
        <div style={{marginBottom:'25rem' , textAlign:'center'}}>
          <h2 style={{marginBottom:'4rem' , marginTop:'5rem' , fontSize:'40px'}}>Test Tamamlandı!</h2>
          <p style={{fontSize:'20px', marginBottom:'2rem'}}>Cevaplarınızın yüzdesi: {calculatePercentage()}%</p>
          <p style={{fontSize:'20px' , marginBottom:'2rem'}}>{getFeedback(calculatePercentage())}</p>
          <Button variant="primary" style={{width:'200px'}} onClick={() => setSelectedTest(null)}>Yeni Test Seç</Button>
        </div>
      ) : (
        <QuestionCard
        
          question={selectedTest.questions[currentQuestionIndex].question}
          options={selectedTest.questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Qanda;


