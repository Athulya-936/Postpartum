require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');

const createData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected...');

    // Create a user
    const user = await User.create({
      email: 'jane@bloom.com',
      password: 'password123',
      profile: { firstName: 'Jane', lastName: 'Doe' }
    });

    console.log('✅ User created!');
    console.log(user);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createData();