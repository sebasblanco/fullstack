const algosdk = require('algosdk');
const token = 'Your algod API token';
const server = 'http://127.0.0.1';
const port = 5500;

const bodyParser = require('body-parser');
const app = express();
const client = new algosdk.Algodv2(token, server, port);

(async () => {
  console.log(await client.status().do());
})().catch((e) => {
  console.log(e);
});

app.use(bodyParser.json());

app.get('/api/user', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});


app.use(bodyParser.json());

// Define your endpoint to handle incoming data
app.post('/api/user', (req, res) => {
  const userInfo = req.body;
  // Process userInfo as needed (e.g., save to a database)
  res.json({ message: 'Data received successfully' });
});

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
