const obj = {
  success: "success",
  error: "error",
};

export const toaster = (status, msg) => {
  let a = document.createElement("div");
  a.setAttribute("id", "container");
  document.body.appendChild(a);

  let container = document.getElementById("container");

  container.innerHTML = `<div id="wrapper">
  <div id="content">
  </div>
  <div id="slider">
  </div>
  </div>`;

  let wrapper = document.getElementById("wrapper");
  let content = document.getElementById("content");
  container.style.display = "block";
  content.innerText = msg;

  if (status == obj.success) {
    wrapper.style.background = "green";
  } else {
    wrapper.style.background = "red";
  }

  setTimeout(() => {
    container.style.display = "none";
  }, 6000);
};

export default obj;
