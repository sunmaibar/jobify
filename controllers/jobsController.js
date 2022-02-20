const createJob = async (req, res) => {
  res.send('createJob')
}
const deleteJob = async (req, res) => {
  res.send('deleteJob')
}
const getAllJobs = async (req, res) => {
  res.send('getAllJobs')
}
const updateJobs = async (req, res) => {
  res.send('updateJobs')
}
const showState = async (req, res) => {
  res.send('showState')
}

export { createJob, deleteJob, getAllJobs, updateJobs, showState }
