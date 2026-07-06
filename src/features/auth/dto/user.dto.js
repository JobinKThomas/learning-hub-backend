const userDto = (user) => ({
  id: user._id,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  role: user.role,
  avatar: user.avatar,
  emailVerified: user.emailVerified,
});

export default userDto;