import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { promisify } from 'util';

const wait = promisify(setTimeout);

// Create a new express application instance
const app: express.Application = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/', (_: express.Request, response: express.Response) => {

  response.send('Hello World!');
});

app.post('/save', async (request: express.Request, response: express.Response) => {

  await wait(3000);

  console.log(request.query);

  console.log(request.body);

  response.send(true);
});

app.listen(5555, function () {

  console.log('Example app listening on port 5555!');
});
