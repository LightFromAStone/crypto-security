const bcrypt =  require('bcryptjs');
const users = []

function sanitizeUser(user) {
  let userCopy = {...user};
  delete userCopy.passHash;
  return userCopy;
}


module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const pwMatched = bcrypt.compareSync(password, users[i].passHash);
        if (users[i].username === username && pwMatched) {
          res.status(200).send(sanitizeUser(users[i]))
          return;
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        const {username, email, firstName, lastName, password} = req.body;

        const salt = bcrypt.genSaltSync(5);
        const passHash = bcrypt.hashSync(password, salt);
        let newUser = {
          username,
          email,
          firstName,
          lastName,
          passHash
        };

        users.push(newUser)
        res.status(200).send(sanitizeUser(newUser));
    }
}