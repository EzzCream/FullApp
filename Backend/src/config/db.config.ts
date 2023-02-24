import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connection: any = process.env.MONGO_DB;

mongoose.connect(connection, (err: any) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Conectados a Mongo ✨');
		console.log(`----------------------------------------------`);
	}
});

export default mongoose;
