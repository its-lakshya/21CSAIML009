import express from "express";
import http from "http";
const app = express();
import axios from "axios";

export { app };


// Defining constants
const PORT = 9876;
const WINDOW_SIZE = 10;
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxNDU5MDQ4LCJpYXQiOjE3MjE0NTg3NDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImRmOWFjMGFlLTE3NzMtNDkyYS05MGU5LTUxNjZlODE2OTc4YyIsInN1YiI6IjIxY3NhaW1sMDA5QGpzc2F0ZW4uYWMuaW4ifSwiY29tcGFueU5hbWUiOiJJbnN0YU1hcnQiLCJjbGllbnRJRCI6ImRmOWFjMGFlLTE3NzMtNDkyYS05MGU5LTUxNjZlODE2OTc4YyIsImNsaWVudFNlY3JldCI6IlRSR0hJdUpoU0JYblpUVFIiLCJvd25lck5hbWUiOiJMYWtzaHlhIiwib3duZXJFbWFpbCI6IjIxY3NhaW1sMDA5QGpzc2F0ZW4uYWMuaW4iLCJyb2xsTm8iOiIyMUNTQUlNTDAwOSJ9.DT9nWpmjft7qGxpq1o2HCMWDt54FFYPzCuvu6FghNBw';
const NUMBERS_URL = 'http://20.244.56.144/test/';


// Configuring axios
const axiosConfig = {
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
};

// Listening server
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

// Calculation of averate 
function calculateAverage(arr) {
  if (arr.length === 0) {
      return 0; // To handle empty array scenario
  }

  let sum = 0;
  for (let num of arr) {
      sum += num;
  }
  return sum / arr.length;
}

// For prime numbers
app.get("/numbers/p", (_, res) => {
  let primeNumbers;
  let numberWindowSize = primeNumbers;
  axios
    .get(`${NUMBERS_URL}` + "primes", axiosConfig)
    .then((response) => {
      primeNumbers = response.data.numbers;
      numberWindowSize = [...primeNumbers];

      if (primeNumbers.length > WINDOW_SIZE) {
        const difference = WINDOW_SIZE - primeNumbers.length;
        numberWindowSize.splice(0, difference);
        }

    
      res.status(200)
      .send(
        {
          windowPrevState: [],
          windowCurrentState: numberWindowSize,
          numbers: primeNumbers,
          avg: calculateAverage(numberWindowSize),
        }
      )
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// For fibonacci numbers
app.get("/numbers/f", (_, res) => {
  let fiboNumbers;
  let numberWindowSize;
  axios
    .get(`${NUMBERS_URL}` + "fibo", axiosConfig)
    .then((response) => {
      fiboNumbers = response.data.numbers;
      numberWindowSize = [...fiboNumbers];

      if (fiboNumbers.length > WINDOW_SIZE) {
        const difference = WINDOW_SIZE - fiboNumbers.length;
        numberWindowSize.splice(0, difference);
      }
    
      res.status(200)
      .send(
        {
          windowPrevState: [],
          windowCurrentState: numberWindowSize,
          numbers: fiboNumbers,
          avg: calculateAverage(numberWindowSize),
        }
      )
    })
    .catch((error) => {
      console.error("Error:", error);
    });

});

// For even numbers
app.get("/numbers/e", (_, res) => {
  let evenNumbers;
  let numberWindowSize;
  axios
    .get(`${NUMBERS_URL}` + "even", axiosConfig)
    .then((response) => {
      evenNumbers = response.data.numbers;
      numberWindowSize = [...evenNumbers];

      if (evenNumbers.length > WINDOW_SIZE) {
        const difference = WINDOW_SIZE - evenNumbers.length;
        numberWindowSize.splice(0, difference);
      }
    
      res.status(200)
      .send(
        {
          windowPrevState: [],
          windowCurrentState: numberWindowSize,
          numbers: evenNumbers,
          avg: calculateAverage(numberWindowSize),
        }
      )
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  
});

// For random numbers
app.get("/numbers/r", (_, res) => {
  let randNumbers;
  let numberWindowSize;
  axios
    .get(`${NUMBERS_URL}` + "rand", axiosConfig)
    .then((response) => {
      randNumbers = response.data.numbers;
      numberWindowSize = [...randNumbers];

      if (randNumbers.length > WINDOW_SIZE) {
        const difference = WINDOW_SIZE - randNumbers.length;
        numberWindowSize.splice(0, difference);
      }
    
      res.status(200)
      .send(
        {
          windowPrevState: [],
          windowCurrentState: numberWindowSize,
          numbers: randNumbers,
          avg: calculateAverage(numberWindowSize),
        }
      )
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
});
