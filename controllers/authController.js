import User from '../models/User.js'
// import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/index.js'

const register = async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    throw new BadRequestError('請填寫所有資訊')
  }
  const userAlreadyExists = await User.findOne({ email })
  if (userAlreadyExists) {
    throw new BadRequestError('Email已經有人使用了')
  }
  const user = await User.create({ name, email, password })
  const token = user.createJWT()
  res.status(201).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  })
}
const login = async (req, res) => {
  return res.send('login')
}
const updateUser = async (req, res) => {
  return res.send('updateUser')
}

export { register, login, updateUser }
