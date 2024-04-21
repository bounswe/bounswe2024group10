CREATE TABLE `Animal` (
  `region` varChar(50),
  `eatingType` varChar(20),
  `latinName` varChar(50),
  `commonName` varChar(50),
  `averageLife` int,
  `picture` BLOB,
  `description` varChar(100)
);

CREATE TABLE `Guest User` (
  `userID` int
);

CREATE TABLE `Comment` (
  `description` varChar(100)
);

CREATE TABLE `dislike` (
  `userName` varChar(25),
  `numOfDislikes` int
);

CREATE TABLE `Registered User` (
  `userID` int,
  `name` varChar(20),
  `birthday` Date,
  `userName` varChar(20),
  `bio` varChar(300),
  `email` varChar(30),
  `password` varChar(30),
  `profilePicture` BLOB,
  `userName` varChar(25)
);

CREATE TABLE `Blocked Users` (
  `userID` int,
  `numOfBlocked` int
);

CREATE TABLE `Following` (
  `userID` int,
  `numOfFollowing` int
);

CREATE TABLE `User` (
  `userID` int
);

CREATE TABLE `Posts` (
  `media` BLOB,
  `caption` varChar(256),
  `date` Date,
  `location` POINT,
  `postID` int,
  `userID` int
);

CREATE TABLE `Like` (
  `userName` varChar(25),
  `numOfLikes` int
);

CREATE TABLE `Tag` (
  `nameOfTag` varChar(20),
  `postID` int
);

CREATE TABLE `Follower` (
  `userID` int,
  `numOfFollowers` int
);

