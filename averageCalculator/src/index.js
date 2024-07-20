import express from "express";

const app = express();

export { app };

const PORT = 9876;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

app.get('/', (_, res) => {
  res.send('WELCOME');
});