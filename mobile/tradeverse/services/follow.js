import api from "./_axios";

export async function followUser({ followerUsername, followedUsername }) {
    try {
        const response = await api.post('/api/follow/follow-user', {
            followerUsername,
            followedUsername
        });
        if (response.data.successful) {
            return true;
        } else {
            console.error('Failed to follow user:', response.data);
        }
    } catch (error) {
        console.error('Error following user:', error);
    }
    return false;
}

export async function unfollowUser({ followerUsername, followedUsername }) {
    try {
        const response = await api.post('/api/follow/unfollow-user', {
            followerUsername,
            followedUsername
        });
        if (response.data.successful) {
            return true;
        } else {
            console.error('Failed to unfollow user:', response.data);
        }
    } catch (error) {
        console.error('Error unfollowing user:', error);
    }
    return false;
}

export async function getFollowings({ username }) {
    try {
        const response = await api.get(`/api/follow/get-followings?username=${username}`);
        if (response.data.successful) {
            return response.data.followings;
        } else {
            console.error('Failed to fetch followings:', response.data);
        }
    } catch (error) {
        console.error('Error fetching followings:', error);
    }
    return [];
}
