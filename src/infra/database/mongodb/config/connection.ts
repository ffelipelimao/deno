import { MongoDBConnector, Database } from 'https://deno.land/x/denodb@v1.0.38/mod.ts';
import { Wishlist } from "../entities/wishlist.ts";

const connector = new MongoDBConnector({
  uri: 'mongodb://mongoadmin:secret@localhost:27888/?authSource=admin',
  database: 'games',
});

export const connectDB = async () => {
  const db = new Database(connector);

  db.link([Wishlist])
  
  await db.sync()
  
}
