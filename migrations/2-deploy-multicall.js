var Multicall = artifacts.require("./Multicall.sol");

module.exports = function (deployer) {
  deployer.deploy(Multicall).then(function (multicall) {
    return multicall;
  });
};
