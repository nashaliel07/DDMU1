
const loginUser = async(username,passwors) => {
  const user = await User.findOne({username});
  if(!user) {
    throw
  }

}