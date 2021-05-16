const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "stef",
        mongodb_password: "N064qEzE2jHN7vIs",
        mongodb_clustername: "clusterchunky",
        mongodb_database: "MyContact",
      },
    };
  }

  return {
    env: {
      mongodb_username: "stef",
      mongodb_password: "N064qEzE2jHN7vIs",
      mongodb_clustername: "clusterchunky",
      mongodb_database: "MyContact",
    },
  };
};
