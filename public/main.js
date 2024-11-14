// Function to handle likes
function likePost(button) {
    const likeCount = button.querySelector('.like-count');
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }

    // Function to show/hide the comment section
    function toggleComments(button) {
    const commentSection = button.closest('.post').querySelector('.comment-section');
    commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
    }

    // Function to add a new comment
    function addComment(button) {
    const commentInput = button.previousElementSibling;
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentList = button.closest('.comment-section').querySelector('.comment-list');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = '';
    }
    }
  