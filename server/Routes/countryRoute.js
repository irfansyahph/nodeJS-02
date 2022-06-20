import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router()

router.get('/',indexCtrl.CountryCtrl.findAll)
router.get('/:id',indexCtrl.CountryCtrl.findOne)
router.post('/',indexCtrl.CountryCtrl.create)
router.put('/:id',indexCtrl.CountryCtrl.update)
router.delete('/:id',indexCtrl.CountryCtrl.deleted)

export default router