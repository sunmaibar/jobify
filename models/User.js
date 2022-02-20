import mongoose from 'mongoose'
import validator from 'validator'
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '請輸入名字'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, '請輸入email'],
    validate: {
      validator: validator.isEmail,
      message: '請提供有效的電子郵件',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, '請輸入密碼'],
    minlength: 6,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: '帥哥美女',
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'my city',
  },
})

export default mongoose.model('User', UserSchema)
