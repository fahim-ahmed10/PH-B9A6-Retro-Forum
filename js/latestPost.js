const loadLatestPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  // console.log(data);
  displayLatestPost(data);
};

const displayLatestPost = (posts) => {
  const latestPost = document.getElementById("latest_post");
  posts.forEach((post) => {
    // console.log(post);
    const postCard = document.createElement("div");
    postCard.classList = `card w-[374px] h-[482px] bg-base-100 shadow-xl border border-[#d6d6d6] p-5`;
    postCard.innerHTML = `
        <figure class="h-[190px]"><img class="w-full h-full cover rounded-3xl" src="${post.cover_image}"
                        alt="Shoes" /></figure>
                <div class="card-body px-0 pb-0">
                    <div class="flex gap-2">
                        <img class="w-6 h-6" src="./images/icons8-calander-64.png" alt="calander">
                        <p class="text-[#717181]">${dateCheck(post)}</p>
                    </div>
                    <h2 class="card-title font-bold text-xl md:text-lg">${post.title}</h2>
                    <p class="text-[#717181]">${post.description}</p>
                    <div class="mt-5 flex gap-6">
                        <img class="w-12 h-12 rounded-full bg-red-600" src="${post.profile_image}" alt="Image">
                        <div>
                            <h1 class="text-xl md:text-lg lg:text-xl font-bold">${post.author.name}</h1>
                            <h5 class="text-[#717181]">${designationCheck(post)}</h5>
                        </div>
                    </div>
                </div>
                `;
    latestPost.appendChild(postCard);
  
  });

};
// checking the date is available or not in the API 
const dateCheck = (post) => {
    const author = post.author;
    if ((author && author.posted_date !== null && author.posted_date !== undefined)) {
      return author.posted_date;
    } 
    else{
      return "No Publish Date";
    }
  };

  // checking the designation is available or not in the API 
const designationCheck = (post) =>{
    const author = post.author;
    if ((author && author.designation !== null && author.designation !== undefined)) {
      return author.designation;
    } 
    else{
      return "Unknown";
    }
}
loadLatestPost();
