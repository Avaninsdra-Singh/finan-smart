// import'dotenv/config';
// import { defineConfig } from 'drizzle-kit';
// export default defineConfig({
//   dialect: "postgresql",
//   schema: "./utils/schema.jsx",
//   out: "./drizzle",
//   dbCredentials: {
//     url: process.env.NEXT_PUBLIC_DATABASE_URL,
//     connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
      
//   },
// });
// drizzle.config.js
// require('dotenv').config();
// import { defineConfig } from 'drizzle-kit';

// export default defineConfig({
//   dialect: "postgresql",
//   schema: "./utils/schema.jsx", // Adjust the path to your schema file if needed
//   out: './drizzle',             // Adjust the output directory if needed
//   driver: 'pg',
//   dbCredentials: {
//          url: process.env.NEXT_PUBLIC_DATABASE_URL,
//         connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
          
//       },

// });
// drizzle.config.js
require('dotenv').config();
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: "postgresql",
  schema: './utils/schema.jsx', 
  out: './drizzle',            
  driver: 'pg',                
  url: process.env.NEXT_PUBLIC_DATABASE_URL, 
});