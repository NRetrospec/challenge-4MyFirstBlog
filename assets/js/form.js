const formBlock = document.querySelector("form");

// Function to handle when user hits submit button
const formSubmit = (event) => {
  event.preventDefault();
  console.log(event)
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


  const blogString = JSON.stringify(blogData)
  localStorage.setItem("blogs",blogString);
};

formBlock.addEventListener("submit", formSubmit);
