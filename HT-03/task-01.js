const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mood = 'happy'
  user.hobby = 'skydiving'
  user.premium = false

let keys = Object.keys(user)

  for (const res of keys) {
    console.log(`${res}: ${user[res]}`)
  }
