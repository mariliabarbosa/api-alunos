import Router from 'express';

import usersRoutes from './users.js';

const routes = Router();

routes.use('/users', usersRoutes);

export default routes;
