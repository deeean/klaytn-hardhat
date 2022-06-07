// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Example is Ownable {
  constructor() {

  }

  function add(uint256 a, uint256 b) public view returns (uint256) {
    return a + b;
  }
}