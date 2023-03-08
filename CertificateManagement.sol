//SPDX-License-Identifier: UNLICENSED
//UT-F8
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

contract CertificateManagement {
    address owner;
    //khai báo student và certificate
    struct Student {
        string idStudent;
        string nameStudent;
        string majors;
        string sex;
        string birth;
        string email;
        uint256[] certificateIds;
    }
    struct Certificate {
        uint256 idCertificate;
        string nameCertificate;
        string nameStudent;
        string releaseDate;
        string expirationDate;
        string issuer;
        string grade;
    }

    //lưu trữ strudent và certificate qua mapping
    mapping(string => Student) students;
    mapping(uint256 => Certificate) certificates;
    mapping(string => Student) emails;

    //sự kiện
    event savedStudent(string idStudent, string name);
    event savedCertificate(
        uint256 certificateId,
        string nameCertificate,
        string nameStudent
    );

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    //hàm thêm chứng chỉ
    function addCertificate(
        uint256 _idCertificate,
        string memory _nameCertificate,
        string memory _nameStudent,
        string memory _releaseDate,
        string memory _expirationDate,
        string memory _issuer,
        string memory _idStudent,
        string memory _grade
    ) public onlyOwner {
        // Check if student exists
        require(
            bytes(students[_idStudent].idStudent).length > 0,
            "Student does not exist"
        );

        certificates[_idCertificate] = Certificate(
            _idCertificate,
            _nameCertificate,
            _nameStudent,
            _releaseDate,
            _expirationDate,
            _issuer,
            _grade
        );

        Student storage student = students[_idStudent];
        student.certificateIds.push(_idCertificate);

        emit savedCertificate(_idCertificate, _nameCertificate, _nameStudent);
    }

    //hàm thêm sinh viên
    // declare an array to store student names
    
    function addStudent(
        string memory _idStudent,
        string memory _name,
        string memory _majors,
        string memory _sex,
        string memory _birth,
        string memory _email
    ) public onlyOwner {
        require(
            bytes(students[_idStudent].idStudent).length == 0,
            "Student already exists"
        );

        students[_idStudent] = Student(
            _idStudent,
            _name,
            _majors,
            _sex,
            _birth,
            _email,
            new uint256[](0)
        );
        emails[_email] = Student(
            _idStudent,
            _name,
            _majors,
            _sex,
            _birth,
            _email,
            new uint256[](0)
        );

        emit savedStudent(_idStudent, _name);
    }

    function getCertificateById(uint256 _idCertificate)
        public
        view
        returns (
            uint256,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        Certificate storage certificate = certificates[_idCertificate];
        return (
            certificate.idCertificate,
            certificate.nameCertificate,
            certificate.nameStudent,
            certificate.releaseDate,
            certificate.expirationDate,
            certificate.issuer,
            certificate.grade
        );
    }

    function getStudentCertificates(string memory _idStudent)
        public
        view
        returns (Certificate[] memory)
    {
        uint256[] storage certificateIds = students[_idStudent].certificateIds;
        Certificate[] memory result = new Certificate[](certificateIds.length);

        for (uint256 i = 0; i < certificateIds.length; i++) {
            result[i] = certificates[certificateIds[i]];
        }

        return result;
    }

    function getStudentByEmail(string memory _email)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        Student storage student = emails[_email];
        return (
            student.idStudent,
            student.nameStudent,
            student.majors,
            student.sex,
            student.birth,
            student.email
        );
    }
}
