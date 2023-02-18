import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
	console.log(`----------------------------------------------`);
	console.log(`Server started on http://localhost:${PORT} ✨`);
	console.log(`----------------------------------------------`);
});
server.on('error', (err: any) => console.log(err));
