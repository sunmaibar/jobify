import express from 'express'
const router = express.Router()

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJobs,
  showState,
} from '../controllers/jobsController.js'

router.route('/').post(createJob).get(getAllJobs)
router.route('/stats').get(showState)
router.route('/:id').delete(deleteJob).patch(updateJobs)

export default router
