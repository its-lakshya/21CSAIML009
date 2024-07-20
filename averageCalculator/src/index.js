import express from "express";
import http from "http";
const app = express();
import axios from "axios";

export { app };

const PORT = 9876;
const WINDOW_SIZE = 10;

const axiosConfig = {
  headers: {
    Authorization: `Bearer ${process.env.authToken}`,
  },
};

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0; // Handling edge case: empty array
  }

  let sum = numbers.reduce((acc, num) => acc + num, 0);
  let average = sum / numbers.length;
  return average;
}

// For prime numbers
app.get("/numbers/p", (_, res) => {
  let primeNumbers;
  let numberWindowSize;
  axios
    .get(`${process.env.NUMBERS_URL}` + "primes", axiosConfig)
    .then((response) => {
      primeNumbers = response.data.numbers;
      console.log("Response:", response.data);
      if (primeNumbers.length() > WINDOW_SIZE) {
        difference = WINDOW_SIZE - primeNumbers.length;
        numberWindowSize = primeNumbers.splice(0, n);
      }
    
      res.send(
        200,
        json({
          windowPrevState: [],
          windowCurrentState: numberWindowSize,
          numbers: primeNumbers,
          avg: calculateAverage(numberWindowSize),
        })
      );
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
    .get(`${process.env.NUMBERS_URL}` + "fibo", axiosConfig)
    .then((response) => {
      fiboNumbers = response.data.numbers;
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  if (fiboNumbers.length > WINDOW_SIZE) {
    difference = WINDOW_SIZE - fiboNumbers.length;
    numberWindowSize = fiboNumbers.splice(0, n);
  }

  res.send(
    200,
    json({
      windowPrevState: [],
      windowCurrentState: numberWindowSize,
      numbers: fiboNumbers,
      avg: calculateAverage(numberWindowSize),
    })
  );
});

// For even numbers
app.get("/numbers/e", (_, res) => {
  let evenNumbers;
  let numberWindowSize;
  axios
    .get(`${process.env.NUMBERS_URL}` + "even", axiosConfig)
    .then((response) => {
      evenNumbers = response.data.numbers;
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  if (evenNumbers.length > WINDOW_SIZE) {
    difference = WINDOW_SIZE - evenNumbers.length;
    numberWindowSize = evenNumbers.splice(0, n);
  }

  res.send(
    200,
    json({
      windowPrevState: [],
      windowCurrentState: numberWindowSize,
      numbers: evenNumbers,
      avg: calculateAverage(numberWindowSize),
    })
  );
});

// For random numbers
app.get("/numbers/r", (_, res) => {
  let randNumbers;
  let numberWindowSize;
  axios
    .get(`${process.env.NUMBERS_URL}` + "rand", axiosConfig)
    .then((response) => {
      randNumbers = response.data.numbers;
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  if (randNumbers.length > WINDOW_SIZE) {
    difference = WINDOW_SIZE - randNumbers.length;
    numberWindowSize = randNumbers.splice(0, n);
  }

  res.send(
    200,
    json({
      windowPrevState: [],
      windowCurrentState: numberWindowSize,
      numbers: randNumbers,
      avg: calculateAverage(numberWindowSize),
    })
  );
});
