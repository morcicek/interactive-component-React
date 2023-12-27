import { useState } from 'react';
import './App.css';
import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import RatingForm from './components/RatingForm';
import Card from './components/Card';
import Header from './components/Header';
import ThanksPage from './components/ThanksPage';

function App() {
  const [rating, setRating] = useState(4);
  const [submit, setSubmit] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(false);
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 mt-4">
      {submit && (
        <Card>
          <Header />
          <RatingForm
            onSubmit={handleSubmit}
            select={(rating) => setRating(rating)}
          />
        </Card>
      )}
      {!submit && <ThanksPage rating={rating} />}
    </div>
  );
}

export default App;
