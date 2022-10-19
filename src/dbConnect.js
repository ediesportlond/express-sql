import pg from 'pg';
import credential from "./credentials.js";

const { Pool } = pg;

export default function dbConnect(){
   return new Pool(credential);
}
