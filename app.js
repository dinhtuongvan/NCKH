var certificatesApi = "http://localhost:3000/certificates";

function start() {
  getCertificates(renderCertificates);

  handleCreateForm();
}

start();

//Functions
function getCertificates(callback) {
  fetch(certificatesApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function createCertificate(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(certificatesApi, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function renderCertificates(certificates) {
  var listCertificatesBlock = document.querySelector("#cert_custom");

  var htmls = certificates.map(function (certificate) {
    return `
    <div class="row mt30 cert_custom">
        <div class="col l-4">
          <img src="${certificate.img}" alt="" class="cert__img">
        </div>
        <div class="col l-8">
          <div class="cert__info-wrap">
            <div class="cert__info">
              <h1 class="cert__name">${certificate.name}</h1>
              <div class="cert__detail--wrap">
                <p class="label">ID:</p>
                <p class="cert__id">${certificate.id}</p>
              </div>
              <div class="cert__detail--wrap">
                <p class="label">Họ tên:</p>
                <p class="cert__receiver">${certificate.receiver}</p>
              </div>
              <div class="cert__detail--wrap">
                <p class="label">Ngày phát hành:</p>
                <p class="cert__receiver">${certificate.date}</p>
              </div>
              <div class="cert__detail--wrap">
                <p class="label">Ngày hết hạn:</p>
                <p class="cert__receiver">${certificate.outdate}</p>
              </div>
              <div class="cert__detail--wrap">
                <p class="label">Xếp loại:</p>
                <p class="cert__receiver">${certificate.rank}</p>
              </div>
              <div class="cert__detail--wrap">
                <p class="label">Đơn vị phát hành:</p>
                <p class="cert__receiver">${certificate.issuer}</p>
              </div>
              <div class="cert__detail--wrap">
                <p class="label">Trạng thái:</p>
                <p class="cert__status">
                  <span>Đang phát hành</span>
                </p>
              </div>

              <p class="cert__date"></p>
              <p class="cert__outdate"></p>
              <p class="cert__rank"></p>
              <p class="cert__issuer"></p>
            </div>
            <a href="#" class="cert__code"
              >Nhận mã chứng chỉ</a
            >
          </div>
        </div>
      </div>
    `;
  });

  listCertificatesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");
  
  createBtn.onclick = async function () {

    let account;

    if (window.ethereum !== "undefined") {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      account = accounts[0];
    }

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
            "name": "_idStudent",
            "type": "string"
          }
        ],
        "name": "getCertificatesByStudentId",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
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
    const Address = "0xA0Fb9CbA3C58Fd4eA7050388657Bc91041518340";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);


    //3- send certificate data to Blockchain
    let _idCertificate, _nameCertificate, _nameStudent,_releaseDate,_expirationDate, _issuer, _grade,_idStudent;
            _idCertificate = document.getElementById("idCertificate").value;
            _nameCertificate = document.getElementById("nameCertificate").value;
            _nameStudent = document.getElementById("nameStudent").value;
            _releaseDate = document.getElementById("releaseDate").value;
            _expirationDate = document.getElementById("expirationDate").value;
            _issuer = document.getElementById("issuer").value;
            _idStudent = document.getElementById("idStudent").value;
            _grade= document.getElementById("grade").value;


            await window.contract.methods.addCertificate(_idCertificate, _nameCertificate, _nameStudent,_releaseDate,_expirationDate, _issuer,_idStudent, _grade).send({ from: account });


    //get certificate data to Store in JSon server
    var img = document.querySelector('#img_preview').getAttribute('src')
    var id = document.querySelector('input[name="id"]').value;
    var name = document.querySelector('input[name="name"]').value;
    var receiver = document.querySelector('input[name="receiver"]').value;
    var date = document.querySelector('input[name="date"]').value;
    var outdate = document.querySelector('input[name="outdate"]').value;
    var rank = document.querySelector('input[name="rank"]').value;
    var issuer = document.querySelector('input[name="issuer"]').value;

    var formData = {
      img: img,
      id: id,
      name: name,
      receiver: receiver,
      date: date,
      outdate: outdate,
      issuer: issuer,
      rank: rank
    };
    createCertificate(formData, function () {
      getCertificates(renderCertificates);
    });
  };
}

var searchCertBtn = document.querySelector("#searchCertBtn");
searchCertBtn.onclick = async function (){
    let account;

    if (window.ethereum !== "undefined") {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      account = accounts[0];
    }

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
            "name": "_idStudent",
            "type": "string"
          }
        ],
        "name": "getCertificatesByStudentId",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
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
    const Address = "0xA0Fb9CbA3C58Fd4eA7050388657Bc91041518340";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);


            //3- get data from smart contract
            const data = await window.contract.methods
            .getStudentCertificates("666")
            .call();
  
  
          //get data from server
          fetch("http://localhost:3000/certificates")
            .then((response) => response.json())
            .then((dataServer) => {
              // Here, the "data" variable contains the parsed JSON data.
              
              dataServer.map(myFunction)
            })
  
          function myFunction(obj){
              if(obj["id"] == data[0]){
                var imgSrc = obj.img;
                
              var html = 
           `
            <div class="row mt30 cert_custom">
                <div class="col l-4 m-12 c-12">
                  <img src="${imgSrc}" alt="" class="cert__img">
                </div>
                <div class="col l-8 m-12 c-12">
                  <div class="cert__info-wrap">
                    <div class="cert__info">
                      <h1 class="cert__name">${data[1]}</h1>
                      <div class="cert__detail--wrap">
                        <p class="label">ID:</p>
                        <p class="cert__id">${data[0]}</p>
                      </div>
                      <div class="cert__detail--wrap">
                        <p class="label">Họ tên:</p>
                        <p class="cert__receiver">${data[2]}</p>
                      </div>
                      <div class="cert__detail--wrap">
                        <p class="label">Ngày phát hành:</p>
                        <p class="cert__receiver">${data[3]}</p>
                      </div>
                      <div class="cert__detail--wrap">
                        <p class="label">Ngày hết hạn:</p>
                        <p class="cert__receiver">${data[4]}</p>
                      </div>
                      <div class="cert__detail--wrap">
                        <p class="label">Xếp loại:</p>
                        <p class="cert__receiver">${data[5]}</p>
                      </div>
                      <div class="cert__detail--wrap">
                        <p class="label">Đơn vị phát hành:</p>
                        <p class="cert__receiver">${data[6]}</p>
                      </div>
                      <div class="cert__detail--wrap">
                        <p class="label">Trạng thái:</p>
                        <p class="cert__status">
                          <span>Đang phát hành</span>
                        </p>
                      </div>
        
                      <p class="cert__date"></p>
                      <p class="cert__outdate"></p>
                      <p class="cert__rank"></p>
                      <p class="cert__issuer"></p>
                    </div>
                    <a href="#" class="cert__code"
                      >Nhận mã chứng chỉ</a
                    >
                  </div>
                </div>
              </div>
            `;
            listCertificatesBlock.innerHTML = html
              }
            }
          }
  
          var listCertificatesBlock = document.querySelector("#cert_search");


