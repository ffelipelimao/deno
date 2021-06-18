import { DataTypes, Model } from "https://deno.land/x/denodb@v1.0.38/mod.ts";

export class Wishlist extends Model{
    
    static table = 'wishlist'
    
    static fields = {
        _id: {
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
          },
        steamId: {
            type: DataTypes.INTEGER,
          },
      };
}
