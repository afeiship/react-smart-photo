export default (inEnv) => {
  return require(`./build/${inEnv.type}`).default;
};
