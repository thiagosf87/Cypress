// cypress/plugins/index.ts
module.exports = (on, config) => {
  on('task', {
    setRecipientToken: (token) => {
      global.token = token;
      return null;
    },
    getRecipientToken: () => {
      return global.token;
    },
  });
};