module.exports = {
  roots: ["<rootDir>/test"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx)"],
  transform: {
    "^.+\\.(ts|js)?$": "ts-jest"
  }
};
