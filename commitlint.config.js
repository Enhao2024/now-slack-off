module.exports = {
  rules: {
    'start-with-nso': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'start-with-nso': ({ header }) => {
          const TICKET_PREFIX = 'NSO-';
          return [
            header.startsWith(TICKET_PREFIX),
            `Commit message should start with '${TICKET_PREFIX}'`,
          ];
        },
      },
    },
  ],
};