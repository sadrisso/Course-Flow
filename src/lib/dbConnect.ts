import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI!;
const dbName = process.env.DB_NAME!;

let cachedClient: MongoClient | null = null;

export const dbConnect = async (collectionName: string) => {
  if (!cachedClient) {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();
    cachedClient = client;
  }

  return cachedClient.db(dbName).collection(collectionName);
};
