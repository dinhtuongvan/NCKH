var coursesApi = "http://localhost:3000/courses";

function start() {
  getCourses(renderCourses);

  handleCreateForm();
}

start();

//Functions
function getCourses(callback) {
  fetch(coursesApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function createCourse(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(coursesApi, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#cert_custom");

  var htmls = courses.map(function (course) {
    return `
    <div class="row mt30 cert_custom">
        <div class="col l-4">
          <img src="${course.img}" alt="" class="cert__img">
        </div>
        <div class="col l-8">
          <div class="cert__info-wrap">
            <div class="cert__info">
              <h1 class="cert__name">${course.name}</h1>
              <div class="cert__detail--wrap">
                <p class="label">ID:</p>
                <p class="cert__id">${course.id}</p>
              </div>
              <div class="cert__detail--wrap">
                <p class="label">Họ tên:</p>
                <p class="cert__receiver">${course.receiver}</p>
              </div>
              <div class="cert__detail--wrap">
                <p class="label">Ngày phát hành:</p>
                <p class="cert__receiver">${course.date}</p>
              </div>
              <div class="cert__detail--wrap">
                <p class="label">Ngày hết hạn:</p>
                <p class="cert__receiver">${course.outdate}</p>
              </div>
              <div class="cert__detail--wrap">
                <p class="label">Xếp loại:</p>
                <p class="cert__receiver">${course.rank}</p>
              </div>
              <div class="cert__detail--wrap">
                <p class="label">Đơn vị phát hành:</p>
                <p class="cert__receiver">${course.issuer}</p>
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

  listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");

  createBtn.onclick = function () {
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
    createCourse(formData, function () {
      getCourses(renderCourses);
    });
  };
}
