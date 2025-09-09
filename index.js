import { posts } from "./data.js";

const likeBtnb = document.getElementById("like-btn");
const likesEl = document.getElementById("likes");

const postEl = document.getElementById("post");

function renderPosts() {
  let postHTML = "";
  for (const post of posts) {
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
                <img id="like-btn" src="images/icon-heart.png" class="icon-img" alt="like button" />
                <img src="images/icon-comment.png" class="icon-img" alt="comment button" />
                <img src="images/icon-dm.png" class="icon-img" alt="dm button" />
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
