const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
 *  the frontend application to interact as planned with the api server
 */
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
app.use(cors());
// Add middware for parsing request bodies here:
app.use(bodyParser.json());
// extra middleware
app.use(morgan('dev'));
// Mount your existing apiRouter below at the '/api' path.
const minionsRouter = require('./server/minionsApi');
app.use('/api/minions', minionsRouter);

const ideasRouter = require('./server/ideasApi');
app.use('/api/ideas', ideasRouter);

const meetingRouter = require('./server/meetingApi');
app.use('/api/meetings', meetingRouter);

// This conditional is here for testing purposes:
if (!module.parent) {
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}