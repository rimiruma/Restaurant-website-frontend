import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbname = process.env.DBNAME;

if (!uri) throw new Error("Please define MONGODB_URI in .env.local");
if (!dbname) throw new Error("Please define DBNAME in .env.local");

// Define your collection names
export const collections = {
  MenuItems: "menuitems",
};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

// dbConnect function
export async function dbConnect(collectionName) {
  const connectedClient = await clientPromise;
  return connectedClient.db(dbname).collection(collectionName);
}
