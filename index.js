import { posts } from "./data.js";

const postEl = document.getElementById("post");

let likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];

for (const post of posts) {
  if (likedPosts.includes(post.id)) {
    post.isLiked = true;
  }
}

document.addEventListener("click", function (e) {
  if (e.target.id === "like-btn") {
    handleLikeBtnClick(e.target.dataset.like);
  }
});

function handleLikeBtnClick(postId) {
  const post = posts.filter(function (post) {
    return post.id === Number(postId);
  })[0];

  if (!post) return;

  if (post.isLiked) {
    post.likes--;
    likedPosts = likedPosts.filter((id) => id !== post.id);
  } else {
    post.likes++;
    likedPosts.push(post.id);
  }
  post.isLiked = !post.isLiked;

  localStorage.setItem("likedPosts",JSON.stringify(likedPosts));

  renderPosts();
}

function renderPosts() {
  let postHTML = "";
  for (const post of posts) {
    let likeClass = "";
    if (post.isLiked) {
      likeClass = "liked";
    }

    postHTML =
      postHTML +
      `
                  <div class="post-header">
                <img src="${post.avatar}" class="user-img" alt="user avatar" />
                <div class="post-user-info">
                <p><strong>${post.name}</strong></p>
                <p>${post.location}</p>
                </div>
            </div>
            <img src="${post.post}" class="post-img" alt="user post" />
            <div class="post-actions">
            <i id="like-btn" 
            class="${post.isLiked ? "fa-solid" : "fa-regular"} fa-heart icon-img ${likeClass}" 
            data-like="${post.id}">
          </i>

          <i class="fa-regular fa-comment icon-img" 
            id="comment-btn">
          </i>

          <i class="fa-regular fa-paper-plane icon-img" 
            id="dm-btn">
          </i>
            </div>
            <div class="post-likes">
                <p id="likes"><strong>${post.likes} likes</strong></p>
                <p><strong>${post.username}</strong> ${post.comment}</p>
            </div>
        `;
  }
  postEl.innerHTML = postHTML;
}

renderPosts();
