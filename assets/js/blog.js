const mainBlock = document.querySelector("main")



// const blogTitle = document.createElement("h2");
// blogTitle.textContent = blogData.title;
// mainBlock.appendChild(blogTitle);

// const blogContent = document.createElement("p");
// blogContent.textContent = blogData.content;
// mainBlock.appendChild(blogContent);

// const blogData = {
//   name: usernameEl,
//   title: titleEl,
//   content: contentEl,
// };
const tagMaker = function(elementType, text, parent){
  const tags = document.createElement(elementType);
  tags.textContent = text;
  parent.appendChild(tags);

};

tagMaker("h2", blogData.title, mainBlock);
tagMaker("p", blogData.content, mainBlock);
tagMaker("p",blogData.name, mainBlock);



