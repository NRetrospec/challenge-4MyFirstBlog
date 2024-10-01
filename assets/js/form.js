const formBlock = document.querySelector("form");

const formSubmit = (event) => {
  event.preventDefault();
  const usernameEl = document.getElementById("username").value;
  const titleEl = document.getElementById("title").value;
  const contentEl = document.getElementById("content").value;

  if (!usernameEl || !titleEl || !contentEl) {
    alert("Please complete all fields");
  }





  const blogData = {
    name: usernameEl,
    title: titleEl,
    content: contentEl,
  };
  console.log(blogData)
};

formBlock.addEventListener("submit", formSubmit);
