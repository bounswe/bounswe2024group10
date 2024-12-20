# Executive Summary

## Overview

Tradeverse Forum is a web application designed to facilitate discussions on financial news, analyses, and related topics. It provides users with a collaborative platform to share insights and engage in interactive discussions about various financial assets, aided by real-time data.

## Current Status

The Tradeverse project is successfully deployed and operational. The following functionalities have been implemented:

- **User Registration and Authentication**: 
  - Users can register and log in securely using JWT-based authentication.
- **Interactive Features**:
  - Users can create posts, comment, like/dislike, and interact with others' content.
  - Users can annotate posts and comments using the W3C Annotation Standard.
  - Annotations are displayed on the right side of the screen, allowing users to view and interact with them.
  - When a user mentions a stock in their post, an interactive chart showing recent price changes is displayed. This enhances posts with real-time stock data visualization.
- **User Profiles and Portfolios**:
  - Users can create and manage a personal portfolio.
  - Profiles include customizable user information and user types selected during registration.
  - User types include: Beginner, Day Trader, Investor, Finance Enthusiast, and Finance Analyst.
- **Subforums**:
  - Subforums enable users to participate in niche discussions, e.g., NASDAQ, Crypto.
  - New subforums can be created dynamically to expand the scope of the forum.
  
## Achievements

1. The platform is fully deployed and accessible to users.
2. Real-time updates on financial assets are integrated, enhancing the interactivity of discussions.
3. W3C standards for annotations are implemented, elevating the platform's compliance and usability.
4. An extensive and intuitive user interface supports both beginners and seasoned finance professionals.

The project is on track, with all major features implemented and tested. Documentation and deployment processes have been streamlined to ensure ease of maintenance and scalability.
## Status of Deliverables 

| Deliverable | Status | Link |
  | --- | --- | --- | 
  | Pre-release of our software | Completed | [Pre-release of our software](https://github.com/bounswe/bounswe2024group10/releases/tag/customer-milestone-2) |
  | UX Decisions | Completed | [UX Decisions](https://github.com/bounswe/bounswe2024group10/wiki/User-Experience-Decisions) | 
  | W3C Standard Decision & Implementation | Completed | [W3C Standard Decision & Implementation](https://github.com/bounswe/bounswe2024group10/wiki/W3C-Standard-%E2%80%90-Annotation) |
  | User Group Scenarios | Completed | [Scenario 1](https://github.com/bounswe/bounswe2024group10/wiki/User-Group-Story-1), [Scenario 2](https://github.com/bounswe/bounswe2024group10/wiki/User-Group-Story-2) |
  | Lab PRs & Meeting Notes | Completed | [Lab 8 PR](https://github.com/bounswe/bounswe2024group10/pull/466) |
  | Swagger | Completed | [Swagger](http://35.246.188.121:8080/swagger-ui/index.html#/) |
  | Final release | Completed | [Url](http://35.246.188.121:3000/) |

## Final Release Notes

### Overview
We are excited to announce the final release of the Tradeverse Forum application! This update introduces improved API services with richer data, and expanded functionality  with better ui and ux design across web and mobile platforms. This release marks a significant increase in bringin the existing features to a higher level, creating new experiences for our users.

### New Features and Enhancements

#### Tag Search
- Users now are able to search for tags in the explore page. Additionally, they can go to the detail screen for the tags and see related posts.

#### Richer Post Content.
- Post content can now include different references such as users, assets and tags. Users can see the details of this references simply by clicking on them.

#### Asset Details.
- Now having an asset detail screen, users can see the current valuation of the selected asset and choose a date range when viewing the graph to include more insight on the asset.
- Besides the asset graph, a decent description for the asset itself is placed in this screen. Now a user can understand about the assets of which he is  not familiar.

#### Detailed Portfolio Page.
- User can see his/her portfolio in a more detailed way with the assets having the real current value fetched dynamically. Also one can see the total value of his portfolio assets.  

#### Post Annotation on Web Application
- Users can now annotate on a desired part of a post which improves the community interaction. A user can all the annotations made on posts to get insights from other people.


### Technologies Used
* **Backend**: Spring Boot (Java 17), MySQL, JWT, Docker, Swagger UI
* **Frontend**: React for web, Expo for mobile
* **Development Tools**: Docker for containerization, Node.js for mobile development

### Setup Instructions
- Refer to the updated README file for setup instructions, including prerequisites, cloning the repository, configuring environment variables, and running the application using Docker.

### Conclusion
This release adds significant new capabilities to the Tradeverse Forum, enhancing its functionality and usability. The improvement on Mobile, Web applications and the expanded API endpoints empower both developers and end-users, enabling better interaction and and more vibrant app community.


## Changes from the Previous Milestone
Based on previous milestones, our team implemented several changes to improve the development process. One significant improvement was optimizing the backend to make the application faster. This included adding new endpoints and ensuring the backend completed its tasks earlier, giving the frontend team more time to connect with and test API endpoints effectively.

Additionally, we avoided making last-minute changes, which significantly reduced the risk of breaking something critical right before deadlines. This was achieved by thoroughly planning every step in advance and prioritizing robust testing during development.

Another key improvement was enhancing communication within the team. We ensured that everyone stayed aligned on goals and progress, which minimized misunderstandings and improved collaboration. Collectively, these changes led to smoother development cycles, higher-quality deliverables, and an overall more efficient project workflow.
## Reflections and Lessons Learned

Reflecting on our Final Milestone Demo, we gained valuable insights and lessons from the feedback:

1. **User Information Visibility**  
   Users were unable to identify others beyond profile pictures, resulting in lost information. This highlighted the importance of designing interfaces that make key user details readily visible.

2. **Data Structure and Presentation**  
   While Wikidata was used effectively for assets, subform parts lacked similar support. Additionally, timestamps embedded within text made them less accessible, emphasizing the importance of presenting such information in distinct formats for clarity.

3. **Dynamic Features and Historical Data**  
   The dynamic nature of the news was well-received; however, the absence of historical data for assets pointed to an area where a broader perspective could have enriched the experience.

4. **Search Functionality**  
   The search feature for assets lacked semantic capabilities, it is hardcoded. This limited its usability, and incorporating semantic search, possibly leveraging Wikidata, could have made it far more powerful.

5. **Tags and Annotations**  
   Tags, being derived directly from user-generated text, lacked semantic depth. Annotations, especially on mobile, were unavailable, and requiring users to click to view them diminished usability. Displaying annotations directly could have enhanced the user experience significantly.

This milestone taught us the importance of designing for clarity, accessibility, and semantic richness. While we were unable to address these aspects within the scope of the project, the lessons learned provide a foundation for improving similar projects in the future.

## What could have been done differently

During our project, we had some setbacks including both minor and major ones as a team. Our first -and probably the foremost- issue was the general time management & effort distribution during the project. Most of our contributions were provided just some days ago between our major milestones (Customer Presentation 1,2; and the Final Milestone) and other times our repository was much more stable. Our overall effort can be more equally distributed which would provide a constant ongoing progess to the project, as well as establishing more harmony between our subteams (web, mobile, and backend) and lower our stress accordingly. 

Another thing we might have done differently is the communication & progress tracking inside and in-between frontend and backend teams. At some parts of the project, the frontend teams were way ahead of the backend team, which resulted in a rush at the backend team trying to provide necessary endpoints to the frontend teams, while frontend teams were at the same time trying to connect their pages to these endpoints; and when everything was combined with code bugs and lack of time, things did not go very well for us unfortunately. Some other things which can be done differently include more equal task distribution inside our subteams, using GitHub in a more effective manner, etc.

# Progress Based on Teamwork
## Summary of Work
| Name                     | Summary of Work       |
|--------------------------|-----------------------|
| Mesut Melih Akpınar      |  Led the backend development, refactored all the codebase in order to reduce technical debt. Designed the current backend architecture, distributed tasks. Implemented asset endpoints and created the portfolio logic. Scraped Yahoo Finance to get the YahooFinance links of assets. Changed the request/response structure of all subforum/post/comment endpoints. Designed and implemented For You/Explore algorithms. Carried Base64 encoded photos to permanent storage to accelerate page-loading.                    |
| Yusuf Kağan Çiçekdağ     | Mobile aplication page design, writing/editing required functions and establishing connections between pages and backend endpoints, writing reports (Most of Customer Presentation 2 Report, some parts of the Final Milestone Report, as well as some of the Lab reports), giving support to team members in related tasks, especially during Lab hours |
| Oğuzhan Tuncer           | Discussed the user experience and design with the team members. Impelemented some key pages as well as component. Enhanced some components visuals and the user experience. Took the responsibility of the W3C annotation standard implementation. Implemented the annotation service as well as the frontend of the annotations. Implemented annotation creation and highlight flows. Dockerized the annotation service and its database. Took place in the devops and deployment processes.    |
| Gülşen Sabak             |                       I have been presenting Customer Milestone 3, enhancing the mobile application for this milestone, creating screens for the app, integrating backend endpoints, and documenting both integration and user tests. |
| Hüseyin Karataş          | I leaded the mobile application development process along with its UI/UX design. I made modifications for the previously added API connections and established new ones for the new API services. Also I came up with new feature implementation on mobile app which I mentioned about my individual contribution section. Designed a navigation system inside the application for higher user experience.                      |
| Ömer Faruk Erzurumluoğlu |    I have written most of the unit tests. I have written many missing endpoints of controllers which have requested by the frontend. I have written search controller and every endpoint inside. With request from frontend, I have changed many endpoints' return values. I have fixed many small mistakes in the backend code. I have written data initializers. I have found the images for the assets. |
| Nazlıcan Aka             |  I have written some important endpoints in backend, and test them in both Postman, write unit tests for comprehensiveness. I have fixed issues in the backend with my teammates and also by myself. Additionally, I have plentiful contributions for preparations of Milestone-1,2, and 3 reports; during the writing period, I have collaborated with my teammates. Furthermore, I have been following the plan my team is working on, so that I have created project plan for all milestones in Project Libre. Moreover, I have been attempting discussions with my teammates during lab hours, and extra meetings with full of attendance.                      |
| Yasin Atlı               |   Throughout the project, I consistently demonstrated high levels of effort and responsibility, leading the development of frontend pages and key components while contributing to API development. I promptly addressed issues and solved errors to ensure steady progress. When the backend team fell short of their responsibilities, I stepped in to implement necessary services, ensuring the project stayed on track. Despite these challenges, I remained proactive and committed to delivering a successful outcome.                    |
| Onur Kafkas              |  For my project, I was in charge of the front-end development, focusing primarily on designing both the personal profile page and the user page. This involved crafting intuitive and visually appealing interfaces, ensuring seamless API connections, efficient routing, and a smooth user experience. I worked through various bugs and errors, optimizing functionality where needed. I made sure that users profiles and other user details are displayed accurately and responsively across the site.                     |

## Status of Requirements
Some signs and their meanings are explained below:

❌: Not started

⚠️: Partially implemented/In Progress

✅: Completed (implemented, tested, documented, deployed)

### Functional Requirements
* #### 1.1. User Requirements

 * 1.1.1. Account
    * 1.1.1.1. ✅ Users shall be able to open an account.
        * 1.1.1.1.1. ✅ Users **shall** enter their unique e-mail, unique username, and password to open an account to become a registered user.  
            * 1.1.1.1.1.1. ✅ Registered users **shall be able to** enter the application using their own username and password.
            * 1.1.1.1.1.2. ✅ Registered users **should be able to** make the application remember their username and password. 
        * 1.1.1.1.2. ✅ Registered users **shall be able to** put up a profile picture. 
            * 1.1.1.1.2.1. ❌ Registered users **shall be able to** change their profile pictures.
            * 1.1.1.1.2.2. ❌ Registered users **shall be able to** delete their profile pictures.
        * 1.1.1.1.3. ✅ Registered users **shall be able to** write their personal information in their personal pages while either creating their account or after registering the application.
            * 1.1.1.1.3.1. ✅ Registered users **shall be able to** change this information. 
    * 1.1.1.2. ✅ Guest users **shall be able to** use the application.
        * 1.1.1.2.1. ✅ Guest users **shall be able to** see the content of the forum.
    * 1.1.1.3. ✅ Registered users **shall** enter their e-mail or username and password to re-enter their account if they are logged out.
    * 1.1.1.4. ❌ Admin user **shall be able to** block another authenticated user. 
    * 1.1.1.5. ❌ Admin users **shall be able to** unblock another authenticated user.
    * 1.1.1.6. ❌ Registered users **shall be able to** delete their accounts. 
    * 1.1.1.7. ❌ Registered users **shall be able to** change their password. 
    * 1.1.1.8. ✅ Registered users **shall be able to** follow the subforum topics.
    * 1.1.1.9. ✅ Registered users **shall be able to** unfollow the subforum topics.
    * 1.1.1.10. ✅ Registered users **shall be able to** follow the other users.
    * 1.1.1.11. ✅ Registered users **shall be able to** unfollow the other users.
    * 1.1.1.12. ✅ Registered users **shall be able to** choose a user tag according to their interests in finance.
        * 1.1.1.12.1. ✅ Registered users **shall be able to** choose one of the four user tags, which are investors, day traders, Financial Analysts/Researchers, or Financial Enthusiasts.
        * 1.1.1.12.2. ✅ Registered users **shall be able to** change their user tag to another user tag.



* 1.1.2. Posts 
    * 1.1.2.1. ✅ Registered users **shall be able to** post forum posts.
    * 1.1.2.2. ✅ Registered users **shall be able to** like posts.
       * 1.1.2.2.1. ✅ Users **shall be able to** see how many users have liked a post. 
    * 1.1.2.3. ✅ Registered users **shall be able to** unlike a post. 
    * 1.1.2.4. ✅ Registered users **shall be able to** dislike posts.
       * 1.1.2.4.1. ✅ Users **shall be able to** see how many users have disliked a post.
    * 1.1.2.5. ✅ Registered users **shall be able to** remove a dislike from a post.
    * 1.1.2.6. ✅ Registered users **shall be able to** comment on posts.
       * 1.1.2.6.1. ✅  Users **shall be able to** see the comments.
    * 1.1.2.7. ✅ Registered users **shall be able to** delete their comment on a post.
    * 1.1.2.8. ✅ Users **shall be able to** find information about the financial assets in the post.
    * 1.1.2.10. ✅ Guest users **shall be able to** post charts of financial assets.
    * 1.1.2.11. ✅ Registered users **shall be able to** delete their posts.

 * 1.1.3. Search 
      * 1.1.3.1. ✅ Users **shall be able to** search forums based on their name. 
      * 1.1.3.2. ✅ Users **should be able to** search post and forums by their related tags.   

##### 1.1.4 Forum Topics and Discussions
* 1.1.4.1 ✅ Registered users **shall be able to** create new topics related to financial assets. 
* 1.1.4.2 ✅ Registered users **shall be able to** like, unlike, dislike, and undislike posts.
* 1.1.4.3 ✅ Registered users **shall be able to** write comments under posts.
* 1.1.4.4 ✅ Registered users **shall be able to** delete their own posts and comments. 
* 1.1.4.5 ❌ Registered users **shall be able to** edit their own posts and comments. 
* 1.1.4.6 ✅ Registered users **shall be able to** add a title, description, and public tags while creating a post. 
* 1.1.4.7 ✅ Registered users **shall be able to** upload images while creating a post.
* 1.1.4.8 ✅ Registered users **shall be able to** comment under posts and reply to comments. 
* 1.1.4.9 ✅ Registered users **shall be able to** create posts to share opinions, questions, etc. 

##### 1.1.5 Subforum Management
* 1.1.5.1 ✅ Admin users **shall be able to** create subforums (e.g., Bitcoin, Borsa Istanbul). 
* 1.1.5.2 ✅ Admin users **shall be able to** delete subforums. 
* 1.1.5.3 ❌ Admin users **shall be able to** ban users.
* 1.1.5.4 ❌ Admin users **shall be able to** add only one base tag to the subforums.


##### 1.1.6 News Filtering
* 1.1.6.1 ⚠️ Registered user **shall be able to** categorize news articles by asset type and relevance.
* 1.1.6.2 ⚠️ Registered  user **shall be able to** filter forum news based on desired financial assets.
* 1.1.6.3 ⚠️ Registered  user **should be able to** set up personalized news feeds for selected assets.

##### 1.1.7 Portfolio Sharing
* 1.1.7.1 ❌ Registered user **shall be able to** create and share their own financial portfolios.
* 1.1.7.2 ❌ Registered user **should be able to** set privacy levels for their portfolios (public, friends-only, private).
* 1.1.7.3 ✅ Registered user **shall be able to** view portfolio performance metrics and analytics.
* 1.1.7.4 ✅ The registered user who has portfolios in the application **shall not be able to** share his/her portfolios on feeds. 
* 1.1.7.5 ❌ The registered user who has portfolios in the application **shall be able to** change the visibility of his/her portfolios on his/her profile page.




#### 1.2 System Requirements
##### 1.2.1 Financial Asset Integration

* 1.2.1.1 ✅ The system **shall be able to** provide the current values of financial assets mentioned in the topics.
* 1.2.1.2 ✅ The system **shall be able to** retrieve financial data from reliable third-party APIs.
* 1.2.1.3 ✅ The system **should be able to** update financial asset values in real-time or at regular intervals.

#### 1.2.2 Search and Navigation
* 1.2.2.1 ✅ The system **shall be able to** provide a search function to find topics, users, and assets.
* 1.2.2.2 ✅ The system **should be able to** offer advanced search filters (e.g., date range, asset type).




---

###  🛠️ 2. Non-Functional Requirements

#### 2.1 Performance

* 2.1.1 ✅ The system **shall** load pages within 6 seconds under normal network conditions. 
* 2.1.2 ✅ The system **should** handle up to 100 concurrent users without performance degradation.

#### 2.2 Security

* 2.2.1 ✅ The system **shall** encrypt user passwords and sensitive data.
* 2.2.2 ✅ The system **should** implement measures against common web vulnerabilities (e.g., SQL injection, XSS).
* 2.2.3 ✅  The system **shall** comply with relevant data protection regulations.

#### 2.3 Usability

* 2.3.1  ✅ The system **shall** have an intuitive and user-friendly interface.
* 2.3.2 ✅ The system **should** be accessible on various devices (desktop, tablet, mobile).
* 2.3.3 ✅ The system **should** follow UI/UX best practices for navigation and layout.
* 2.3.4 ✅ The system **shall** allow easy navigation between different sections of the forum.

#### 2.4 Scalability

* 2.4.1 ✅ The system **should** be designed in a sustainable manner in order to accommodate future growth in user base and functionality.
* 2.4.2 ✅ The system **shall** use scalable technologies and architectures.

#### 2.5 Reliability and Availability

* 2.5.1 ✅ The system **shall** have an uptime of 99.5% excluding scheduled maintenance.
* 2.5.2 ❌ The system **should** implement data backup and recovery mechanisms.

#### 2.6 W3S Web Annotation
* 2.6.1 Annotation Capability
  * 2.6.1.1 ✅ The system shall support W3C Web Annotation standards, enabling users to annotate posts, comments, and financial analysis sections with text, 
   tags, and links.
  * 2.6.1.2 ✅  The system shall support various annotation types, such as highlighting, commenting, and linking within content.

* 2.6.2 Annotation Storage and Retrieval
   * 2.6.2.1 ✅ The system shall securely store annotations, associating them with the relevant content and users.
   * 2.6.2.2 ✅ Users shall be able to retrieve their own and view others' annotations on relevant content.
* 2.6.3 W3C Compliance
   * 2.6.3.1 ✅ The system shall adhere to W3C Web Annotation standards, ensuring compatibility and consistency with external platforms and future technologies.

# API Documentation

## Link to the API
http://35.246.188.121:8080/swagger-ui/index.html#/

### Base URL
`http://35.246.188.121:8080`

## Overview
This API provides a set of endpoints for managing users, subforums, posts, comments, portfolios, and assets in the application. Below is an overview of each API group, explaining their purpose and usage.

---

## **User Controller**
Endpoints related to user management:
- **Set User Details**: Updates user-specific information such as email, bio, and profile photo. (`POST /api/user/set-user-details`)
- **Get Profile**: Fetches the profile details of a user by username. (`GET /api/user/profile`)
- **Get User Details**: Fethes user-specific information such as email, bio, and profile photo. (`GET /api/user/set-user-details/{username}`)

---

## **Subforum Controller**
Endpoints for managing subforums:
- **Create Subforum**: Allows authorized users to create a new subforum with a name, description, and tag color. (`POST /api/subforum/create`)
- **Delete Subforum**: Deletes a subforum by ID. (`POST /api/subforum/delete`)
- **Follow Subforum**: Enables users to follow a subforum for updates. (`POST /api/subforum/follow`)
- **Unfollow Subforum**: Unfollows a specific subforum. (`POST /api/subforum/unfollow`)
- **Get Subforum by ID**: Retrieves detailed information for a specific subforum by ID. (`GET /api/subforum/{id}`)
- **Get Followed Subforums**: Lists all subforums followed by the user. (`GET /api/subforum/followed`)
- **Get All Subforums**: Retrieves a list of all available subforums. (`GET /api/subforum/all`)

---

## **Post Controller**
Endpoints for creating and managing posts:
- **Create Post**: Lets users create a new post with a title, content, and subforum ID. (`POST /api/post/create`)
- **Delete Post**: Deletes a specific post by its ID. (`POST /api/post/delete`)
- **Get Post by ID**: Retrieves detailed information for a specific post by ID. (`GET /api/post/{id}`)
- **Get Recent Posts**: Retrieves a list of the most recent posts. (`GET /api/post/recent`)
- **Get Popular Posts**: Retrieves a list of the most popular posts. (`GET /api/post/popular`)
- **Get Posts by User**: Fetches all posts created by a specific user. (`GET /api/post/get-posts-by-user`)
- **Get Posts by Tag**: Retrieves all posts associated with a specific tag. (`GET /api/post/get-posts-by-tag`)
- **Get Posts by Subforum**: Fetches all posts within a specific subforum. (`GET /api/post/get-posts-by-subforum`)
- **Get Posts for You**: Displays posts recommended for the user based on preferences. (`GET /api/post/for-you`)
- **Get Posts by Followed Topics**: Retrieves posts from subforums the user follows. (`GET /api/post/followed-topics`)
- **Get Posts by Followed People**: Retrieves posts created by users followed by the current user. (`GET /api/post/followed-people`)

---

## **Portfolio Controller**
Endpoints for managing user portfolios:
- **Add Asset to Portfolio**: Adds an asset to the user’s portfolio with a specified amount. (`POST /api/portfolio/add-asset`)
- **Get Portfolio**: Retrieves all portfolio data for a specific user. (`GET /api/portfolio/get-portfolio`)
- **Get Portfolios by Asset**: Fetches portfolios associated with a specific asset. (`GET /api/portfolio/by-asset`)

---

## **Comment Controller**
Endpoints for commenting on posts:
- **Create Comment**: Adds a new comment to a specific post. (`POST /api/comment/create`)
- **Delete Comment**: Deletes a specific comment by ID. (`POST /api/comment/delete`)
- **Get Comments**: Retrieves all comments for a specific post by ID. (`GET /api/comment/get-comments`)

---

## **Asset Controller**
Endpoints for managing assets:
- **Add Asset**: Allows adding a new asset with details like name, symbol, and image URL. (`POST /api/asset/add`)
- **Get Asset Details**: Fetches detailed information about a specific asset. (`POST /api/asset/details`)
- **Get Asset by ID**: Retrieves detailed information for an asset by its ID. (`GET /api/asset/{id}`)
- **Get Asset Chart**: Fetches historical chart data for a specific asset. (`GET /api/asset/chart`)
- **Get All Assets**: Retrieves a list of all available assets. (`GET /api/asset/all`)

---

## **Authentication Controller**
Endpoints for user authentication:
- **Register**: Creates a new user account with a username, email, and password. (`POST /api/auth/register`)
- **Login**: Authenticates a user and provides a token. (`POST /api/auth/login`)
- **Validate Token**: Checks the validity of the provided authentication token. (`GET /api/auth/validate-token`)

---

## **Search Controller**
Endpoints for searching resources:
- **Search Users**: Retrieves a list of users matching the keyword. (`GET /api/search/user`)
- **Search Tags**: Fetches tags associated with the keyword. (`GET /api/search/tag`)
- **Search Subforums**: Retrieves subforums related to the keyword. (`GET /api/search/subforum`)
- **Search Posts**: Finds posts related to the keyword. (`GET /api/search/post`)
- **Search Assets**: Finds assets matching the keyword. (`GET /api/search/asset`)

---

## **Like Controller**
Endpoints for managing post likes:
- **Like Post**: Adds a like to a specific post. (`POST /api/like/like-post`)
- **Unlike Post**: Removes a like from a specific post. (`POST /api/like/unlike-post`)
- **Get Liked Posts**: Retrieves all posts liked by the user. (`GET /api/like/get-liked-posts`)

---

## **Follow Controller**
Endpoints for managing user follow relationships:
- **Follow User**: Adds a user to the current user’s follow list. (`POST /api/follow/follow-user`)
- **Unfollow User**: Removes a user from the current user’s follow list. (`POST /api/follow/unfollow-user`)
- **Get Followings**: Retrieves a list of users followed by the current user. (`GET /api/follow/get-followings`)
- **Get Followers**: Retrieves a list of users following the current user. (`GET /api/follow/get-followers`)

---

## **Dislike Controller**
Endpoints for managing post dislikes:
- **Dislike Post**: Adds a dislike to a specific post. (`POST /api/dislike/dislike-post`)
- **Undislike Post**: Removes a dislike from a specific post. (`POST /api/dislike/undislike-post`)

---

## **Image Controller**
Endpoints for managing images:
- **Get Image by Filename**: Retrieves an image file by its filename. (`GET /api/images/{filename}`)

---


# Example API Calls

## Retrieve Portfolio Data
**Endpoint:** `GET /api/portfolio/get-portfolio`

### Parameters:
- **username** (string): The username of the account.

### Example Request:
```http
GET http://35.246.188.121:8080/api/portfolio/get-portfolio?username=johndoe

 {
  "isSuccessful": true,
  "message": "Portfolios retrieved successfully",
  "username": null,
  "portfolios": [
    {
      "id": 1,
      "asset": {
        "id": 3,
        "name": "Amazon.com, Inc.",
        "yahooFinanceSymbol": "AMZN",
        "tradingViewSymbol": "NASDAQ:AMZN",
        "imageUrl": "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AMZN.png"
      },
      "amount": 1.0,
      "totalCurrentPrice": 223.2899932861328
    },
    {
      "id": 18,
      "asset": {
        "id": 1,
        "name": "Apple Inc.",
        "yahooFinanceSymbol": "AAPL",
        "tradingViewSymbol": "NASDAQ:AAPL",
        "imageUrl": "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AAPL.png"
      },
      "amount": 4.0,
      "totalCurrentPrice": 999.1599731445312
    }
  ],
  "totalValue": 1222.449966430664
}
```

## Create a Post
**Endpoint:** `POST /api/post/create`

### Headers:
- Authorization (string): Bearer token for authentication (Bearer {token}).

### Request Body:
```http
{
  "title": "BIST 100 Post performance 📈",
  "content": [
    {
      "type": "text",
      "value": "Did you know the BIST 100 reflects the performance of Turkey's top 100 companies?\nWhich sectors do you think perform best in this index? 🧐"
    },
    {
      "type": "chart",
      "value": "BIST:XU100"
    }
  ],
  "subforumID": 2
}
```

### Example Response:
```http
{
  "isSuccessful": true,
  "message": "Post created successfully",
  "id": 73
}

```

## Retrieve Comments
**Endpoint:** `GET /api/comment/get-comments`

### Parameters:
- postId (int): The ID of the post to retrieve comments for.

### Example Request:
```http
GET http://35.246.188.121:8080/api/comment/get-comments?postId=24

```

### Example Response:
```http
[
  {
    "id": 6,
    "content": [
      {
        "type": "text",
        "value": "Why are manufacturing and exports important?"
      }
    ],
    "createdBy": "ege_yalin",
    "postID": 24,
    "parentCommentID": null,
    "creationDate": "2024-12-17T09:14:44.500795",
    "replies": [
      {
        "id": 8,
        "content": [
          {
            "type": "text",
            "value": "Turkey’s manufacturing industry produces goods like cars, textiles, and electronics, which are sold to other countries (exports). This brings money into the economy and helps companies grow."
          }
        ],
        "createdBy": "warrenthebuff",
        "postID": 24,
        "parentCommentID": 6,
        "creationDate": "2024-12-17T09:17:33.065789",
        "replies": [
          {
            "id": 9,
            "content": [
              {
                "type": "text",
                "value": "Thanks!"
              }
            ],
            "createdBy": "ege_yalin",
            "postID": 24,
            "parentCommentID": 8,
            "creationDate": "2024-12-17T09:20:02.817937",
            "replies": []
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "content": [
      {
        "type": "text",
        "value": "What is value over hype?"
      }
    ],
    "createdBy": "ege_yalin",
    "postID": 24,
    "parentCommentID": null,
    "creationDate": "2024-12-17T09:16:03.306361",
    "replies": []
  },
  {
    "id": 14,
    "content": [
      {
        "type": "text",
        "value": "Interesting take! For beginners like me, what’s the best way to start analyzing these 'rising star' companies on the BIST? Any tools or resources you recommend? 📈"
      }
    ],
    "createdBy": "karatashsyn",
    "postID": 24,
    "parentCommentID": null,
    "creationDate": "2024-12-17T11:25:28.104471",
    "replies": []
  }
]
```

## User Interface / User Experience

### Mobile - Code Links related to Each Screens
Related ScreenShots will be given in same order.

- [Profile Settings](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/account-profile/index.jsx)
- [Profile](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/account-root/index.jsx)
- [Add Asset](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/add-asset/index.jsx)
- [Asset Detail](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/asset-detail/index.jsx)
- [Create](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/create-root/index.jsx)
- [Create Post](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/create-post/index.jsx)
- [Create Subforum](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/create-subforum/index.jsx)
- [Explore](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/explore-root/index.jsx)
- [Search Results](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/explore-search--results/index.jsx)
- [Followed Topics](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/followed-topics/index.jsx)
- [Follower Users](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/followers/index.jsx)
- [Following Users](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/following/index.jsx)
- [Home](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/home-root/index.jsx)
- [Portfolio](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/portfolio/index.jsx)
- [Post Detail](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/post-detail/index.jsx)
- [User Profile](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/profile/index.jsx)
- [Subforum Detail](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/subforum-detail/index.jsx)
- [Tag Detail](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/tag-detail/index.jsx)
- [Welcoming Screen](https://github.com/bounswe/bounswe2024group10/blob/main/mobile/tradeverse/screens/welcoming/index.jsx)

### Mobile - ScreenShots

### Profile Settings - Profile - Add Asset
<div style="display:flex; flexWrap:wrap;">
<img width="360" alt="ProfileSettings" src="https://github.com/user-attachments/assets/f06027c3-987c-48f9-b1d7-22d543071809" />
<img width="360" alt="Profile" src="https://github.com/user-attachments/assets/18d5f88e-de05-475e-9368-4c613345b6f6" />
<img width="360" alt="AddAsset" src="https://github.com/user-attachments/assets/9edf098e-cdd4-4ae9-8ba5-86cdba4108db" />
</div>

### Asset Detail - Create - Create Post
<div style="display:flex; flexWrap:wrap;">
<img width="360" alt="AssetDetail" src="https://github.com/user-attachments/assets/e50e4f20-d52a-490f-9288-04a049c57a99" />
<img width="360" alt="Create" src="https://github.com/user-attachments/assets/53938122-2ccd-400e-9aa6-91f5a44f54aa" />
<img width="360" alt="CreatePost" src="https://github.com/user-attachments/assets/2d0afa14-75ca-42f5-9c9a-505370c49240" />
</div>

### Create Subforum - Explore - Explore Search Results
<div style="display:flex; flexWrap:wrap;">
<img width="360" alt="CreateSubforum" src="https://github.com/user-attachments/assets/809c771c-b50f-48c0-844f-d1817968c93d" />
<img width="360" alt="Explore" src="https://github.com/user-attachments/assets/4e37ac4c-8e27-4fbf-9da7-c29e9abef3b3" />
<img width="360" alt="SearchResults" src="https://github.com/user-attachments/assets/bcda6be8-4ffe-4056-a302-8c196a35bf56" />
</div>

### Followed SubForums - Followers - Followings
<div style="display:flex; flexWrap:wrap;">
<img width="360" alt="FollowedTopics" src="https://github.com/user-attachments/assets/394b04d0-d7d1-43dd-8664-1ad01a70830e" />
<img width="360" alt="Followers" src="https://github.com/user-attachments/assets/d9829a54-0b06-400d-9471-524b1660e6c6" />
<img width="360" alt="Followings" src="https://github.com/user-attachments/assets/96e521d3-870c-4b87-b8c1-2c03c86bd3f1" />
</div>


### Home - Portfolio - Post Detail
<div style="display:flex; flexWrap:wrap;">
<img width="360" alt="Home" src="https://github.com/user-attachments/assets/78d0be42-6fba-47dc-8cd0-d5f1b6fdcde0" />
<img width="360" alt="Portfolio" src="https://github.com/user-attachments/assets/1d45601d-b4e5-48f4-9793-691193f38a69" />
<img width="360" alt="PostDetail" src="https://github.com/user-attachments/assets/99122a63-b656-45de-93b2-caebbebbe2c2" />
</div>

### User Profile - Subforum Detail - Tag Detail
<div style="display:flex; flexWrap:wrap;">
<img width="360" alt="UserProfile" src="https://github.com/user-attachments/assets/0f65d08b-5587-43a7-b97f-d86852e34a5e" />
<img width="360" alt="SubforumDetail" src="https://github.com/user-attachments/assets/35605d30-6c0a-4960-81ee-ff4aa49a0855" />
<img width="360" alt="TagDetail" src="https://github.com/user-attachments/assets/beb92b43-350c-4151-9748-4d2714bd04ef" />
</div>

### Welcoming Screens
<div style="display:flex; flexWrap:wrap;">
<img width="360" alt="Welcoming1" src="https://github.com/user-attachments/assets/734d01a3-368a-4a90-9795-8482416ceef0" />
<img width="360" alt="Welcoming2" src="https://github.com/user-attachments/assets/dcac7130-3431-40f5-8162-f9ed96f0c45e" />
</div>


### Web UI Links
- [Annotation](https://github.com/bounswe/bounswe2024group10/blob/main/web/tradeverse/src/components/styles/annotation.module.css)
- [Comment](https://github.com/bounswe/bounswe2024group10/blob/main/web/tradeverse/src/components/styles/comment.module.css)
- [Feed](https://github.com/bounswe/bounswe2024group10/blob/main/web/tradeverse/src/components/styles/feed.module.css)
- [Post](https://github.com/bounswe/bounswe2024group10/blob/main/web/tradeverse/src/components/styles/post.module.css)
- [Post Header](https://github.com/bounswe/bounswe2024group10/blob/main/web/tradeverse/src/components/styles/postHeader.module.css)
- [Home Page](https://github.com/bounswe/bounswe2024group10/blob/main/web/tradeverse/src/components/styles/style.module.css)
- [Subforum Navbar](https://github.com/bounswe/bounswe2024group10/blob/main/web/tradeverse/src/components/styles/subforumNavbar.module.css)

### Screenshots

### Register, Login, User Type
<img width="1265" alt="register" src="https://github.com/user-attachments/assets/ab6f4f3d-8aa7-4fd8-abae-d0bd7bddd491" />
<img width="1268" alt="login" src="https://github.com/user-attachments/assets/e6d338be-0e6d-4910-9ee4-4b4758740abd" />
<img width="1264" alt="user type" src="https://github.com/user-attachments/assets/40479351-7fa0-440e-82ee-3e3026ba7043" />

### Home
<img width="1267" alt="main" src="https://github.com/user-attachments/assets/29d9dfea-24ca-478b-a5c3-6c71fc5d61eb" />
<img width="1267" alt="subforum" src="https://github.com/user-attachments/assets/e832906c-a66b-4cae-a2f8-2790bd273722" />
<img width="778" alt="post with chart" src="https://github.com/user-attachments/assets/a74361d8-ef80-47bc-9c79-c0b0c9c387e9" />

### Search
<img width="1268" alt="search asset" src="https://github.com/user-attachments/assets/9fee7a03-1029-4dd7-a9aa-246425fe748e" />
<img width="1268" alt="search tags" src="https://github.com/user-attachments/assets/1fc0017f-c7ee-4264-8194-1bccf37e06c4" />
<img width="1265" alt="search subforum" src="https://github.com/user-attachments/assets/46a515a3-08c9-48e8-9771-89b426bfdc3e" />
<img width="1265" alt="search post" src="https://github.com/user-attachments/assets/66cb9465-c7a7-48fd-8e4b-d756a1e9cbca" />
<img width="1265" alt="search users" src="https://github.com/user-attachments/assets/2cbbc8de-87e7-4116-ae21-7a32ba281c7d" />

### Portfolio
<img width="1276" alt="my portfolio empty" src="https://github.com/user-attachments/assets/531ff4bf-a3a8-48fe-8d92-5bff119ca577" />
<img width="1279" alt="my portfolio with assets" src="https://github.com/user-attachments/assets/b62c93ec-833e-4ea8-a459-0fe256e54e38" />

### Account and user
<img width="1264" alt="personal account" src="https://github.com/user-attachments/assets/8128ca3d-0b73-438b-b292-ee7d2dc02791" />
<img width="1268" alt="user" src="https://github.com/user-attachments/assets/753e5f63-90b8-4487-84bc-1ecdc5f88572" />

### Admin
<img width="1277" alt="admin create subforum" src="https://github.com/user-attachments/assets/8ccf078e-fd57-4e2c-bf99-4e776b80e1c1" />

### Annotation
<img width="1268" alt="annotation" src="https://github.com/user-attachments/assets/9bf841e9-c79a-4083-aad2-c3d7fb001e9c" />

### Comment and replies
<img width="544" alt="comment and reply" src="https://github.com/user-attachments/assets/af5644b2-e268-46fc-b544-3d6d4a5a1ab8" />




## W3C Standard - Annotations

-   **Standard Adoption**:  
    We adopted the **W3C Web Annotation Data Model** to structure annotations, ensuring compliance with international web standards.
    
-   **Annotation Features**:
    
    -   Users can annotate text within posts and comments.
    -   Annotations are displayed contextually on the right-hand side of the screen for easy accessibility.
    -   Both posts and comments can have multiple annotations, allowing users to highlight and discuss specific parts.
-   **Backend Implementation**:
    
    -   The backend was designed to handle storing and retrieving annotations as JSON-LD (Linked Data).
    -   Annotations are linked to specific posts or comments using unique identifiers.
    -   RESTful endpoints for annotation CRUD (Create, Read, Update, Delete) operations were developed.
-   **Frontend Integration**:
    
    -   A user-friendly annotation tool was integrated into the post/comment view. Users can select text and create an annotation with a simple interface.
    -   Annotations are displayed in a sidebar, showing details such as the selected text, user who created the annotation, and any associated comments.
-   **Real-Time Updates**:
    
    -   Annotations are synced in real time using WebSockets. Users viewing a post can see new annotations without refreshing the page.
-   **Permissions and Visibility**:
    
    -   Annotations are user-specific, with options to make them public or private.
    -   Public annotations are visible to all users, fostering collaborative discussions.
    -   Private annotations are restricted to the user who created them.
-   **Use Cases**:
    
    -   Highlighting key points in financial analyses.
    -   Adding clarifications or insights to specific phrases in posts.
    -   Enhancing discussions with targeted feedback or questions.

## Scenarios
# Whole Scenario
Ege Yalın is a student at Dokuz Eylül University studying Economics. He is a freshman. He wants to explore finance. Also, he needs money so he wants to get an insight how to make money from stock exchange. When they are in a microeconomic class, their professor suggest Tradeverse application. After class, Ege wants to give a chance to Tradeverse. At first sight, he enters as a guest. After he spends time in the application, he likes the Tradeverse. He decides to sign up, and put a tag as "beginner". He follows his professor, Warren Buffet and Doran Acemoğlu since he trusts their advices. After that, he sees the post of his professor. He wants to put some questions as annotation about what the professor writes in his post. Since he has some assets in stock exchange, he wants to share his portfolio with other users. Then, he searches the assets to add and add his assets. Then he goes to search page to see recent posts. He faces that Aygaz assets prices increases, so he wants to get an information about Aygaz. He clicked the asset name and faces the information page about Aygaz. He decides to buy some Aygaz assets, since he thinks that the price of Aygaz is going to increase. He goes back to his portfolio and add Aygaz assets. He finally goes to for you page and looks for the posts of followed topics and followed users.

# Relations with Features and Work Completed

1-) **Guest User, Login & Register Properties**: "At first sight, he enters as a guest. After he spends time in the application, he likes the Tradeverse. He decides to sign up..."

2-) **User Tags**: "... and put a tag as "beginner""

3-) **Following Other Users**: "He follows his professor, Warren Buffet and Doran Acemoğlu since he trusts their advices."

4-) **Annotation Standard**: "He wants to put some questions as annotation about what the professor writes in his post."

5-) **Search Functionality, seeing recent posts**: "Then, he searches the assets to add and add his assets. Then he goes to search page to see recent posts."

6-) **Asset Details**: "He clicked the asset name and faces the information page about Aygaz."

7-) **Adding Assets to Portfolio**: "He goes back to his portfolio and add Aygaz assets."

8-) **"For You", "Followed Topics/Subforums", "Followed Users' Posts" Pages**: "He finally goes to for you page and looks for the posts of followed topics and followed users."

# Individual Documentation

## 2.1 Hüseyin Karataş
### Responsibilities
  * Leading and improving the mobile application for the milestone 3.
  * Establishing connection to backend for newly added endpoints.
  * Refactoring on mobile application logic relating to other endpoints both on programming and user experience level.
  * Fixing network problem on the APK.

### Main contributions
  * Connected new backend endpoints to the mobile application.
  * Determined backend response types and logics for some endpoints.
  * Refactored mobile app according to new/modified endpoints.
  * Documented mobile related parts of the Customer Milestone 3 Report
  * Refactored mobile app's ui by creating skeleton loaders.
  * Fixed major Network Problem occuring on APK.
  * Added new feature named tag detail page which returns posts including the tag.
  * Added new feature to post cards which allows user to add references to post for users, assets and tags. User can go to related entity detail page by pressing on them.
  * Created Release Notes for the final customer milestone [here](https://github.com/bounswe/bounswe2024group10/releases/tag/customer-presentation-3). 



### Code related issues
  | Task Name | Related issue | Related PRs |
  | --- | --- | --- | 
  | Subforum Features | [#480](https://github.com/bounswe/bounswe2024group10/issues/480) | [PR 479](https://github.com/bounswe/bounswe2024group10/pull/479) |
  | Fix APK Network Problem | [#546](https://github.com/bounswe/bounswe2024group10/issues/546) | [PR 527](https://github.com/bounswe/bounswe2024group10/pull/527) |
| Imrpoved Navigation | [542](https://github.com/bounswe/bounswe2024group10/issues/542) | [PR 527](https://github.com/bounswe/bounswe2024group10/pull/527) |
| Rich Post Content | [#544](https://github.com/bounswe/bounswe2024group10/issues/544) | [PR 541](https://github.com/bounswe/bounswe2024group10/pull/541) |
| Asset Details | [#562](https://github.com/bounswe/bounswe2024group10/issues/562) | [PR 474](https://github.com/bounswe/bounswe2024group10/pull/474) |


### Management related issues
  | Task Name | Related issue | Related PRs |
  | --- | --- | --- | 
  | Finalize W3 Discussion | [#497](https://github.com/bounswe/bounswe2024group10/issues/497) | -- |
  | Document Mobile Section for CM Report 3  | [#497](https://github.com/bounswe/bounswe2024group10/issues/564) | -- |
### PRs
  | Task Name | Related PR |
  | --- | --- |  
  | Improve Subforum Features | [PR 479](https://github.com/bounswe/bounswe2024group10/pull/479) |
  | Refactor The Application | [PR 527](https://github.com/bounswe/bounswe2024group10/pull/527) |
  | New Post Features | [PR 541](https://github.com/bounswe/bounswe2024group10/pull/541) |
  | Asset Details | [PR 474](https://github.com/bounswe/bounswe2024group10/pull/474) |
  
### Summary and Additional Notes
- Throughout Milestone 3, significant improvements were made to the mobile application's architecture to ensure better maintainability, scalability, and user experience.
- Collaboration with the backend team was key in defining and integrating new endpoint logic, ensuring seamless communication between frontend and backend.
- On the APK, I was constantly ecountering with the error that blocks our http requests to backend API. I researched and found that this is a new security measure for the new Android versions. So it was blocking http and forcing https for each network requests. Solution was to modify the application config so that android will allow our app to use http on the requests.
- Introducing skeleton loaders in the UI enhanced the perceived performance and user experience by providing immediate visual feedback during loading times.
- The addition of rich post content features, such as tag detail pages and post references, improved the app's functionality, making it more dynamic and user-centric.
The refactored navigation structure not only simplified user journeys but also gave a user consistency across different parts of the application.
- **One Mistake I made**: On the refactor branch, I, unintentionally, pushed some improvements that should have been opened as a seperate PR. Even the improvements were not huge, it would be more convenient to have them in seperate PRs.


## 2.2 Yusuf Kağan Çiçekdağ 
### Group: Group 10/Tradeverse, Subgroup: Android
### Responsibilities
  * Mobile aplication page design, writing/editing required functions and establishing connections between pages and backend endpoints
  * Writing some reports (Most of Customer Presentation 2 Report, some parts of the Final Milestone Report, as well as some of the Lab reports)
  * Giving support to team members in related tasks, especially during Lab hours

### Main contributions
  * Connecting (Mobile) Profile Update page with its related endpoint [#525](https://github.com/bounswe/bounswe2024group10/pull/525)
  * Fixing Asset Details Screen
  * Helped [Hüseyin Karataş](https://github.com/bounswe/bounswe2024group10/wiki/H%C3%BCseyin%20Karata%C5%9F) for Fixing Portfolio Screen [#526](https://github.com/bounswe/bounswe2024group10/pull/526)
  * Added Tag Detail Screen with required endpoint connections with help of [Hüseyin Karataş](https://github.com/bounswe/bounswe2024group10/wiki/H%C3%BCseyin%20Karata%C5%9F)  [#530](https://github.com/bounswe/bounswe2024group10/pull/530)
  * Added some unit tests [#528](https://github.com/bounswe/bounswe2024group10/pull/528)
  * Helped the team for adding realistic data to our application
  * Writing some parts of the Final Milestone Report
  * Helped [Nazlıcan Aka](https://github.com/bounswe/bounswe2024group10/wiki/Nazl%C4%B1can-Aka) and [Gülşen Sabak](https://github.com/bounswe/bounswe2024group10/wiki/G%C3%BCl%C5%9Fen-Sabak) for writing the Final Milestone Presentation Scenario


### Code related significant issues
  | Task Name | Related Issue |
  | --- | --- |
  | Connecting (Mobile) Profile Update page with its related endpoint | N/A |  
  | Fixing Asset Details Screen | N/A |
  | Helped [Hüseyin Karataş](https://github.com/bounswe/bounswe2024group10/wiki/H%C3%BCseyin%20Karata%C5%9F) for Fixing Portfolio Screen | N/A |
  | Added Tag Detail Screen with required endpoint connections with help of [Hüseyin Karataş](https://github.com/bounswe/bounswe2024group10/wiki/H%C3%BCseyin%20Karata%C5%9F) | N/A |
  | Added some unit tests | N/A |

### Management related significant issues
  | Task Name | Related Issue |
  | --- | --- |  
  | Helped the team for adding realistic data to our application | N/A |
  | Writing some parts of the Final Milestone Report | [#563](https://github.com/bounswe/bounswe2024group10/issues/563) |

### PRs
  | Task Name | Related PR |
  | --- | --- |
  | Connecting (Mobile) Profile Update page with its related endpoint | [#525](https://github.com/bounswe/bounswe2024group10/pull/525) |  
  | Fixing Asset Details Screen | [#526](https://github.com/bounswe/bounswe2024group10/pull/526) |
  | Helped [Hüseyin Karataş](https://github.com/bounswe/bounswe2024group10/wiki/H%C3%BCseyin%20Karata%C5%9F) for Fixing Portfolio Screen | [#526](https://github.com/bounswe/bounswe2024group10/pull/526) |
  | Added Tag Detail Screen with required endpoint connections with help of [Hüseyin Karataş](https://github.com/bounswe/bounswe2024group10/wiki/H%C3%BCseyin%20Karata%C5%9F) | [#530](https://github.com/bounswe/bounswe2024group10/pull/530) |
  | Added some unit tests | [#528](https://github.com/bounswe/bounswe2024group10/pull/528) |

### Unit Tests
  * [User Service Unit Tests](https://github.com/bounswe/bounswe2024group10/blob/main/backend/src/test/java/service/UserServiceUnitTest.java)

### Additional Information
  * As some important tasks in the mobile team were done at the last minute, I could not open related issues for these tasks inside such a hurry; so unfortunately ignored an important software convention. I am sorry about that inconvenience.
  * Apart from the tasks explained above, I also helped [Hüseyin Karataş](https://github.com/bounswe/bounswe2024group10/wiki/H%C3%BCseyin%20Karata%C5%9F) while trying to solve the APK Network Problem. He was the one managing to solve the problem, so I did not write this above but here instead.



## 2.3 Yasin ATLI 
### Group: Group 10/Tradeverse, Subgroup: Frontend / Backend
### Responsibilities
  * Led the development of frontend pages, including critical components and user interaction features.

  * Contributed to API development by adding and enhancing endpoints.

  * Collaborated with team members to resolve critical issues and improve system performance.

  * Solved errors and issues encountered by team members to ensure smooth progress.

  * Documented API endpoints with clear examples for efficient onboarding and maintenance.

### Main contributions
  * Designed and implemented key API endpoints, including the "Get Asset by ID" and "Search Subforums" functionalities.

  * Enhanced frontend components and pages, such as the Asset Info Page, Subforum Page, Tag Page, Create Subforum Page, and Search Page, to improve user experience and functionality.

  * Created and integrated reusable components, including NewsWidget and ProfileWidget, to streamline UI development.

  * Spearheaded API integration efforts, ensuring compatibility and robust interaction between frontend and backend systems.

  * Contributed to UI enhancements and styling improvements, aligning with the project’s design standards.

  * Actively resolved errors and provided technical support for issues faced by team members.


### API contributions
  | Task Name | Related Issue | Related PR |
  | --- | --- |   ---- |
  | isAdmin field integration | [#533](https://github.com/bounswe/bounswe2024group10/issues/533)| [PR 513](https://github.com/bounswe/bounswe2024group10/pull/513) |
  | Get asset by id endpoint and user profile photo coloumn update | [#472](https://github.com/bounswe/bounswe2024group10/issues/472) |[PR 471](https://github.com/bounswe/bounswe2024group10/pull/471) |
  | Subforum Detail Endpoint | [#477](https://github.com/bounswe/bounswe2024group10/issues/477) |[PR 475](https://github.com/bounswe/bounswe2024group10/pull/475) |
  | Search-subforums endpoint| [#478](https://github.com/bounswe/bounswe2024group10/issues/478) |[PR 475](https://github.com/bounswe/bounswe2024group10/pull/475) |

### Code related issues
  | Task Name | Related Issue | Related PR |
  | --- | --- |   ---- |
| Creating asset info component and page | N/A| [PR 462](https://github.com/bounswe/bounswe2024group10/pull/462) |
  | Create TagPage | [#531](https://github.com/bounswe/bounswe2024group10/issues/531) | [PR 521](https://github.com/bounswe/bounswe2024group10/pull/521) |
  | Create the CreateSubforumPage for Admins | [#532](https://github.com/bounswe/bounswe2024group10/issues/532) |   [PR 513](https://github.com/bounswe/bounswe2024group10/pull/513) |
  | API Endpoint Integration and Post Interaction Updates | [#534](https://github.com/bounswe/bounswe2024group10/issues/534) |   [PR 500](https://github.com/bounswe/bounswe2024group10/pull/500) |
  | UI Enhancements and Styling Improvements | [#535](https://github.com/bounswe/bounswe2024group10/issues/535) |   [PR 500](https://github.com/bounswe/bounswe2024group10/pull/500) |
  | Search Page Enhancements  | [#536](https://github.com/bounswe/bounswe2024group10/issues/536)|   [PR 502](https://github.com/bounswe/bounswe2024group10/pull/502) |
  | Subforum Page Enhancements |[#537 ](https://github.com/bounswe/bounswe2024group10/issues/537) |   [PR 502](https://github.com/bounswe/bounswe2024group10/pull/502) |
  | Portfolio Page Enhancements with Asset Management and Visualization | [#538](https://github.com/bounswe/bounswe2024group10/issues/538) |   [PR 504](https://github.com/bounswe/bounswe2024group10/pull/504) |
  | Posts and Subforum Link Enhancements | [539](https://github.com/bounswe/bounswe2024group10/issues/539) |  [PR 504](https://github.com/bounswe/bounswe2024group10/pull/504) |
  | User page problem | [#551](https://github.com/bounswe/bounswe2024group10/issues/551) |   [PR 522 ](https://github.com/bounswe/bounswe2024group10/pull/522)|
  | Account page problem | [#552](https://github.com/bounswe/bounswe2024group10/issues/552) |  [ PR 516](https://github.com/bounswe/bounswe2024group10/pull/516) |


### Management related issues
  | Task Name |Related Issue |
  | --- | --- | 
  | Document API Endpoints and Examples | [#556](https://github.com/bounswe/bounswe2024group10/issues/556) | 
  
### PRs
  | Task Name | Related PR |
  | --- | --- |  
  | Creating asset info component and page | [PR 462](https://github.com/bounswe/bounswe2024group10/pull/462) |
  | Get asset by id endpoint and user profile photo coloumn update | [PR 471](https://github.com/bounswe/bounswe2024group10/pull/471) |
  | Subforum endpoints | [PR 475](https://github.com/bounswe/bounswe2024group10/pull/475) |
  | Web/last enpoints connections | [PR 500](https://github.com/bounswe/bounswe2024group10/pull/500) |
  | Web/search page subfroum page | [PR 502](https://github.com/bounswe/bounswe2024group10/pull/502) |  
  | Web/portfolio page | [PR 504](https://github.com/bounswe/bounswe2024group10/pull/504) |  
  | Web/create subforum | [PR 513](https://github.com/bounswe/bounswe2024group10/pull/513) |  
  | Account page error | [PR 516 ](https://github.com/bounswe/bounswe2024group10/pull/516) |  
  | Add TagPage Functionality with Routing and Links | [PR 521](https://github.com/bounswe/bounswe2024group10/pull/521) |  
  | User page | [PR 522](https://github.com/bounswe/bounswe2024group10/pull/522) |  
  | follow service test | [PR 550](https://github.com/bounswe/bounswe2024group10/pull/550) |  

### Additional Information
  * Throughout the development process, I demonstrated a high level of effort and responsibility. I consistently responded to issues as soon as possible, ensuring the team’s progress was not hindered. Despite my efforts to foster collaboration and maintain project timelines, some team members were less responsible in their roles. Their lack of accountability often limited our potential to make the forum even better. Additionally, our backend team showed a lack of responsibility at times, requiring frontend members to step in and contribute to the implementation of services. Nevertheless, I took initiative to address these gaps and ensured that the project met its essential goals.

Link for unit tests that I implemented:

1-) [Follow service Unit Test](https://github.com/bounswe/bounswe2024group10/pull/550)




## 2.4 Onur Kafkas
### Group: Group 10/Tradeverse, Subgroup: Frontend
### Responsibilities
  * Led the design and implementation of the personal profile page and user page.
  * Developed front-end components and integration with the backend through API connections.
  * Managed the routing and navigation to ensure users could easily access their own profiles and view others’ profiles.
  * Debugged and resolved issues across various pages to ensure consistent functionality and user experience.

### Main contributions
  * Created the layout and functionality of the personal profile and user pages, enhancing user interaction with their accounts.
  * Integrated API calls to retrieve user data and posts, ensuring real-time updates.
  * Implemented routing logic to switch between pages dynamically, improving the overall site navigation.
  * Worked collaboratively with other team members to address design and technical challenges.


### API contributions
  | Task Name | Related issue | Related PR |
  | --- | --- | --- |
  | Account page endpoints | [#494](https://github.com/bounswe/bounswe2024group10/issues/494) | [#545](https://github.com/bounswe/bounswe2024group10/pull/545) |
  | User page endpoints | [#517](https://github.com/bounswe/bounswe2024group10/issues/517) | [#522](https://github.com/bounswe/bounswe2024group10/pull/522) |

### Code related issues
  | Task Name | Related issue | Related PR |
  | --- | --- | --- |
  | Navbar highlighting | - | [#468](https://github.com/bounswe/bounswe2024group10/pull/468) |
  | User page design | [#517](https://github.com/bounswe/bounswe2024group10/issues/517) | [#522](https://github.com/bounswe/bounswe2024group10/pull/522) |
  | Routing for user page | [#517](https://github.com/bounswe/bounswe2024group10/issues/517) | [#522](https://github.com/bounswe/bounswe2024group10/pull/522) |
  | Portfolio addition to user page | [#517](https://github.com/bounswe/bounswe2024group10/issues/517) | [#522](https://github.com/bounswe/bounswe2024group10/pull/522) |
  | Account page access bug fix | [#494](https://github.com/bounswe/bounswe2024group10/issues/494) | [#516](https://github.com/bounswe/bounswe2024group10/pull/516) |
  | Portfolio-account linking | [#494](https://github.com/bounswe/bounswe2024group10/issues/494) | [#516](https://github.com/bounswe/bounswe2024group10/pull/516) |

### Management related issues
  | Task Name | Related issue |
  | --- | --- |
  | Led the writing of Milestone 3 Report | [Milestone 3 Report](https://github.com/bounswe/bounswe2024group10/issues/563) |

### PRs
  | Task Name | Related PR |
  | --- | --- |
  | User Page | [#517](https://github.com/bounswe/bounswe2024group10/issues/517) | [#522](https://github.com/bounswe/bounswe2024group10/pull/522) |
  | Account Page | [#494](https://github.com/bounswe/bounswe2024group10/issues/494) | [#516](https://github.com/bounswe/bounswe2024group10/pull/516) |

### Additional Information
  * For my project, I was in charge of the front-end development, focusing primarily on designing both the personal profile page and the user page. This involved crafting intuitive and visually appealing interfaces, ensuring seamless API connections, efficient routing, and a smooth user experience. I worked through various bugs and errors, optimizing functionality where needed. I made sure that users profiles and other user details are displayed accurately and responsively across the site.



## 2.5 Gülşen Sabak
### Responsibilities
  * Present the customer milestone 3.
  * Improving the mobile application for the milestone 3.
  * Connecting backend endpoints to the mobile application.
  * Document integration tests and user tests

### Main contributions
  * Present the customer milestone 3.
  * Connected assigned backend endpoints to mobile application.
  * Created screens for mobile application.
  * Created integration tests and user tests.

### Code related issues
  | Task Name | Related issue | Related PRs |
  | --- | --- | --- | 
  | Implement Followers Screen on Mobile integrated with real time fetched data | [#487](https://github.com/bounswe/bounswe2024group10/issues/487) | [#508](https://github.com/bounswe/bounswe2024group10/pull/508) |
  | Implement Followings Screen on Mobile integrated with real time fetched data | [#487](https://github.com/bounswe/bounswe2024group10/issues/487) | [#509](https://github.com/bounswe/bounswe2024group10/pull/509) |
| Implement My Posts Screen on Mobile integrated with real time fetched data | [#488](https://github.com/bounswe/bounswe2024group10/issues/488) | [#507](https://github.com/bounswe/bounswe2024group10/pull/507) |
| Implement admin check and hiding create subforum for regular users | [#486](https://github.com/bounswe/bounswe2024group10/issues/486) | [#501](https://github.com/bounswe/bounswe2024group10/pull/501) |
| Unit test | [#461](https://github.com/bounswe/bounswe2024group10/issues/461) |  [#469](https://github.com/bounswe/bounswe2024group10/pull/469) |


### Management related issues
  | Task Name | Related issue | Related PRs |
  | --- | --- | --- | 
  | Document user tests | [#560](https://github.com/bounswe/bounswe2024group10/issues/560) |  |
  | Document integration tests | [#559](https://github.com/bounswe/bounswe2024group10/issues/559) |  |
  | Document scenario for presentation | [#496](https://github.com/bounswe/bounswe2024group10/issues/496) | |
  | Customer milestone 2 scenario correction after deploy | N/A  |   |
  | Document general meeting note | [#485](https://github.com/bounswe/bounswe2024group10/issues/485) |  |
  | Document fourth mobile meeting note  | [#484](https://github.com/bounswe/bounswe2024group10/issues/484) |  |



### PRs
  | Task Name | Related PR |
  | --- | --- | 
  | Implement Followers Screen on Mobile integrated with real time fetched data | [#508](https://github.com/bounswe/bounswe2024group10/pull/508) |
  | Implement Followings Screen on Mobile integrated with real time fetched data | [#509](https://github.com/bounswe/bounswe2024group10/pull/509) |
  | Implement My Posts Screen on Mobile integrated with real time fetched data | [#507](https://github.com/bounswe/bounswe2024group10/pull/507) |
  | Implement admin check and hiding create subforum for regular users | [#501](https://github.com/bounswe/bounswe2024group10/pull/501) |
  | Testing strategies (e.g. unit test coverage, integration testing, tools)| [#466](https://github.com/bounswe/bounswe2024group10/pull/466)   | 
  | Unit test to check add asset to portfolio | [#469](https://github.com/bounswe/bounswe2024group10/pull/469) |

### Additional Information
* Link for unit tests that I implemented:
[Portfolio Service Unit test](https://github.com/bounswe/bounswe2024group10/commit/3c6a253df2eaf871d071adedccce11bb97a8b6f2)


## 2.6 Melih Akpınar
### Responsibilities
* Led the backend development.
* Designed the current backend architecture and distributed tasks among the team.
* Communicated with other teams for feature requests.

### Main contributions
* Refactored the entire codebase to reduce technical debt.
* Implemented asset endpoints and created the portfolio logic.
* Scraped Yahoo Finance to retrieve YahooFinance links for assets.
* Redesigned the request/response structure of all subforum, post, and comment endpoints.
* Designed and implemented the "For You" and "Explore" algorithms.
* Reviewed PRs from other backend members and some from other teams.
* Carried Base64 encoded photos to permanent storage to accelerate page-loading.

### Code related issues
  | Task Name | Related issue | Related PRs |
  | --- | --- | --- | 
  | Feed and explore endpoints | [#482](https://github.com/bounswe/bounswe2024group10/issues/482) | [PR 495](https://github.com/bounswe/bounswe2024group10/pull/495) |
  | Portfolio endpoints | [#360](https://github.com/bounswe/bounswe2024group10/issues/360) [#460](https://github.com/bounswe/bounswe2024group10/issues/460) [#523](https://github.com/bounswe/bounswe2024group10/issues/523) | [PR 524](https://github.com/bounswe/bounswe2024group10/pull/524) |
  | Fix like and dislike endpoints | [#483](https://github.com/bounswe/bounswe2024group10/issues/483) | [PR 495](https://github.com/bounswe/bounswe2024group10/pull/495) |
  | Refactor everything related to assets | [#408](https://github.com/bounswe/bounswe2024group10/issues/408) | [PR 409](https://github.com/bounswe/bounswe2024group10/pull/409) |
  | Lab 8 - API and its documentation | [#455](https://github.com/bounswe/bounswe2024group10/issues/455) | [PR 466](https://github.com/bounswe/bounswe2024group10/pull/466) |


### Management related issues
  | Task Name | Related issue | Related PRs |
  | --- | --- | --- | 
  | Meet and distribute backend tasks | [#359](https://github.com/bounswe/bounswe2024group10/issues/359) | |


### PRs
  | Task Name | Related PR |
  | --- | --- |
  | Refactor everything related to assets | [PR 409](https://github.com/bounswe/bounswe2024group10/pull/409) |
  | Store images instead of storing their Base64 encoded versions. | [PR 465](https://github.com/bounswe/bounswe2024group10/pull/465) |
  | Refactor backend | [PR 495](https://github.com/bounswe/bounswe2024group10/pull/495) |
  | Lab 8 - API and its documentation | [PR 466](https://github.com/bounswe/bounswe2024group10/pull/466) |
  | Add imageUrl to assets | [PR 476](https://github.com/bounswe/bounswe2024group10/pull/476) |
  | Migrate profile photo storage to filesystem & move images to permanent storage | [PR 481](https://github.com/bounswe/bounswe2024group10/pull/481) |
  | Feed and explore endpoints | [PR 495](https://github.com/bounswe/bounswe2024group10/pull/495) |
  | Add ImageController to serve images | [PR 506](https://github.com/bounswe/bounswe2024group10/pull/506) |
  | Portfolio endpoints | [PR 524](https://github.com/bounswe/bounswe2024group10/pull/524) |
  | Utilized authentication token and security checks at each endpoint. | [PR 495](https://github.com/bounswe/bounswe2024group10/pull/495) |
  | Include total value of each asset in portfolio & Change addToPortfolio to add to the amount instead of setting it | [PR 524](https://github.com/bounswe/bounswe2024group10/pull/524) |

### Additional Information
* Actively collaborated with team members to ensure smooth implementation of features and architectural decisions.
* Supported inter-team efforts by reviewing PRs and providing feedback on changes affecting the backend.
## Ömer Faruk Erzurumluoğlu
### Responsibilities
  * Written most of the unit tests.
  * Changed endpoint responces by requests from frontend.
  * Fixed small mistakes in the backend code.
  * Implemented search controller.
  * Found photos for the assets.

### API contributions
  | Task Name | Related Issue | Related PR |
  | --- | --- |   ---- |
  | Search Controller | [#498](https://github.com/bounswe/bounswe2024group10/issues/498)| [PR 499](https://github.com/bounswe/bounswe2024group10/pull/499) |
 | /api/post/get-posts-by-user | | [PR 514](https://github.com/bounswe/bounswe2024group10/pull/514)
  | /api/post/{id} | [#498](https://github.com/bounswe/bounswe2024group10/issues/498) | |
 | /api/post/get-posts-by-tag || [PR 510](https://github.com/bounswe/bounswe2024group10/pull/510)|


## 2.7 Nazlıcan Aka
### Group: Group 10/Tradeverse, Subgroup: Backend
### Responsibilities
  * Collaborate mainly with backend team, and get feedbacks from frontend team.
  * Test endpoints.
  * Documentation of Milestone-3 report.
  * Create project plan.  

### Main contributions
  * Fixed some endpoints according to feedback from the frontend team.
  * Return “view counts” for posts.
  * Return the date for posts and comments.
  * Added unit tests for assets and portfolio endpoints.
  * Increased forum activity with posts, comments, and interactions.
  * Created the project plan using Project Libre according to progress in the team.
  * Uploaded the project plan as a code for public accessibility.
  * Separated the subsections of Milestone-3 report among teammates. 
  * Documented scenario for the milestone-3 presentation for comprehensive coverage of all important features of Tradeverse.
  * Took notes during milestone-3 presentation, document reflections from milestone-3 presentation.
  * Document process improvements from previous milestones.
  * Document API endpoints with 3 important features.
  * Documented detailed and well-structured user manual for the system.


### Code related issues
  | Task Name | Related Issue | Related PR |
  | --- | --- | --- |
  | Fix portfolio endpoints  | [#460](https://github.com/bounswe/bounswe2024group10/issues/460)  |   [PR #492](https://github.com/bounswe/bounswe2024group10/pull/492) |
  | View count enhancement for posts | [#490](https://github.com/bounswe/bounswe2024group10/issues/490) | [PR #493](https://github.com/bounswe/bounswe2024group10/pull/493) |
  | Return the date for posts and comments | [#491](https://github.com/bounswe/bounswe2024group10/issues/491) | none |
  | Unit test for assets | [#461](https://github.com/bounswe/bounswe2024group10/issues/461) | [PR #469](https://github.com/bounswe/bounswe2024group10/pull/469)|
  | Hot fix unit test | [#461](https://github.com/bounswe/bounswe2024group10/issues/461) | [PR #470](https://github.com/bounswe/bounswe2024group10/pull/470) |
  | Upload project plan for milestone-3| [#558](https://github.com/bounswe/bounswe2024group10/issues/558) | [#565](https://github.com/bounswe/bounswe2024group10/pull/565) |

### Management related issues
 
  | Task Name |Related Issue |
  | --- | --- |
  | Document scenario for presentation | [#496](https://github.com/bounswe/bounswe2024group10/issues/496) | 
  | Increase Forum Activity with Posts, Comments, and Interactions | [#553](https://github.com/bounswe/bounswe2024group10/issues/553) | 
  | Document Reflections from Milestone-3 | [#554](https://github.com/bounswe/bounswe2024group10/issues/554) | 
  | Reflect and Document Process Improvements from Previous Milestones | [#555](https://github.com/bounswe/bounswe2024group10/issues/555) | 
  | Document API Endpoints and Examples | [#556](https://github.com/bounswe/bounswe2024group10/issues/556) | 
  | Get the Three important API | [#561](https://github.com/bounswe/bounswe2024group10/issues/561) | 
  | Write the User Manual for the System | [#557](https://github.com/bounswe/bounswe2024group10/issues/557) | 
 
### PRs
  | Task Name | Related PR |
  | --- | --- | 
  | Fix portfolio endpoints  | [PR #492](https://github.com/bounswe/bounswe2024group10/pull/492) |  
  | View count enhancement for posts | [PR #493](https://github.com/bounswe/bounswe2024group10/pull/493) | 
  | Unit test for assets | [PR #469](https://github.com/bounswe/bounswe2024group10/pull/469) | 
  | Hot fix unit test | [PR #470](https://github.com/bounswe/bounswe2024group10/pull/470) | 
  | Upload project plan for milestone-3 | [#565](https://github.com/bounswe/bounswe2024group10/pull/565) | 
  | User Unit Tests | [PR #528](https://github.com/bounswe/bounswe2024group10/pull/528), review | 

### Unit Tests
  | Task Name | Related PR |
  | --- | --- | 
  | Unit test for assets | [PR #470](https://github.com/bounswe/bounswe2024group10/pull/470)  | 
 
### Additional Information
 Because team wanted to prepare all requirements to final as soon as possible, experienced people worked on code related parts more. I have tried to get some parts but frontend wanted endpoints completely accurate with no error, they did not want to spend time on error corrections. As a result of this, there was an injustice separating tasks in backend. I have done my best in code part in this situation, and worked on documentation.

## 2.8 Oğuzhan Tuncer
### Responsibilities
  * Discussed and designed some crucial web pages and components to enhance the user experience.

  * Searched about the W3 annotation standard and examined the related documentations.
  * Implemented the annotation service and its database.
  * Implemented the frontend of the annotation standard to the web page. Added annotation create flow.
  * Dockerized the annotation service and its database.
  * Tested and reviewed team members' contributions and gave valuable feedback.
  * Responded rapidly to errors and bugs and fixed them like the image rendering bug.
  * Deployed the services and monitored for the possible issues.
  * Added unit test for web page.



### Main contributions
  * Designed and implemented the annotation service which complies with the proposed annotation data models.

  * Added the annotation creation and highlighting to the frontend.
  * Added the related docker files and updated the docker compose file for the ease of deployment.
  * Solved the image rendering issue for various components like postHeader, post, user etc.
  * Helped team members to solve the problems faced during the implementation.
  * Added dynamic refetch for comment posts and annotations for a better user experience.
  * Added jest to create unit tests for the web page.


### API contributions
  | Task Name | Related Issue | Related PR |
  | --- | --- |   ---- |
  | Annotation Service Implementation | [#497](https://github.com/bounswe/bounswe2024group10/issues/497)| [PR 515](https://github.com/bounswe/bounswe2024group10/pull/515) |

### Code related issues
  | Task Name | Related Issue | Related PR |
  | --- | --- |   ---- |
| Add annotation feature | [#497](https://github.com/bounswe/bounswe2024group10/issues/497)| [PR 515](https://github.com/bounswe/bounswe2024group10/pull/515) |
  | Web unit test | N/A | [PR 463](https://github.com/bounswe/bounswe2024group10/pull/463) |
  | Fix User Photo Rendering | N/A |   [PR 548](https://github.com/bounswe/bounswe2024group10/pull/548) |
  | Fix Image Rendering | [#505](https://github.com/bounswe/bounswe2024group10/issues/55) |   [PR 520](https://github.com/bounswe/bounswe2024group10/pull/520) |
  | Dynamic post fetching | [#519](https://github.com/bounswe/bounswe2024group10/issues/519) |   [PR 515](https://github.com/bounswe/bounswe2024group10/pull/515) |


### Management related issues
  | Task Name |Related Issue |
  | --- | --- | 
  | Discuss about the W3 standard implementation | [#497](https://github.com/bounswe/bounswe2024group10/issues/497) | 
  
### PRs
  | Task Name | Related PR |
  | --- | --- |  
  | Annotation Service Implementation | [PR 515](https://github.com/bounswe/bounswe2024group10/pull/515) |
  | Web Image Render Fix| [PR 520](https://github.com/bounswe/bounswe2024group10/pull/520) |
  | Fix User Photo Rendering | [PR 548](https://github.com/bounswe/bounswe2024group10/pull/548) |


Link for unit tests that I implemented:

1-) [Singin Unit Test](https://github.com/bounswe/bounswe2024group10/pull/463)

# Project Artifacts
## User Manual
Instructions for Using the Stock Forum System

## Introduction
The Stock Forum, branded as "Tradeverse," is an interactive platform designed for financial enthusiasts, investors, and analysts to discuss financial assets, view real-time asset values, filter news, and share personal financial portfolios. This manual provides step-by-step instructions for utilizing the platform's features efficiently.

---

## Table of Contents
1. Getting Started
   - Creating an Account
   - Logging In
   - Selecting User Type
   - Navigating the Interface

2. Features and Functionality
   - Subforums and Discussions
   - Posting and Commenting
   - News Filtering
   - Portfolio Management

3. Search and Advanced Filters

4. Admin Tools
   - Managing Subforums
   - Content Moderation

5. Security and Best Practices

6. Troubleshooting and Support

---

## 1. Getting Started

### Creating an Account
To access all features as a registered user:
1. Click the **Register** button on the homepage.
2. Provide your name, username, email, and password in the form that appears.
3. Click **Next** to proceed.
4. On the next screen, select your user type from the following options:
   - Beginner
   - Day Trader
   - Investor
   - Finance Enthusiast
   - Financial Analyst
5. Click **Submit** to complete your registration.

**Note:** Guest users can view posts and comments without registering.

### Logging In
1. Enter your username/email and password on the login page.
2. Click **Log In**.

If you encounter login issues, use the **Forgot Password** option or contact support.

### Selecting User Type
- During registration, select your user type to customize your experience. 
- Options include Beginner, Day Trader, Investor, Finance Enthusiast, or Financial Analyst.

### Navigating the Interface
- The homepage displays subforums such as BIST, NASDAQ, Crypto Insights, ETF Discussions, and Stock Picks.
- Use the sidebar on the left to navigate between your account, search, and followed topics.
- Access the personalized news feed and portfolio sections via the top navigation bar.

---

## 2. Features and Functionality

### Subforums and Discussions
- Explore subforums dedicated to specific topics, such as "NASDAQ" or "Crypto Insights."
- Join subforums by clicking the **Follow** button.
- View detailed discussions and posts related to the subforum’s topic.

### Posting and Commenting
- To create a post:
  1. Select a subforum from the dropdown menu.
  2. Add a title and write your post in the text area.
  3. Optionally, attach an image or select a financial asset tag.
  4. Click **Post 🚀** to publish.
- Comment on posts by typing in the comment box and clicking **Comment**.

### News Filtering
- Access the **News Feed** section to view articles related to your selected financial assets.
- Filter news by asset type or subforum topics for a personalized experience.

### Portfolio Management
- Create and share financial portfolios in the **Portfolio** section.
- Add assets to your portfolio by clicking **Add Asset.**
- View your portfolio’s total value, breakdown by assets, and individual performance metrics.

---

## 3. Search and Advanced Filters
Use the search bar to:
- Find subforums by name.
- Locate posts or topics using tags.
- Search for assets, posts, or users directly.

Advanced filters allow sorting by asset type, tags, or users.

---

## 4. Admin Tools

### Managing Subforums
- Admin users can create or delete subforums.
- Add or remove base tags to categorize subforums.

### Content Moderation
- Admins can flag or remove inappropriate content and ban disruptive users.

---

## 5. Security and Best Practices
- Always use a strong, unique password.
- Avoid sharing sensitive personal or financial information.
- Log out after using public devices.

---

## 6. Troubleshooting and Support

### Common Issues
- **Cannot log in:** Ensure your credentials are correct or use the password reset feature.
- **Missing features:** Check if you are logged in as a registered user.

---

## Conclusion
Tradeverse is a comprehensive platform for financial discussions, networking, and portfolio sharing. Follow this manual to make the most of its features and enhance your experience.
## System Manual

### System Requirements

#### For Web Application Deployment
- **Operating System**: Any OS with Docker support (Linux, macOS, Windows)
- **Software**: 
  - Docker (version 20.10 or later)
  - Docker Compose
- **Hardware**:
  - Minimum 4 GB RAM
  - 10 GB of free disk space

#### For Mobile Application Development
- **Operating System**: Any OS with Node.js and Expo support
- **Software**: 
  - Node.js (version 16 or later)
  - Expo CLI
  - Android Studio (optional, for emulation)
- **Hardware**:
  - Minimum 4 GB RAM
  - 5 GB of free disk space

---

### Installation Instructions

#### Web Application Setup
1. **Install Prerequisites**: Ensure Docker and Docker Compose are installed on your system.
2. **Clone the Repository**:
   ```bash
   git clone https://github.com/bounswe/bounswe2024group10.git
   cd bounswe2024group10
      ```
3. **Configure Environment Variables**:
   - Open the `docker-compose.yaml` file.
   - Modify the database credentials if necessary:
     ```yaml
     MYSQL_ROOT_PASSWORD=rootpassword
     MYSQL_DATABASE=tradeverse
     MYSQL_USER=tradeuser
     MYSQL_PASSWORD=tradepassword
     ```

4. **Build and Run the Application**:
   ```bash
   docker-compose up --build
    ```
5. **Access the Application**:

	-   Frontend: `http://localhost:3000/`
	-   Backend API: `http://localhost:8080/api/`
	-   Database: `http://localhost:3306/`

#### Mobile Application Setup

1.  **Install Prerequisites**: Ensure Node.js and Expo CLI are installed:
    
    `npm  install -g expo-cli`
    
2.  **Clone the Mobile Repository**:
    
    `git clone <your-mobile-repo-url> cd tradeverse/mobile`
    
4.  **Install Dependencies**: Navigate to the mobile directory and install the required dependencies:
    
    `npm  install`
    
5.  **Start the Development Server**: Start the Expo development server by running:
    
    `npm start`
    
    This will open a new tab in your browser with the Expo developer tools.
6.  **Run the Application**:
    -   **Using Android Emulator**:
        -   Ensure Android Studio is installed and an emulator is set up.
        -   In the Expo developer tools, click "Run on Android device/emulator."
    -   **Using a Physical Device**:
        -   Install the Expo Go app from the Google Play Store.
        -   Scan the QR code displayed in the Expo developer tools to run the app on your device.
7.  **Build the APK**: To create a standalone APK for the mobile app:
    
    `npm  install -g eas-cli eas build -p android --profile preview`
    
    -   **Follow the Prompts**: The EAS build process will guide you through configuration options.
    -   **Download the APK**: Once the build is complete, you will receive a link to download the APK file. You can then install this APK on any Android device.


## Software Requirements Specification

### **1. Introduction**

#### **1.1 Purpose**
The purpose of Tradeverse Forum is to create a collaborative platform for financial enthusiasts, traders, and analysts. It enables users to discuss financial topics, share analyses, and access real-time data about financial assets. 

#### **1.2 Scope**
Tradeverse Forum includes the following functionalities:
- User registration and authentication.
- Post creation with tagging for financial assets.
- Annotation support for posts and comments.
- Interactive stock charts displayed when stock symbols are mentioned in posts.
- Subforums for niche financial discussions.
- User profiles with a "user type" classification.

The application integrates with APIs for real-time financial data and adheres to the W3C Web Annotation Data Model.

### **2. Overall Description**

#### **2.1 Product Perspective**
Tradeverse Forum is a standalone web and mobile application built using Spring Boot (backend) and React (frontend). It integrates with third-party APIs for financial data and uses Docker for deployment.

### **2.2 Product Features**
- **Authentication**: Secure login/logout using JWT.
- **Posting**: Create, like/dislike, and comment on posts.
- **Annotations**: Highlight and annotate text in posts and comments.
- **Interactive Charts**: Display stock price charts for mentioned symbols.
- **Subforums**: Group discussions by financial topics (e.g., NASDAQ, crypto).
- **User Profiles**: Display user information and posts.

### **2.3 User Classes and Characteristics**
- **Beginners**
- **Day Traders**
- **Investors**
- **Finance Analysts**
- **Finance Enthusiasts** 

User classes help in connecting users with similar knowledge with each other, through our feed algorithm.

---

### 3. System Requirements

#### 3.1 Functional Requirements

#### 3.1.1 User Authentication and Authorization
- **REQ-1:** System must support user registration with username and password
  - Priority: High
  - Status: Implemented
  - Notes: No specific password requirements needed

- **REQ-2:** System must implement three distinct user roles
  - Priority: High
  - Status: Implemented
  - Notes: Roles include guest user, registered user, and admin

- **REQ-3:** System must generate and manage JWT tokens for authenticated sessions
  - Priority: High
  - Status: Implemented
  - Notes: Tokens used for maintaining user sessions and API access

#### 3.1.2 Post Management
- **REQ-4:** System must allow users to create posts with title and text content
  - Priority: High
  - Status: Implemented
  - Notes: No length restrictions on either field

- **REQ-5:** System must automatically detect and tag financial assets mentioned in posts
  - Priority: High
  - Status: Implemented
  - Notes: Tags are used for search functionality

- **REQ-6:** System must integrate TradingView charts for tagged financial assets
  - Priority: High
  - Status: Implemented
  - Notes: Charts should be displayed inline with posts

#### 3.1.3 Annotation System
- **REQ-7:** System must implement W3C Web Annotation Data Model
  - Priority: High
  - Status: Implemented
  - Notes: Applicable to all text content

- **REQ-8:** System must highlight annotated text when corresponding annotation is selected
  - Priority: High
  - Status: Implemented
  - Notes: Visual feedback for annotation navigation

- **REQ-9:** System must allow any user to create and view annotations
  - Priority: High
  - Status: Implemented
  - Notes: No permission restrictions on annotations

#### 3.1.4 Financial Data Integration
- **REQ-10:** System must integrate with TradingView API
  - Priority: High
  - Status: Implemented
  - Notes: For real-time financial data and charts

- **REQ-11:** System must provide interactive candlestick charts
  - Priority: High
  - Status: Implemented
  - Notes: Charts must support zoom, pan, and scale operations

#### 3.1.5 User Profiles and Portfolio
- **REQ-12:** System must maintain user profiles with:
  - Profile photo
  - Follower count
  - Post history
  - Priority: High
  - Status: Implemented

- **REQ-13:** System must support portfolio management
  - Priority: High
  - Status: Implemented
  - Notes: Users can add assets with quantities

- **REQ-14:** System must generate pie charts for portfolio visualization
  - Priority: High
  - Status: Implemented
  - Notes: Based on asset quantities in user portfolio

#### 3.2 Use Cases

#### 3.2.1 User Authentication
- **Actor:** Unregistered User
- **Description:** User creates an account and logs in
- **Preconditions:** User is not logged in
- **Basic Flow:**
  1. User enters username and password
  2. System validates credentials
  3. System generates JWT token
  4. User gains registered user privileges
- **Postconditions:** User is authenticated and token is assigned

#### 3.2.2 Post Creation
- **Actor:** Registered User
- **Description:** User creates a post with financial analysis
- **Preconditions:** User is authenticated
- **Basic Flow:**
  1. User enters post title and content
  2. System identifies financial assets in text
  3. System adds appropriate tags
  4. System embeds relevant TradingView charts
  5. Post is published
- **Postconditions:** Post is visible to all users

#### 3.2.3 Portfolio Management
- **Actor:** Registered User
- **Description:** User manages their investment portfolio
- **Preconditions:** User is authenticated
- **Basic Flow:**
  1. User adds asset to portfolio
  2. User specifies asset quantity
  3. System updates portfolio composition
  4. System generates updated pie chart
- **Postconditions:** Portfolio reflects new asset allocation

#### 3.3 Performance Requirements
- **REQ-15:** System must support 100 concurrent users
  - Priority: High
  - Status: Implemented

- **REQ-16:** System must operate within 100GB storage limit
  - Priority: High
  - Status: Implemented
  - Notes: Includes all user data, posts, and annotations

#### 3.4 Data Requirements
- **REQ-17:** System must store all post content and metadata
  - Priority: High
  - Status: Implemented
  - Notes: Includes titles, content, tags, and timestamps

- **REQ-18:** System must maintain user authentication data
  - Priority: High
  - Status: Implemented
  - Notes: Includes usernames and passwords

- **REQ-19:** System must store annotation data following W3C standard
  - Priority: High
  - Status: Implemented
  - Notes: Includes selected text and annotation content

### 4. External Interface Requirements

#### 4.1 User Interfaces
#### 4.1.1 General UI Requirements
- The system must support both mobile and desktop interfaces
- The application must maintain a responsive design that adapts to different screen sizes
- The application must use a bright purple color scheme throughout

#### 4.1.2 Required UI Components
All pages must include:
- Navigation bar at the top of the page
- Sidebar for navigation options
- Dropdown menu in the top right corner (for authenticated users only)

#### 4.1.3 Layout Requirements
- Mobile layout must automatically adjust from desktop version
- Content must be readable and accessible on both mobile and desktop devices
- UI elements must maintain consistent styling across all pages
- Navigation elements must remain accessible regardless of device type

### 4.2 Hardware Interfaces
- The system must be platform-independent
- No specific hardware requirements beyond basic internet-capable device
- Must function on any operating system with a modern web browser

#### 4.3 Software Interfaces

#### 4.3.1 TradingView Integration
- The system must integrate with TradingView's charting API
- Requirements for chart display:
  - Must display candlestick patterns
  - Must show price movements over time
  - Must update with market data
  - Must be interactive (zoom/pan capabilities)

#### 4.3.2 Database Interface
- Must support storage and retrieval of:
  - User data
  - Post content
  - Annotations
  - Portfolio information
  - Authentication tokens

#### 4.4 Communication Interfaces

#### 4.4.1 API Communication
- Frontend-Backend communication must be implemented through RESTful API calls
- API endpoints must support:
  - User authentication
  - Post management
  - Portfolio updates
  - Annotation management
  - User profile operations

#### 4.4.2 Data Exchange Format
- All API requests and responses must use JSON format
- API responses must include appropriate status codes
- Error responses must include descriptive messages

#### 4.4.3 Security
- All API communications must transmit sensitive data securely
- Authentication tokens must be included in API request headers



## Software Design Documents

 * [Class Diagram](https://github.com/bounswe/bounswe2024group10/wiki/Tradeverse-Class-Diagram)
 * [Sequence Diagrams](https://github.com/bounswe/bounswe2024group10/wiki/Tradeverse-Sequence-Diagrams)
 * [Use Case Diagram](https://github.com/bounswe/bounswe2024group10/wiki/Tradeverse-Use-Case-Diagram)

## User Scenarios and Mockups

Below are our user group scenarios, user scenarios and mockups; in addition to the ones given at [here (mobile)](https://github.com/bounswe/bounswe2024group10/wiki/Customer-Milestone-3-Report#mobile---screenshots) and [here (web)](https://github.com/bounswe/bounswe2024group10/wiki/Customer-Milestone-3-Report#screenshots):

* [User Group Scenario 1](https://github.com/bounswe/bounswe2024group10/wiki/User-Group-Story-1)
* [User Group Scenario 2](https://github.com/bounswe/bounswe2024group10/wiki/User-Group-Story-2)
* [User Scenario 1](https://github.com/bounswe/bounswe2024group10/wiki/User-Scenario-1)
* [User Scenario 2](https://github.com/bounswe/bounswe2024group10/wiki/Tradeverse-Scenario)
* [User Scenario 3](https://github.com/bounswe/bounswe2024group10/wiki/User-Scenario-3)
* [User Scenario 6](https://github.com/bounswe/bounswe2024group10/wiki/Finance-Forum-%E2%80%90-Scenario-6)
* [User Scenario 7](https://github.com/bounswe/bounswe2024group10/wiki/User-Scenario-7)
* [User Scenario 8](https://github.com/bounswe/bounswe2024group10/wiki/User-Scenario-8)
* [Mockups](https://github.com/bounswe/bounswe2024group10/wiki/Mock%E2%80%90Ups)

## Project Plan
Project plan is created using Project Libre, [link](https://github.com/bounswe/bounswe2024group10/blob/main/Tradeverse-App%20Project%20Plan-3.pod)
## Unit Tests

Below are links for our prepared unit tests:

1-) [Post Service Unit Tests](https://github.com/bounswe/bounswe2024group10/blob/main/backend/src/test/java/service/PostServiceUnitTest.java)

2-) [Subforum Service Unit Tests](https://github.com/bounswe/bounswe2024group10/blob/main/backend/src/test/java/service/SubforumServiceUnitTest.java)

3-) [User Service Unit Tests](https://github.com/bounswe/bounswe2024group10/blob/main/backend/src/test/java/service/UserServiceUnitTest.java)



# Software Package
## Build Instructions
### Prerequisites

1.  Ensure Docker and Docker Compose are installed on your machine.
    
2.  Clone the repository:
    
    ```
    git clone https://github.com/bounswe/bounswe2024group10.git
    cd bounswe2024group10
    ```
    

### Configuration
1.  Edit `docker-compose.yaml` to update the database credentials if needed:
    
    ```
    MYSQL_ROOT_PASSWORD=rootpassword
    MYSQL_DATABASE=tradeverse
    MYSQL_USER=tradeuser
    MYSQL_PASSWORD=tradepassword
    ```
    

### Building and Running with Docker

1.  Build and run the application:
    
    ```
    docker-compose up --build
    ```
    
    This command will:
    
    -   Build the backend and frontend applications.
        
    -   Start the MySQL database.
        
2.  Once running:
    
    -   Access the main application at `http://localhost:3000/`.
        
    -   Access the backend API at `http://localhost:8080/api/`.
        
    -   Access the database at `http://localhost:3306/`.
        

### Mobile Application Setup

1.  Clone the mobile project repository:
    
    ```
    git clone https://github.com/bounswe/bounswe2024group10.git
    cd mobile/tradeverse
    ```
    
2.  Install dependencies:
    
    ```
    npm install
    ```
    
3.  Start the development server:
    
    ```
    npm start
    ```
    
4.  Run the mobile application on an emulator or physical device:
    
    -   For Android: Use Android Studio or scan the QR code with the Expo Go app.
        

### Building the Mobile APK

1.  Install the EAS CLI:
    
    ```
    npm install -g eas-cli
    ```
    
2.  Build the APK:
    
    ```
    eas build --platform android --profile preview
    ```
    
3.  Download and install the APK on your Android device.



