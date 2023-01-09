import { Router } from 'express';
import * as controller from '../controllers/root';

const router = Router();

router.get("/hb",
    controller.hb
)

router.get('/vacances',
    controller.vacances
)

export default router