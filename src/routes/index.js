import {Router} from 'express'

import companyRoutes from "./companyRoutes";

const publicRouter = Router();

publicRouter.use('/company',companyRoutes);

export default publicRouter;
