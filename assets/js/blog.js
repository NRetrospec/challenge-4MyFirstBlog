window.onload = function() {
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || []; /* retrieves the blog posts*/
  const postsContainer = document.querySelector('main');

  posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post-box'); 
      postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <p><em>By: ${post.username}</em></p>
      `;
      postsContainer.appendChild(postElement);
  });
};


