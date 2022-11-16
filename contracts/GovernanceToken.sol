// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract GovernanceToken is ERC20 {
    uint256 public s_maxSupply = 1000000000000000000000000;

    constructor() ERC20("GovernanceToken", "GT") ERC20Permit("GovernanceToken") {
        _mint(msg.sender, s_maxSupply);
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) {
        super.afterTokenTransfer(from, to, amount);
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

    function _burn (address account, uint256 amount) internal virtual override {
        super._burn(account, amount);
    }
}