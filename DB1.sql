CREATE TABLE Animal (
  region varChar(50),
  eatingType varChar(20),
  latinName varChar(50),
  commonName varChar(50),
  averageLife int,
  picture BLOB,
  description varChar(100)
);

CREATE TABLE GuestUser (
  userID int,
  PRIMARY KEY (userID)
);

CREATE TABLE Comment (
	UserID int,
	postID int,
	commentID int,
  description varChar(100)
);

CREATE TABLE Dislike (
  userName varChar(25),
  numOfDislikes int
);

CREATE TABLE RegisteredUser (
  userID int,
  name varChar(20),
  birthday Date,
  userName varChar(20),
  bio varChar(300),
  email varChar(30),
  password varChar(30),
  profilePicture BLOB,
  userName varChar(25),
  PRIMARY KEY (userID)
);

CREATE TABLE BlockedUsers (
  userID int,
  numOfBlocked int,
  PRIMARY KEY (userID)
);

CREATE TABLE Following (
  userID int,
  numOfFollowing int,
  PRIMARY KEY (userID)
);

CREATE TABLE User (
  userID int,
  PRIMARY KEY (userID)
);

CREATE TABLE Posts (
  media BLOB,
  caption varChar(256),
  date Date,
  location POINT,
  postID int,
  userID int
);

CREATE TABLE Liked (
  userName varChar(25),
  numOfLikes int
);

CREATE TABLE Tag (
  nameOfTag varChar(20),
  postID int
);

CREATE TABLE Follower (
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
);