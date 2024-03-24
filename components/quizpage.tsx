import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuizPage: React.FC = ({ navigation, route } : any) => {
  const { id } = route.params;
  
  switch(id){
    case 1:
      var cat : string = "Linux"
      break;
    case 2:
      var cat : string = "Code"
      break;
    case 3:
      var cat : string = "SQL"
      break;
    case 4:
      var cat : string = "Docker"
      break;
    default:
      var cat : string = ""
      break;
  }

  const apiUrl : string = `https://quizapi.io/api/v1/questions?apiKey=ywvNSehgzkWpp0d976DTT67bid4XOfpKId1I5XVM&category=${cat}&difficulty=Easy&limit=10`; 
  const [quizData, setQuizData] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, []);

  const handleAnswer = () => {
    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswerKey = Object.keys(currentQuestion.correct_answers).find((key) => currentQuestion.correct_answers[key] === "true");

    if (`${selectedAnswer}_correct` === correctAnswerKey) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderOptions = () => {
    const currentQuestion = quizData[currentQuestionIndex];
    const options = Object.entries(currentQuestion.answers).filter(([key, value] : any) => value !== null && value !== 'No Answer');

    return options.map(([key, value] : any) => (
      <TouchableOpacity
        key={key}
        style={[styles.option, key === selectedAnswer && styles.selectedOption]}
        onPress={() => setSelectedAnswer(key)}
        disabled={selectedAnswer !== null}
      >
        <Text>{value || 'No Answer'}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      {currentQuestionIndex < quizData.length ? (
        <>
          <Text style={styles.question}>{quizData[currentQuestionIndex].question}</Text>
          <Text style={styles.description}>{quizData[currentQuestionIndex].description}</Text>
          {renderOptions()}
          <TouchableOpacity style={styles.button} onPress={handleAnswer}>
            <Text>Next Question</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Quiz Completed!</Text>
          <Text style={styles.scoreText}>Your Score: {score}/{quizData.length}</Text> 
        </View>
      )}
    </View>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 20,
  },
  option: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#e6e6e6',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#1434A4"
  },
  scoreText: {
    fontSize: 18,
    color: "#1434A4"
  },
});

export default QuizPage;
