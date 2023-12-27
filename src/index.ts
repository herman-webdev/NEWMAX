import express, {Express,} from 'express';
import { config, } from './config/config';
import cors from 'cors';
import router from './routes/routes';


const app: Express = express();

const corsOptions = {
	origin: config.cors.origin,
	maxAge: config.cors.maxAge,
	headers: config.cors.headers,
	credentials: config.cors.credentials,
	exposedHeaders: config.cors.exposedHeaders,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', router)

function startServer() {
	try {
		const port = config.server.port;
		const host = config.server.host;

		app.listen(port, host, () => {
			console.log(`Server running at: http://${host}:${port}`);
			console.log('Node.js version ' + process.versions.node);
		});
	} catch (err) {
		console.error('Error starting the server:', err);
	}
};

startServer()