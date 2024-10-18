const mockData = {
    subforums: [
        {
            id: 1,
            name: "BIST",
            posts: [
                {   
                    id: 101,
                    username: "user1",
                    forumId: 1,
                    image: "https://example.com/image1.jpg",
                    description: "Discussion about BIST trends.",
                    date: "2024-10-01",
                    time: "10:00",
                    likeCount: 15,
                    dislikeCount: 2,
                    commentCount: 3,
                    comments: [
                        {
                            username: "commenter1",
                            postId: 101,
                            content: "Great insights on BIST!"
                        },
                        {
                            username: "commenter2",
                            postId: 101,
                            content: "I disagree with your analysis."
                        }
                    ]
                },
                {
                    id: 102,
                    username: "user2",
                    forumId: 1,
                    image: "https://example.com/image2.jpg",
                    description: "How to invest in BIST?",
                    date: "2024-10-02",
                    time: "12:30",
                    likeCount: 8,
                    dislikeCount: 1,
                    commentCount: 2,
                    comments: [
                        {
                            username: "commenter3",
                            postId: 102,
                            content: "Good question, I'm curious too!"
                        },
                        {
                            username: "commenter4",
                            postId: 102,
                            content: "You should consider diversifying."
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "GOLD",
            posts: [
                {
                    id: 201,
                    username: "user3",
                    forumId: 2,
                    image: "https://example.com/image3.jpg",
                    description: "Is it the right time to invest in gold?",
                    date: "2024-10-03",
                    time: "09:15",
                    likeCount: 20,
                    dislikeCount: 0,
                    commentCount: 4,
                    comments: [
                        {
                            username: "commenter5",
                            postId: 201,
                            content: "I think it’s a good hedge against inflation."
                        },
                        {
                            username: "commenter6",
                            postId: 201,
                            content: "What are your thoughts on gold ETFs?"
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "NASDAQ",
            posts: [
                {
                    id: 301,
                    username: "user4",
                    forumId: 3,
                    image: "https://example.com/image4.jpg",
                    description: "Tech stocks on NASDAQ.",
                    date: "2024-10-04",
                    time: "14:00",
                    likeCount: 30,
                    dislikeCount: 5,
                    commentCount: 5,
                    comments: [
                        {
                            username: "commenter7",
                            postId: 301,
                            content: "Apple and Google are my favorites!"
                        },
                        {
                            username: "commenter8",
                            postId: 301,
                            content: "Don't forget about emerging tech stocks."
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            name: "SP500",
            posts: [
                {
                    id: 401,
                    username: "user5",
                    forumId: 4,
                    image: "https://example.com/image5.jpg",
                    description: "Performance analysis of S&P 500.",
                    date: "2024-10-05",
                    time: "16:45",
                    likeCount: 25,
                    dislikeCount: 1,
                    commentCount: 3,
                    comments: [
                        {
                            username: "commenter9",
                            postId: 401,
                            content: "It’s been a steady performer."
                        },
                        {
                            username: "commenter10",
                            postId: 401,
                            content: "What sectors are driving growth?"
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            name: "DAX",
            posts: [
                {
                    id: 501,
                    username: "user6",
                    forumId: 5,
                    image: "https://example.com/image6.jpg",
                    description: "Investing in the German DAX index.",
                    date: "2024-10-06",
                    time: "11:20",
                    likeCount: 18,
                    dislikeCount: 0,
                    commentCount: 2,
                    comments: [
                        {
                            username: "commenter11",
                            postId: 501,
                            content: "It has been volatile recently."
                        },
                        {
                            username: "commenter12",
                            postId: 501,
                            content: "Good point! I’m watching it closely."
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            name: "Real Estate",
            posts: [
                {
                    id: 601,
                    username: "user7",
                    forumId: 6,
                    image: "https://example.com/image7.jpg",
                    description: "Real estate market trends.",
                    date: "2024-10-07",
                    time: "08:30",
                    likeCount: 22,
                    dislikeCount: 3,
                    commentCount: 4,
                    comments: [
                        {
                            username: "commenter13",
                            postId: 601,
                            content: "Prices are skyrocketing in my area!"
                        },
                        {
                            username: "commenter14",
                            postId: 601,
                            content: "It's a great investment long term."
                        }
                    ]
                }
            ]
        }
    ]
};

export default mockData;
