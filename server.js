const algosdk = require('algosdk');
const token = 'Your algod API token';
const server = 'http://127.0.0.1';
const port = 5500;

const bodyParser = require('body-parser');
const app = express();
const client = new algosdk.Algodv2(token, server, port);

// Function to interact with the smart contract and store data
async function storeDataOnBlockchain(name, birthplace, birthday, timeofbirth) {
    // Replace this with your smart contract interaction code
    // It would typically involve creating and sending a transaction to your smart contract.
    // You'll need to format the transaction data according to your contract's requirements.
    // For example:
    const from = 'YOUR_ALGORAND_ADDRESS';
    const to = 'YOUR_SMART_CONTRACT_ADDRESS';
    const amount = 0;
    const note = algosdk.encodeObj({ name, birthplace, birthday, timeofbirth });

    const txn = algosdk.makePaymentTxnWithSuggestedParams(from, to, amount, undefined, note);
    const signedTxn = await algosdk.signTransaction(txn, 'YOUR_ALGORAND_PRIVATE_KEY');
    const txId = signedTxn.txID;

    await algodClient.sendRawTransaction(signedTxn.blob);

    console.log(`Data stored on blockchain. Transaction ID: ${txId}`);
}

// Update your event listener to call the new function
document.getElementById('userInput').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const birthplace = document.getElementById('birthplace').value;
    const birthday = document.getElementById('birthday').value;
    const timeofbirth = document.getElementById('timeofbirth').value;

    await storeDataOnBlockchain(name, birthplace, birthday, timeofbirth);

    // You can remove the localStorage calls
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
