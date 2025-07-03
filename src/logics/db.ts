import { Pool } from 'pg';

// WARN: Use .env
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'postgres',
	password: 'postgres',
	port: 5432,
});

export default pool;
