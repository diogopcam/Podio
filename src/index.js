require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

// Verificar se as variáveis de ambiente estão corretas
console.log(`MONGODB_USER: ${process.env.MONGODB_USER}`);
console.log(`MONGODB_PASSWORD: ${process.env.MONGODB_PASSWORD}`);
console.log(`MONGODB_CLUSTER: ${process.env.MONGODB_CLUSTER}`);
console.log(`MONGODB_APP_NAME: ${process.env.MONGODB_APP_NAME}`);

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/?retryWrites=true&w=majority&appName=${process.env.MONGODB_APP_NAME}`;

console.log(`Connection URI: ${uri}`);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);