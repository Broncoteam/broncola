const BroncolaContract = artifacts.require("BroncolaContract");

module.exports = function (deployer) {
  deployer.deploy(BroncolaContract);
};
