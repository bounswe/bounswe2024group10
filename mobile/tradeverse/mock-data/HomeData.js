import { allSubforums } from "./all-subforums";

const allPosts = allSubforums.reduce((acc, subforum) => {
  return acc.concat(subforum.posts);
}, []);

export const HomeData = {
  ForYouPosts: [
    {
      title: "How to pass bruh to moment here.",
      content: [
        {
          type: "text",
          value: "Rising inflation impacts everyone’s wallet...",
        },
        { type: "tag", value: "investments" },
        { type: "text", value: "and tracking key economic indicators." },
        { type: "tag", value: "Inflation" },
        { type: "tag", value: "FinanceTips" },
      ],
      date: "2021-01-01",
      likes: 10,
      dislikes: 2,
      comments: 5,
      views: 1200,
      subforum: {
        name: "Future Investment",
        id: 1,
      },
      author: {
        name: "Daron",
        surname: "Acemoglu",
        username: "daronacemoglu",
        avatar:
          "https://img.kitapyurdu.com/v1/getImage/fn:10642557/wi:200/wh:526d5c04e",
        id: 1,
      },
    },
  ],
};
