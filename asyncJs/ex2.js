async function fetchUserData(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
    const userData = await response.json();
    return userData;
  }

  async function fetchUserPosts(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
    const userPosts = await response.json();
    return userPosts;
  }

  async function fetchUserDetails(userId) {
    const [userData, userPosts] = await Promise.all([
      fetchUserData(userId),
      fetchUserPosts(userId)
    ]);

    return { userData, userPosts };
  }

  // Usage
  async function getUserDetails(userId) {
    try {
      const userDetails = await fetchUserDetails(userId);
      console.log(userDetails);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  getUserDetails(12);