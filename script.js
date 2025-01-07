document.addEventListener("DOMContentLoaded", function () {
  // Data for requirements
  const requirements = [
    {
      name: "Nguyễn Văn Điền",
      task: "Phân tích yêu cầu",
      duration: "2 tuần",
      progress: 100,
    },
    {
      name: "Phùng Thị Minh Thư",
      task: "Thiết kế giao diện",
      duration: "1 tuần",
      progress: 100,
    },
    {
      name: "Lại Thị Hoa",
      task: "Thiết kế giao diện",
      duration: "1 tuần",
      progress: 100,
    },
    {
      name: "Nguyễn Văn Đô",
      task: "Thiết kế giao diện",
      duration: "1 tuần",
      progress: 100,
    },
    {
      name: "Thân Văn Danh",
      task: "Thiết kế giao diện",
      duration: "1 tuần",
      progress: 100,
    },
  ];

  // Populate requirements table
  const requirementTableBody = document.querySelector(
    "#requirement .table tbody"
  );
  requirements.forEach((req) => {
    const row = `
            <tr>
                <td>${req.name}</td>
                <td>${req.task}</td>
                <td>${req.duration}</td>
                <td>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${req.progress}%" aria-valuenow="${req.progress}" aria-valuemin="0" aria-valuemax="100">${req.progress}%</div>
                    </div>
                </td>
            </tr>
        `;
    requirementTableBody.insertAdjacentHTML("beforeend", row);
  });

  // Data for designs
  const designs = [
    {
      name: "Nguyễn Văn Điền",
      task: "Thiết kế giao diện người dùng",
      status: "Hoàn thành",
      image: "img/DienDesgin2.jpg",
    },
    {
      name: "Phùng Thị Minh Thư",
      task: "Thiết kế cơ sở dữ liệu",
      status: "Hoàn thành",
      image: "img/ThuDesgin.jpg",
    },
    {
      name: "Lại Thị Hoa",
      task: "Thiết kế cơ sở dữ liệu",
      status: "Hoàn thành",
      image: "img/HoaDesgin.jpg",
    },
    {
      name: "Nguyễn Văn Đô",
      task: "Thiết kế giao diện",
      status: "Hoàn thành",
      image: "img/DoDesgin.jpg",
    },
    {
      name: "Thân Văn Danh",
      task: "Thiết kế giao diện",
      status: "Hoàn thành",
      image: "img/DanhDesgin.jpg",
    },
  ];

  // Populate design table
  const designTableBody = document.querySelector("#designTable tbody");
  designs.forEach((design) => {
    const row = `
            <tr>
                <td>${design.name}</td>
                <td>${design.task}</td>
                <td>${design.status}</td>
                <td>
                    <button class="btn btn-primary" onclick="showImage('${design.image}')">Xem Hình</button>
                </td>
            </tr>
        `;
    designTableBody.insertAdjacentHTML("beforeend", row);
  });

  // Data for implementations
  const implementations = [
    {
      name: "Nguyễn Văn Điền",
      task: "Thiết kế giao diện người dùng",
      status: "Hoàn thành",
      image: "img/dienimplemnt.jpg",
    },
    {
      name: "Phùng Thị Minh Thư",
      task: "Thiết kế cơ sở dữ liệu",
      status: "Hoàn thành",
      image: "img/ThuImplement.jpg",
    },
    {
      name: "Lại Thị Hoa",
      task: "Thiết kế cơ sở dữ liệu",
      status: "Hoàn thành",
      image: "img/Hoaimplementations.jpg",
    },
    {
      name: "Nguyễn Văn Đô",
      task: "Thiết kế giao diện",
      status: "Hoàn thành",
      image: "img/Doimplementations.jpg",
    },
    {
      name: "Thân Văn Danh",
      task: "Thiết kế giao diện",
      status: "Hoàn thành",
      image: "img/Danhimplementations.jpg",
    },
  ];

  // Populate implementation table
  const implementTableBody = document.querySelector("#implement .table tbody");
  implementations.forEach((impl) => {
    const row = `
            <tr>
                <td>${impl.name}</td>
                <td>${impl.task}</td>
                <td>${impl.status}</td>
                <td>
                    <button class="btn btn-primary" onclick="showImage('${impl.image}')">Xem Hình</button>
                </td>
            </tr>
        `;
    implementTableBody.insertAdjacentHTML("beforeend", row);
  });
});

// Function to show image in modal
function showImage(imagePath) {
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imagePath;
  const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
  imageModal.show();
}
function showImage(imagePath) {
  const modalImage = document.getElementById("modalImage");

  // Kiểm tra định dạng file
  if (!/\.(png|jpg|jpeg)$/i.test(imagePath)) {
    alert("Định dạng ảnh không hợp lệ!");
    return;
  }

  modalImage.src = imagePath;
  const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
  imageModal.show();
}
