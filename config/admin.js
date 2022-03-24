module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fb1d2b0a011338fd270e2e7a7bfec8fd'),
  },
});
