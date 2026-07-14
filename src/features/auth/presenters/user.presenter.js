const userPresenter = (user) => ({
  id: user._id.toString(),
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  role: user.role,
  avatar: user.avatar ?? null,
  emailVerified: user.emailVerified,
});

export default userPresenter;