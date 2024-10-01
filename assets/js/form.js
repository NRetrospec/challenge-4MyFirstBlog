const formBlock = document.querySelector("form");

const formSubmit = () => {
  const usernameEl = document.getElementById("#username").value;
  const titleEl = document.getElementById("#title").value;
  const contentEl = document.getElementById("#content").value;
  
  const blogData = { 
    name:usernameEl,
    title:titleEl,
    content: contentEl,
  };

} 

