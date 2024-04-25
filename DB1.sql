/*CREATE TABLE Animal (
  region varChar(50),
  eatingType varChar(20),
  latinName varChar(50),
  commonName varChar(50),
  averageLife int,
  picture BLOB,
  description varChar(100)
);*/

CREATE TABLE GuestUser (
  userID int,
  FOREIGN KEY (userID) REFERENCES User(userID),
  PRIMARY KEY (userID)
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

CREATE TABLE RegisteredUser (
  userID int,
  name varChar(20) NOT NULL,
  birthday Date,
  userName varChar(20) NOT NULL UNIQUE,
  bio varChar(300),
  email varChar(30) NOT NULL UNIQUE,
  password varChar(30) NOT NULL,
  profilePicture BLOB,
  karma int,
  PRIMARY KEY (userID),
  FOREIGN KEY (userID) REFERENCES User(userID)
);

CREATE TABLE BlockedUsers (
  blockingUserID int,
  blockedUserID int,
  FOREIGN KEY (blockingUserID) REFERENCES RegisteredUser(blockingUserID),
  FOREIGN KEY (blockedUserID) REFERENCES RegisteredUser(blockedUserID),
  PRIMARY KEY (blockingUserID, blockedUserID)
);

CREATE TABLE Following (
  followingUserID int,
  followedUserID int,
  FOREIGN KEY (followingUserID) REFERENCES RegisteredUser(followingUserID),
  FOREIGN KEY (followedUserID) REFERENCES RegisteredUser(followedUserID),
  PRIMARY KEY (followingUserID, followedUserID)
);

CREATE TABLE User (
  userID int,
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

CREATE TABLE Liked (
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

/*CREATE TABLE Follower (
  userID int,
  numOfFollowers int,
  PRIMARY KEY (userID)
);

# represented the relation between follower and registeredUseer
CREATE TABLE Followee (
	userID int,
    PRIMARY KEY (userID),
    FOREIGN KEY (userID) REFERENCES User
);

# represented the relation between following and registeredUseer
CREATE TABLE FollowNum (
	userID int,
    PRIMARY KEY (userID),
    FOREIGN KEY (userID) REFERENCES User
);*/
