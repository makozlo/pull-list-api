import { app } from '../index.js';

app.get('/', () => {
  console.log('made it to the base route');
});
