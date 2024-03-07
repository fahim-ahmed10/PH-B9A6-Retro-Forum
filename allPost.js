const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const posts = data.posts;

  //console.log(posts);
  displayPosts(posts);
};

const displayPosts = (posts) => {
  const postContainer = document.getElementById("post_container");
  for (const post of posts) {
    console.log(post);
    const postCard = document.createElement("div");
    postCard.classList = `flex gap-5 border-none bg-[#f3f3f5] rounded-3xl`;
    postCard.innerHTML = `
         <div class="w-[10%] relative mt-9 left-6">
                        <div class="relative">
                            <div class="is_active w-2 h-2 rounded-full right-0 absolute"></div>
                            <img class="w-12 h-11 rounded-xl" src="${post.image}" alt="Image">
                        </div>
                       
                    </div>
                    <div class="w-[90%] flex flex-col p-7">
                        <div class="flex gap-6 text-sm font-normal mb-2">
                            <p># ${post.category}</p>
                            <p>Author: ${post.author.name}</p>
                        </div>
                        <h1 class="mb-4 text-lg font-bold">${post.title}</h1>
                        <p class="text-sm text-[#77777e] mb-3">${post.description}</p>
                        <hr class="border-dashed border-[1.5px] mb-4">
                        <div class="flex justify-between">
                            <div class="flex  text-[#77777e]">
                                <img class="w-7 h-7" src="./images/icons8-message-32.png" alt="Message inbox">
                                <h5 class="ml-2 mr-5">${post.comment_count}</h5>
                                <img class="w-7 h-7" src="./images/icons8-eye-24.png" alt="Eye">
                                <h5 class="ml-2 mr-5">${post.view_count}</h5>
                                <img class="w-7 h-7" src="./images/icons8-clock-32.png" alt="Clock">
                                <h5 class="ml-2 mr-5 mb-3">${post.posted_time} min</h5>
                            </div>
                            <div>
                                <img class="w-7 h-7 bg-[#10b981] rounded-full p-1"
                                    src="./images/icons8-open-envelope-24.png" alt="Message Inbox">
                            </div>
                        </div>
                    </div>
                    `;
    postContainer.appendChild(postCard);
    const isActive = postCard.querySelector('.is_active');
        isActive.textContent = post.isActive;
        const status = isActive.textContent;
        // console.log(status);
        if(status === 'true'){
            isActive.textContent = '';
            isActive.classList.add("bg-green-600");
        }else{
            isActive.textContent = '';
            isActive.classList.add("bg-[#ff3434]");
        }
  }
};

loadPhone();
