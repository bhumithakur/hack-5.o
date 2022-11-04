// SPDX-License-Identifier:  UNLICENSED

pragma solidity >=0.7.0 <0.9.0;

contract demo{
    uint number;
    function set(uint  _number) public {
        number = _number;
    }
    function get() public view returns(uint){
        return number;
    }

}