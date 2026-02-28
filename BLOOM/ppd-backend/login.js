require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');

const testLogin = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const user = await User.findOne({ email: 'jane@bloom.com' }).select('+password');
  
  if (!user) {
    console.log('User not found');
  } else {
    const isMatch = await user.comparePassword('password123');
    console.log(isMatch ? '✅ Password Correct! Login Valid.' : '❌ Wrong Password');
  }
  process.exit(0);
};

testLogin();