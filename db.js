const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sowresh:sowresh18@pizza.c0mpkgh.mongodb.net/?retryWrites=true&w=majority&appName=pizza');


  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
