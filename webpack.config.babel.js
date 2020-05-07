export default (inEnv) => {
  const { NODE_ENV } = process.env;
  return require(`./build/${NODE_ENV}`).default;
};
