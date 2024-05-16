DROP DATABASE IF EXISTS AnimalTroove;
CREATE DATABASE AnimalTroove;
USE AnimalTroove;

CREATE TABLE User (
  userID int,
  PRIMARY KEY (userID)
);

CREATE TABLE GuestUser (
  userID int,
  FOREIGN KEY (userID) REFERENCES User(userID),
  PRIMARY KEY (userID)
);

CREATE TABLE RegisteredUser (
  userID int,
  name varChar(20) NOT NULL,
  birthday Date,
  userName varChar(20) NOT NULL UNIQUE,
  bio varChar(300),
  email varChar(30) NOT NULL UNIQUE,
  password varChar(30) NOT NULL,
  profilePicture BLOB,
  FOREIGN KEY (userID) REFERENCES User(userID),
  PRIMARY KEY (userID)
);

CREATE TABLE Posts (
  media BLOB NOT NULL,
  caption varChar(256),
  photoDate Date,
  postDate Date NOT NULL, 
  location POINT,
  postID int,
  userID int NOT NULL,
  FOREIGN KEY (userID) REFERENCES RegisteredUser(userID),
  PRIMARY KEY (postID)
);

CREATE TABLE Comment (
  userID int,
  postID int,
  commentID int,
  description varChar(100),
  FOREIGN KEY (userID) REFERENCES RegisteredUser(userID),
  FOREIGN KEY (postID) REFERENCES Posts(postID),
  PRIMARY KEY (commentID)
);

CREATE TABLE Dislike (
  userID int,
  postID int,
  FOREIGN KEY (userID) REFERENCES RegisteredUser(userID),
  FOREIGN KEY (postID) REFERENCES Posts(postID),
  PRIMARY KEY (userID, postID)
);

CREATE TABLE BlockedUsers (
  blockingUserID int,
  blockedUserID int,
  FOREIGN KEY (blockingUserID) REFERENCES RegisteredUser(userID),
  FOREIGN KEY (blockedUserID) REFERENCES RegisteredUser(userID),
  PRIMARY KEY (blockingUserID, blockedUserID)
);

CREATE TABLE Following (
  followingUserID int,
  followedUserID int,
  FOREIGN KEY (followingUserID) REFERENCES RegisteredUser(userID),
  FOREIGN KEY (followedUserID) REFERENCES RegisteredUser(userID),
  PRIMARY KEY (followingUserID, followedUserID)
);

CREATE TABLE Liked (
  userID int,
  postID int,
  FOREIGN KEY (userID) REFERENCES RegisteredUser(userID),
  FOREIGN KEY (postID) REFERENCES Posts(postID),
  PRIMARY KEY (userID, postID)
);

CREATE TABLE Bookmarked (
  userID int,
  postID int,
  FOREIGN KEY (userID) REFERENCES RegisteredUser(userID),
  FOREIGN KEY (postID) REFERENCES Posts(postID),
  PRIMARY KEY (userID, postID)
);

CREATE TABLE Tag (
  postID int,
  tag varChar(20),
  FOREIGN KEY (postID) REFERENCES Posts(postID),
  PRIMARY KEY (postID, tag)
);

