pragma solidity >=0.4.22 <0.7.0;

contract Token {
    string fname;
    uint256 age;


    function setFname(string _fname, uint256 _age) public {
        fname = _fname;
        age = _age;
    }

    function getFname() public constant returns(string, uint256) {
        return (fname, age);
    }
}
