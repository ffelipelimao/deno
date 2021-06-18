import { MongoDBConnector, Database } from 'https://deno.land/x/denodb@v1.0.38/mod.ts';
import { Wishlist } from "../entities/wishlist.ts";

const connector = new MongoDBConnector({
  uri: 'mongodb://127.0.0.1:27017',
  database: 'test',
});

export const connectDB = async () => {
  const db = new Database(connector);

  db.link([Wishlist])
  
  await db.sync()
  
}
