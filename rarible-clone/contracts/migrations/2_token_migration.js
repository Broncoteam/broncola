const BroncoToken = artifacts.require("BroncoToken");

module.exports = function (deployer) {
  deployer.deploy(BroncoToken);
};
