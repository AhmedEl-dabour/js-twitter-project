const dataArray = [];

const navbar = document.getElementById('topbar');
const sticky = navbar.offsetTop;

const tweetGenerator = (userName, tweet) => {
  const tweetDiv = document.createElement('div');
  const postText = document.createElement('p');
  postText.innerHTML = `<strong>${userName}</strong>:<p>${tweet}</p>`;
  tweetDiv.appendChild(postText);

  const likeBtn = document.createElement('div');
  likeBtn.classList.add('likeBtn');
  likeBtn.innerHTML = `<img src="https://www.freeiconspng.com/uploads/love-png-5.png" width="100%" height=100%>`;
  likeBtn.addEventListener('click', like);

  tweetDiv.appendChild(likeBtn);
  const shareBtn = document.createElement('div');
  shareBtn.classList.add('shareBtn');
  shareBtn.innerHTML = `<img src="https://cdn0.iconfinder.com/data/icons/ie_Financial_set/256/47.png" width="100%" height="100%">`;
  shareBtn.addEventListener('click', share);

  tweetDiv.appendChild(shareBtn);
  tweetDiv.classList.add('post');
  const postOb = { userName: `${userName}`, tweet: `${tweet}`, ip: `${count}` };
  count++;

  if (newsFeed.hasChildNodes()) {
    newsFeed.insertBefore(tweetDiv, newsFeed.childNodes[0]);
    dataArray.push(postOb);
  } else {
    newsFeed.appendChild(tweetDiv);
  }
  closeForm();
};

let count = 0;

function openForm() {
  document.getElementById('postForm').style.display = 'block';
}

const newsFeed = document.querySelector('.newsFeed');

function closeForm() {
  document.getElementById('postForm').style.display = 'none';
  document.getElementById('tweet').value = '';
}

function like(e) {
  e.currentTarget.parentElement.classList.toggle('liked');
}

function share(e) {
  const userName =
    e.currentTarget.parentElement.firstChild.firstChild.innerHTML;
  const tweet =
    e.currentTarget.parentElement.firstChild.childNodes[2].innerHTML;

  tweetGenerator(userName, tweet);
}

const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', () => {
  const userName = 'Ahmed';
  const tweet = document.getElementById('tweet').value;

  tweetGenerator(userName, tweet);
});

const mainSubBtn = document.querySelector('#Tweet_button');
mainSubBtn.addEventListener('click', () => {
  const userName = 'Ahmed';
  const mainPost = document.getElementById('mainPost').value;

  document.getElementById('mainPost').value = '';
  tweetGenerator(userName, mainPost);
});
