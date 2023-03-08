const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idCertificate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_nameCertificate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_nameStudent",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_releaseDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_expirationDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_issuer",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_idStudent",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_grade",
				"type": "string"
			}
		],
		"name": "addCertificate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_idStudent",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_majors",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sex",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_birth",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			}
		],
		"name": "addStudent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "certificateId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "nameCertificate",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "nameStudent",
				"type": "string"
			}
		],
		"name": "savedCertificate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "idStudent",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "savedStudent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idCertificate",
				"type": "uint256"
			}
		],
		"name": "getCertificateById",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			}
		],
		"name": "getStudentByEmail",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_idStudent",
				"type": "string"
			}
		],
		"name": "getStudentCertificates",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "idCertificate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "nameCertificate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "nameStudent",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "releaseDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "expirationDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "issuer",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "grade",
						"type": "string"
					}
				],
				"internalType": "struct CertificateManagement.Certificate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];