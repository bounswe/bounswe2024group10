# 1. Executive Summary 
## 1.1 Project Status
* We have decided on the community/topic which our application will be about. It is finance, since we have some of the group members which are a part of the community and helped developing other finance based applications.
* We have decided on the features we will add to our application which will give a fulfilling experience to the user. More info about it can be found on [draft of the forum](https://github.com/bounswe/bounswe2024group10/wiki/Draft-of-Forum) and [community features](https://github.com/bounswe/bounswe2024group10/wiki/Community-Features) pages.
* We have written many mock scenarios about the new features we want to add into our application.
* We have written requirements according to the features we want to add, common forum features and some standards we wanted to implement.
* We have designed mock-ups according to our requirements to determine how the UI would look.
* We have made database, class, use-case, sequence diagrams to determine how we would implement the backend.
* We have written the endpoints for user details, validating tokens, register & login.
* We have written the docker-compose file for our server.
* We have initialized the mobile application.
* We have done many deliverables which will be talked about in the 1.3 subsection.

## 1.2  A summary of the customer feedback and reflections
During the Customer Presentation 1, Gülşen, Melih and Hüseyin were presenters. We have started to show our project with web, and then mobile part. 

Presentation was quite successful for our team. We have implemented many pages both in web and mobile parts. Therefore, we could be able to show the purpose of “Tradeverse”. Customers like the presentation totally. 

However, this presentation was our first presentation for the “Tradeverse”. As a result of this, we did not apply all the requirements and pages. Thus, we have some missing parts in our application.

Customers asked for more about comment part of the threads. Currently we have comments, utilized mock data, but, we have not implemented the comment on a comment. Customers asked about comment on comments feature, and we explained that we will implement this feature for the upcoming milestones. 
	
Another point Customers mentioned about is that she asked for bookmarking any thread or topic in the forum. We did not put bookmark option similar to like or unlike feature as a design choice. However, we implemented this by adding follow and unfollow mechanism. When users want to see more about one topic or a person, they can follow this topic or the person so that they can see the threads about the topic and the person. We have explained our implementation and logic of the bookmarking, and customers satisfied.
	
Lastly, Customers asked for semantic search, and told that we need to pay more attention to semantic search. We have not implemented semantic aspect of “Tradeverse”, but, it is in our future works. 
	
Overall, the presentation was quite fruitful, but we have some point to give attention from the feedback of the presentation.

## 1.3 List of Deliverables
| Deliverable | Status | Link | 
 | - | - | - | 
 | Project Repository | Completed | [Repository](https://github.com/bounswe/bounswe2024group10) |
 | Requirements Spec | Completed | [Requirements](https://github.com/bounswe/bounswe2024group10/wiki/Requirements) |
 | Scenerios | Completed | [Scenerio-1](https://github.com/bounswe/bounswe2024group10/wiki/User-Scenario-1), [Scenerio-2](https://github.com/bounswe/bounswe2024group10/wiki/Tradeverse-Scenario), [Scenerio-3](https://github.com/bounswe/bounswe2024group10/wiki/User-Scenario-3), [Scenerio-4](https://github.com/bounswe/bounswe2024group10/wiki/Finance-Forum-%E2%80%90-Scenario-6), [Scenerio-5](https://github.com/bounswe/bounswe2024group10/wiki/User-Scenario-7), [Scenerio-6](https://github.com/bounswe/bounswe2024group10/wiki/User-Scenario-8) |
 | Mockups | Completed | [Mockups](https://github.com/bounswe/bounswe2024group10/wiki/Mock%E2%80%90Ups) |
 | Responsibility Assignment Matrix | Completed | [RAM](https://github.com/bounswe/bounswe2024group10/wiki/Responsibility-Assignment-Matrix-Tradeverse) |
 | Communication Plan | Completed | [Communication plan](https://github.com/bounswe/bounswe2024group10/wiki/Communication-Plan) | 
 | Meeting Notes | Completed | [Meetings](https://github.com/bounswe/bounswe2024group10/wiki/Meeting-Notes) | 
 | Issues | Completed | [Issues](https://github.com/bounswe/bounswe2024group10/issues) |
 | Project Plan | Completed | [Project Roadmap](https://github.com/bounswe/bounswe2024group10/wiki/Project-Plan-%E2%80%90-Tradeverse) |
| Diagrams | Completed | [Sequence Diagram](https://github.com/bounswe/bounswe2024group10/wiki/Tradeverse-Sequence-Diagrams), [Class Diagram](https://github.com/bounswe/bounswe2024group10/wiki/Tradeverse-Class-Diagram), [Use-Case Diagram](https://github.com/bounswe/bounswe2024group10/wiki/Tradeverse-Use-Case-Diagram) |
## 1.4 Reflection

Overall, our project is progressing well, with foundational elements implemented on both the web and mobile platforms. Core features such as user authentication, feed display, and subforum navigation are in place and functional. While the current data are mock implementations, this gives us a valuable preview of how the app will look and operate, helping us test and refine the user interface and experience.

On the web platform, we've successfully built a basic structure for user interactions, including login/logout, feed sorting, subforum navigation, and post page display. The groundwork is solid, but the lack of real-time data integration and limited support for nested comments indicates some limitations. As we transition from mock data to actual data integration, it will be essential to address scalability and load management to enhance the user experience.

For the mobile app, we’ve expanded upon the web features with additional sections, including separate feeds for "For You," "Followed Subforums," and "Followed Users." The user profile, portfolio, asset pages, and search functionality are implemented, although currently only mock data populates them. This provides a good foundation for extending personalization features but will need considerable backend support to function fully.

While the implemented features mark good progress, the heavy reliance on mock data is a current limitation that impacts our testing accuracy. Additionally, features like nested comments, search functionality, and new post creation are incomplete or nonfunctional. Completing these will require focused development on backend integration and real-time database support, which we should prioritize in our project plan moving forward. Shifting focus to implement database connections and API endpoints for live data should be a primary goal in the next phase.
## 1.5  Evaluation of Tools
### 1.5.1 Diagrams
For creating the sequence diagrams we used the Mermaid language. Learning it was quite easy since the [tutorial](https://mermaid.js.org/syntax/sequenceDiagram.html) for creating sequence diagrams with it is really clear. Also the language itself is optimal for creating the sequence diagrams because the creator writes the codes downwards in the same order as the messages and replies as the diagram thus making it easy to follow the flow.

However, for creating the use case diagram and the class diagram we used draw.io since it was easier to handle the many connections/relations between elements by drawing it by hand, moreover creating more complex connection based diagrams is easier if the creator can see the big picture while creating the diagram because they can avoid mistakes better. 

### 1.5.2. Communication
Our main communication channel was Whatsapp because everyone can immediately see a message, which helps in urgent scenerios. We also used independent subgroup Whatsapp channels to communicate subgroup related things. Moreover, by listening to the feedback, we started using issues more actively, using them for discussion spaces helped us focus on topics clearly and follow the progress of each task.

### 1.5.3. Project Plan
For the project plan we used ProjectLibre. ProjectLibre makes adding tasks and interdependencies and seeing the order of tasks really easy. Moreover, being able to add tasks while seeing the chart itself makes it easier to follow the flow while creating it.

Teammates can easily review their old works, worked with whom and how much time spent while doing the work. Here is the [link](https://github.com/bounswe/bounswe2024group10/wiki/Project-Plan-%E2%80%90-Tradeverse) for screenshots of the plan, here is the [link](https://github.com/bounswe/bounswe2024group10/blob/main/Tradeverse-App%20Project%20Plan.pod) for the code.

### 1.5.4. Backend Framework
We used Java Spring for our backend framework, decision was almost unanimous, because most members were more experienced in Java's class structure rather than Python's. Also the team members who are knowledgable in Java Spring were able to teach the other backend subgroup members' the ropes effectively.

### 1.5.5. Database
For the database MySQL was chosen unanimously over PostgreSQL thanks to its ease of use. Moreover, most members were more familiar with MySQL making operating with it better for the group.

### 1.5.6. Frontend
We used React for developing our web application's frontend. Our main reason for using React is its user-friendly developing environment 
.Moreover, React is supported by a large community, providing developers with extensive documentation, guides, and helpful resources. Additionally, numerous third-party libraries and tools further facilitate the development of React projects. Finally, React's JSX syntax offers an HTML-like structure, enhancing code readability and comprehensibility. This boosted our productivity and ensured consistent coding practices throughout the project.
### 1.5.7. Mobile

Also, we used react-native for our mobile application. React Native is a powerful framework for building cross-platform mobile applications, supported by a vast community and major industry players, resulting in a dynamic ecosystem and regularly updated libraries. Its component-based architecture allows for the modular development of mobile apps, ensuring reusability of components for cleaner and more maintainable code. This feauters of react-native have helped us a lot during the coding part of our mobile application.

### 1.5.8. Cloud Computer
We used DigitalOcean for our cloud computer. Thanks to DigitalOcean's 200$ gift card, we were able to rent a relatively good computer for running our application.
## 1.6 Addressed Requirements
We have put emojis before every requirement at [requirements](https://github.com/bounswe/bounswe2024group10/wiki/Requirements):
* ✅ is for requirements that we finished implementing it.
* ⚠️ is for requirements that we have started working on but not finished.
* ❌ is for requirements that we have not started.

## 1.7. Code and Release Tag
For our initial prerelease, version v.0.1.0, we have implemented significant features and provided essential documentation to facilitate development and usage:

This release marks the completion of key functionalities essential for user registration, authentication, and basic search capabilities.

We created v.0.1.0 as a Github prerelease which can be seen [here](https://github.com/bounswe/bounswe2024group10/releases/tag/customer-milestone-1).

Also, you can view our app at [ Web App ](http://35.246.188.121:3000/)
# 2. Member Contributions
 
## 2.1 Mesut Melih Akpınar 
### Responsibilities
  * Leading backend development efforts.
  * Setting up and initializing the Spring Boot project.
  * Implementing backend endpoints for user registration, login, and retrieval of user details.
  * Designing and implementing follow/unfollow functionality.
  * Creating endpoints for retrieving followers and followings.
  * Preparing class diagrams to define backend architecture.
  * Maintaining project documentation, including the README.
  * Dockerizing the project for consistent and efficient deployment.
  * Managing deployment of backend services on Google Cloud Platform for scalability.

### Main contributions
  * For Milestone 1, I led the backend development by setting up the Spring Boot project and implementing key user authentication endpoints. I also handled the Dockerization of the application for smoother deployment and ensured comprehensive documentation in the README. My contributions in the design phase included class diagrams that supported team discussions and architectural decisions.

### Code related issues
  | Task Name | Related issue | Related PRs |
  | --- | --- | --- | 
  | Initialize Spring Boot project | [#239](https://github.com/bounswe/bounswe2024group10/issues/239) | [PR](https://github.com/bounswe/bounswe2024group10/pull/246) |
  | Implement register endpoint | [#261](https://github.com/bounswe/bounswe2024group10/issues/261) | [PR](https://github.com/bounswe/bounswe2024group10/pull/262), [PR](https://github.com/bounswe/bounswe2024group10/pull/327) |
  | Implement login endpoint | [#261](https://github.com/bounswe/bounswe2024group10/issues/261) | [PR](https://github.com/bounswe/bounswe2024group10/pull/262) |
  | Implement user details endpoint | | [PR](https://github.com/bounswe/bounswe2024group10/pull/329) |
  | Implement follow/unfollow endpoints | [#331](https://github.com/bounswe/bounswe2024group10/issues/331) | [PR](https://github.com/bounswe/bounswe2024group10/pull/333) |
  | Implement follower/following endpoints | [#331](https://github.com/bounswe/bounswe2024group10/issues/331) | [PR](https://github.com/bounswe/bounswe2024group10/pull/333) |
  | Add README | [#263](https://github.com/bounswe/bounswe2024group10/issues/263) | [PR](https://github.com/bounswe/bounswe2024group10/pull/265), [PR](https://github.com/bounswe/bounswe2024group10/pull/326) |
  | Dockerize project | [#246](https://github.com/bounswe/bounswe2024group10/issues/246) | [PR](https://github.com/bounswe/bounswe2024group10/pull/246) |

### Non-code related issues
  | Task Name | Related issue | Explanation |
  | --- | --- | --- |
  | Prepare class diagram | [#254](https://github.com/bounswe/bounswe2024group10/issues/254) | Designed class diagrams to define the structure and relationships of backend components, improving the team's understanding of the architecture. |
  | Deploy to Google Cloud Platform | | Managed backend deployment on Google Cloud, ensuring high availability and scalability of the services. |

### Pull requests (created, merged, and reviewed)
  * [Initialize Spring Boot Project and Dockerization](https://github.com/bounswe/bounswe2024group10/pull/246)
  * [Implement authentication endpoints](https://github.com/bounswe/bounswe2024group10/pull/262)
  * [Implement user details retrieval](https://github.com/bounswe/bounswe2024group10/pull/329)
  * [Implement follow/unfollow and follower/following endpoints](https://github.com/bounswe/bounswe2024group10/pull/333)
  * [Add README documentation](https://github.com/bounswe/bounswe2024group10/pull/265)


## 2.2 Yusuf Kağan Çiçekdağ
### Responsibilities
  * Creating necessary mobile screens
  * Attending mobile meetings
  * Deciding the UI/UX design of the mobile application
  * Helping for creation of app skeleton with mobile team
  * Helping for sequence diagram creation
  * Deciding on community features
  * Organizing requirements
  * Draw mock-ups for mobile
  ### Main contributions
  *  My main contributions for Customer Milestone 1 are creating necessary mobile screens with their mockups, editing their UI/UX designs, helping for creation of sequence diagrams; as well as organizing our application requirements, deciding on our community features, organizing our GitHub milestones and Wiki page, and opening corresponding issues for all these tasks.
  ### Code related issues
  | Task Name | Related Issue |
  | --- | --- |
  | Followed Users Screen | [#292](https://github.com/bounswe/bounswe2024group10/issues/292) |
  | Portfolio Screen | [#289](https://github.com/bounswe/bounswe2024group10/issues/289) |
  | Subforum Screen | [#291](https://github.com/bounswe/bounswe2024group10/issues/291) |
  | Post Details Screen | [#290](https://github.com/bounswe/bounswe2024group10/issues/290) |
  ### Non-code related issues
  | Task Name | Related issue |
  | --- | --- |
  | Sequence Diagrams | [#255](https://github.com/bounswe/bounswe2024group10/issues/255) |
  | Create Milestones & Project | [#218](https://github.com/bounswe/bounswe2024group10/issues/218), [#245](https://github.com/bounswe/bounswe2024group10/issues/245) |
  | Lab Reports | [#201](https://github.com/bounswe/bounswe2024group10/issues/201), [#236](https://github.com/bounswe/bounswe2024group10/issues/236) |
  | Community Features | [#149](https://github.com/bounswe/bounswe2024group10/issues/215) |
  | Mockups | [#243](https://github.com/bounswe/bounswe2024group10/issues/243), [#247](https://github.com/bounswe/bounswe2024group10/issues/247) |
  | Requirements Organization | [#232](https://github.com/bounswe/bounswe2024group10/issues/232), [#228](https://github.com/bounswe/bounswe2024group10/issues/228) |
  ### Pull requests ( created, merged, and reviewed)
  * [Portfolio Screen PR](https://github.com/bounswe/bounswe2024group10/pull/313)
  * [Followed Users Screen PR](https://github.com/bounswe/bounswe2024group10/pull/314)
  * [Subforum Detail Screen PR](https://github.com/bounswe/bounswe2024group10/pull/319)
  * [Post Detail Screen PR](https://github.com/bounswe/bounswe2024group10/pull/320)
## 2.3 Oğuzhan Tuncer

### Responsibilities
  * Initialize the web project
  * Write the dockerfile for web project
  * Create the basic routing for web app
  * Create the readme file for development environment setup
  * Create the subforum navigation bar
  * Create postHeader component
  * Revise post component
  * Create comment component
  * Design and implement post page
  * Create user scenario
  * Create use case diagram
  * Contribute to requirement analysis discussions
  * Review web dev team's pull requests

  ### Main contributions
  > I contributed to the development of the web pages. I first initialized the React web project and wrote a readme file about development environment setup. I also implemented the dockerfile for the web app. I created the use case diagrams with Yasin Atlı. I contributed by writing a user scenario. I created subforum navbar, post page and comment components. I revised some parts of the feed page as well post component. 

  ### Code related issues
  | Task Name | Related Issue |
  | --- | --- |
  | Revise feed page UI | [#344](https://github.com/bounswe/bounswe2024group10/issues/344) |
  | Create Post Page | [#343](https://github.com/bounswe/bounswe2024group10/issues/343) |
  | Create Comment Component | [#342](https://github.com/bounswe/bounswe2024group10/issues/342) |
  | Create pageHeader Component | [#340](https://github.com/bounswe/bounswe2024group10/issues/340) |
   | Dockerize Web App| [#251](https://github.com/bounswe/bounswe2024group10/issues/251) |
  | Initialize React Project | [#250](https://github.com/bounswe/bounswe2024group10/issues/250) |
  ### Non-code related issues
  | Task Name | Related issue |
  | --- | --- |
  | Use Case Diagram | [#256](https://github.com/bounswe/bounswe2024group10/issues/256) |
  | Design Web Logo | [#341](https://github.com/bounswe/bounswe2024group10/issues/251) |
  ### Pull requests ( created, merged, and reviewed)
  
  * [Reviwed PR](https://github.com/bounswe/bounswe2024group10/pull/268)
  * [Web UI Improvements](https://github.com/bounswe/bounswe2024group10/pull/324)
  
## 2.4 Gülşen Sabak
### Responsibilities
  * Creating necessary mobile screens
  * Attending mobile meetings
  * Deciding the UI/UX design of the mobile application
  * Creating app skeleton with mobile team
  * Creating sequence diagram
  * Writing and organizing requirements
  * Organize wiki and repository
  * Create a user scenario
  * Draw mock-ups for mobile
  * Present the customer presentation

  ### Main contributions
  * Contributions for Milestone 1 included the development of mobile screens and mock-ups, structuring of UI/UX workflows, and the creation of sequence diagrams to support design clarity. Additionally, I organized requirements documentation, maintained the project wiki and repository, and presented project progress to the customer.

  ### Code related issues
  | Task Name | Related issue | Related PR's|
  | --- | --- | --- | 
  | Create "Asset Detail" Screen  | [#286](https://github.com/bounswe/bounswe2024group10/issues/286)| [PR](https://github.com/bounswe/bounswe2024group10/pull/302)   |
  | Create "Profile" Screen | [#285](https://github.com/bounswe/bounswe2024group10/issues/285)|  [PR](https://github.com/bounswe/bounswe2024group10/pull/310)   |
  | Create "Add Portfolio Asset" Screen | [#283](https://github.com/bounswe/bounswe2024group10/issues/283)|  [PR](https://github.com/bounswe/bounswe2024group10/pull/301)   |
  | Create "Followed Subtopics" Screen | [#282](https://github.com/bounswe/bounswe2024group10/issues/282) | [PR](https://github.com/bounswe/bounswe2024group10/pull/312) |
  | Create "Login" Screen #281 | [#281](https://github.com/bounswe/bounswe2024group10/issues/281) | [PR](https://github.com/bounswe/bounswe2024group10/pull/298) | 
  | Create "Register" Screen | [#280](https://github.com/bounswe/bounswe2024group10/issues/280) | [PR](https://github.com/bounswe/bounswe2024group10/pull/298) |  
  | Create "Create" Screen | [#279](https://github.com/bounswe/bounswe2024group10/issues/279) | [PR](https://github.com/bounswe/bounswe2024group10/pull/297) |
  | Create App Skeleton | [#267](https://github.com/bounswe/bounswe2024group10/issues/267)| [PR](https://github.com/bounswe/bounswe2024group10/pull/269) |

  ### Non-code related issues
  | Task Name | Related issue | Explanation |
  | --- | --- | --- |
  | Write mock scenario 2 for determined topic | [#208](https://github.com/bounswe/bounswe2024group10/issues/208) | Developed a second user interaction scenario to test and refine the user experience for specific app functionalities. |
  | Write the meeting notes of the Oct 1 lab session | [#219](https://github.com/bounswe/bounswe2024group10/issues/219) | Documented key discussions, decisions, and action points from the Oct 1 lab session for team alignment and reference. |
  | Write user requirements | [#211](https://github.com/bounswe/bounswe2024group10/issues/221) | Created detailed user requirements to clarify expected app functionality and guide development processes. |
  | Write Meeting Notes | [#229](https://github.com/bounswe/bounswe2024group10/issues/229) | Summarized meeting discussions and decisions to keep the team informed and provide a record of project progress. | 
  | Correct User & System Requirements | [#234](https://github.com/bounswe/bounswe2024group10/issues/234) | Reviewed and updated requirements to ensure accuracy, completeness, and alignment with customer expectations. |
  | Mobile App Set Up | [#241](https://github.com/bounswe/bounswe2024group10/issues/241) | Established the initial setup for the mobile app, including configuring dependencies and development environment. |
  | Creating Mockup Screens for Mobile | [#243](https://github.com/bounswe/bounswe2024group10/issues/243) | Designed mockup screens to visualize app layouts, guide development, and gather feedback on UI/UX from stakeholders. | 
  | Document Mobile Meeting Notes | [#244](https://github.com/bounswe/bounswe2024group10/issues/244) | Recorded key points from mobile-focused meetings to ensure team alignment on app design and feature development. |
  | Create Sequence Digrams | [#255](https://github.com/bounswe/bounswe2024group10/issues/255) | Developed sequence diagrams to illustrate user interactions, app workflows, and data exchanges within the app. |
  | Discuss About Customer Presentation 1 | [#258](https://github.com/bounswe/bounswe2024group10/issues/258) | Planned content and structure for the first customer presentation to effectively communicate project progress. | 
  | Discuss on semantics aspect of the project| [#259](https://github.com/bounswe/bounswe2024group10/issues/259) | Engaged in discussions about the semantic aspects to align project terminology and improve communication accuracy. |
  | Document Third Mobile Meeting Note | [#278](https://github.com/bounswe/bounswe2024group10/issues/278) | Compiled notes from the third mobile meeting to track progress and decisions regarding mobile app development. |


  ### Pull requests ( created, merged, and reviewed)
  * [Create "Create" screen](https://github.com/bounswe/bounswe2024group10/pull/297)
  * [Create Login Screen and Register Screen](https://github.com/bounswe/bounswe2024group10/pull/298)
  * [Create Add Asset Screen](https://github.com/bounswe/bounswe2024group10/pull/301)
  * [Create Asset Detail Screen](https://github.com/bounswe/bounswe2024group10/pull/302)
  * [Create Profile Screen](https://github.com/bounswe/bounswe2024group10/pull/310)
  * [Text out of Text component error, Missing Global Screen component](https://github.com/bounswe/bounswe2024group10/pull/311)
  * [Create Followed Tags Screen](https://github.com/bounswe/bounswe2024group10/pull/312)
  * [Create Login Screen and Register Screen](https://github.com/bounswe/bounswe2024group10/pull/298)
  * [Delete expo boilerplate and build app skeleton](https://github.com/bounswe/bounswe2024group10/pull/269)
  * [Add Asset Results View into search results screen](https://github.com/bounswe/bounswe2024group10/pull/296)
 
  ### Additional information
For the customer presentation, I collaborated closely with team members to prepare and organize content, ensuring it aligned with project objectives and met customer expectations. I developed a structured presentation covering key aspects, including project progress, current milestones, and upcoming tasks. I have presented the presentation to the customer, explaining each section in detail and gathering valuable feedback to guide the next steps in the project. Also, as a team we have answered customers questions.

## 2.5 Hüseyin Karataş
<h3>Responsibilities</h3>
<ul>
<li>Creating mobile application screens.</li>
<li>Creating the UI and UX design of the mobile application on figma.</li>
<li>Giving insight as backend response formats by designing the application.</li>
<li>Attending mobile meetings</li>
<li>Creating app skeleton with mobile team.</li>
<li>Creating sequence diagram.</li>
<li>Organize wiki and repository.</li>
<li>Create a mock user scenario.</li>
<li>Draw mock-ups for mobile.</li>
<li>Attend the presentation as app user on Milestone 1.</li>
</ul>
<h3>Main contributions</h3>
<ul>
<li>I have designed the whole structure of the mobile application on figma and distributed tasks among mobile team members. I also mainly directed the mobile development process, reviewed codes and deciding on codebase design. I also discussed how the project will be structured for semantics search closely with backend team.</li>
</ul>
<h3>Code related issues</h3>

Task Name | Related issue
-- | --
Create "Search Results" Screen | [#284](https://github.com/bounswe/bounswe2024group10/issues/284)
Create "Explore" Screen | [#277](https://github.com/bounswe/bounswe2024group10/issues/277)
Create "Add Subforum" Screen | [#276](https://github.com/bounswe/bounswe2024group10/issues/276)
Create "Add Post" Screen | [#273](https://github.com/bounswe/bounswe2024group10/issues/273)
Create "Profile Edit" Screen | [#274](https://github.com/bounswe/bounswe2024group10/issues/274)
Create "Account" Screen | [#270](https://github.com/bounswe/bounswe2024group10/issues/270)
Create "Home" Screen | [#272](https://github.com/bounswe/bounswe2024group10/issues/272)
Create “Welcoming Screens” | [#271](https://github.com/bounswe/bounswe2024group10/issues/271)
Create App’s Skeleton |  N/I


<h3>Non-Code related issues</h3>
Task Name | Related issue | Explanation
-- | -- | --
Semantics Of The Project | #259 | Discussed the semantics structure of the application closely with backend team in order to provide clarification.
Create Sequence Diagrams | #255 | Contributed to developing sequence diagrams to illustrate user interactions, app workflows, and data exchanges within the app.
Drawing Mockup Screens for Mobile on white paper. | #243 | Designed mockup screens to visualize app layouts, guide development on paper sheets.
Documented Second Lab’s Report | #217 | Documented the report of the second lab report.
Create Mobile App’s Skeleton | #243 | Created the main layout of the mobile app to provide our mobile team to give a cleaner development process.
Mobile App Set Up | #241 | Created the expo mobile app and informed team basics on react native.
Creating Mockup Scenario | #207 | Created MockUp scenario that simulates the beneficial usage of the application.
Discuss About Customer Presentation 1 | #258 | Planned content and structure for the first customer presentation to effectively communicate project progress.
Created App Release |   |  



<h3>Pull requests ( created, merged, and reviewed)</h3>
<ul>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/269">Delete Expo Boilerplate code and build app skeleton.</a></li>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/288">Create Account Screen</a></li>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/301">Create Add Asset Screen</a></li>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/293">Create Home Screen</a></li>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/294">Create Explore Screen</a></li>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/295">Create Search Results Screen</a></li>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/299">Create Welcoming Screens</a></li>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/309">Profile Settings Screen</a></li>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/316">Post Creation Screen</a></li>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/318">Subforum Creation Screen</a></li>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/321">App Navigation And Link Flow</a></li>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/325">Mock Data Usage on App</a></li>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/330">Mobile App Authentication</a></li>
<li><a href="https://github.com/bounswe/bounswe2024group10/pull/334">Splash Screen Showing</a></li>
</ul>

## 2.6 Ömer Faruk Erzurumluoğlu
### Responsibilities
  * Development on the backend.
  * Revising Backend endpoints to provide better implementation.
  * Write Milestone-1 Report
  * Organize wiki and repository
  * Create a user scenario
  * Talking to teacher/TAs for better implementations

  ### Main contributions
  * Talking many times with TA/teacher about our project
  * Taking some of the meeting notes
  * Writing a meeting note
  * Attending meetings
  * Determining user features
  * Writing the draft of the requirements
  * Wrote a mock-up scenario
  * Making the DB diagram
  * Attending the meetings
  * Reviewing pull requests
  * Writing Milestone-1 report
  * Taking an active role in the decision making process
  ### Code related issues
  | Task Name | Related issue | Related PR|
  | --- | --- | --- |
  | Write the docker-compose file| [#233](https://github.com/bounswe/bounswe2024group10/issues/233)|-|
( I was sick and was not able to do it.)

  ### Non-code related issues
  | Task Name | Related issue |
  | --- | --- |
  |Acquire information| [#212](https://github.com/bounswe/bounswe2024group10/issues/212)|
  | User Features | [#216](https://github.com/bounswe/bounswe2024group10/issues/216)|
  | Create a Mockup Scenario | [#220](https://github.com/bounswe/bounswe2024group10/issues/220)|
  | Draft of the Requirements | [#222](https://github.com/bounswe/bounswe2024group10/issues/222)|
  | Feature Based on Moderation | [#230](https://github.com/bounswe/bounswe2024group10/issues/230)|
  | Create Database Diagram | [#235](https://github.com/bounswe/bounswe2024group10/issues/235)|
  | Discuss on semantics | [#259](https://github.com/bounswe/bounswe2024group10/issues/259)|
  | Write Milestone-1 Report | [#336](https://github.com/bounswe/bounswe2024group10/issues/336)|
  | Addressed Requirements|[#338](https://github.com/bounswe/bounswe2024group10/issues/338)|
  | Writing meeting notes | [#339](https://github.com/bounswe/bounswe2024group10/issues/339)|

  ### Pull requests ( created, merged, and reviewed)
None
  ### Additional information
Even though I was very active before my illness, I was not able help much while I was ill. Because of this I will try to be more active on the next milestones.
## 2.7 Nazlıcan Aka
### Responsibilities
  * Update wiki page, create archive for animal trove project. Update personal pages. Move templates and updated personal pages to the wiki page.
  * Help to determine project topic.
  * Help to create communication plan and general plan
  * Revise lab reports.
  * Create mock-up scenarios for the project.
  * Create class diagrams
  * Modify requirements.
  * Create responsibility assignment matrix.
  * Write the section “A summary of the customer feedback and reflections” part in the milestone-1 report.
  

  ### Main contributions
  * My main contributions are creating mock-up scenarios, creating class diagram, creating RAM, and helping to write milestone-1 report. I am also in the backend team, so I have reviewed some codes from the backend.
 

  ### Non-code related issues
  | Task Name | Related issue | Explanation |
  | --- | --- | --- |
  | [RAM](https://github.com/bounswe/bounswe2024group10/wiki/Responsibility-Assignment-Matrix-Tradeverse) |[#338](https://github.com/bounswe/bounswe2024group10/issues/338) | --- |
  | [Project plan](https://github.com/bounswe/bounswe2024group10/wiki/Project-Plan-%E2%80%90-Tradeverse)| [#338](https://github.com/bounswe/bounswe2024group10/issues/338) | --- |
  | [Milestone-1 report](https://github.com/bounswe/bounswe2024group10/wiki/Tradeverse-Customer-Milestone-1-%E2%80%90-Report)|[#338](https://github.com/bounswe/bounswe2024group10/issues/338) | write summary of the customer feedback and reflections|
  | semantics aspect of the project | [#259](https://github.com/bounswe/bounswe2024group10/issues/259) | discuss semantic aspect of the project. What kind of parameters will be play role on the semantic search results. Additionally, discuss the way how post contents are going to obtain the tags. |
  | Customer Presentation 1 | [#258](https://github.com/bounswe/bounswe2024group10/issues/258) | discuss about Customer Presentation 1; for example, what would we present, who will present, etc. |
  | [Requirements](https://github.com/bounswe/bounswe2024group10/wiki/Requirements)| [#257](https://github.com/bounswe/bounswe2024group10/issues/257)| Modify Requirements According to user tags |
  | [Class Diagram](https://github.com/bounswe/bounswe2024group10/wiki/Tradeverse-Class-Diagram) | [#254](https://github.com/bounswe/bounswe2024group10/issues/254) | create Create class diagrams for our forum as the backend team |
  | [Mock-up Scenario](https://github.com/bounswe/bounswe2024group10/wiki/User-Scenario-8)| [#224](https://github.com/bounswe/bounswe2024group10/issues/224)| Create Mock up scenario for our financial forum |
  | General Plan | [#206](https://github.com/bounswe/bounswe2024group10/issues/206) | talked about our roadmap (communication methods, using GitHub efficiently, project domain preference, etc.)  |
  | [Lab Report](https://github.com/bounswe/bounswe2024group10/wiki/Cmpe451-Week-1-Lab-Report)| [#205](https://github.com/bounswe/bounswe2024group10/issues/205) | First lab report was revised. |
  | Update Wiki pages | [#200](https://github.com/bounswe/bounswe2024group10/issues/200) | 	Update the personal pages. Update the sidebar. Create an archive tab. Move the templates and personal pages to the updated wiki.|


  ### Pull requests ( created, merged, and reviewed)
  * [README](https://github.com/bounswe/bounswe2024group10/pull/265 ), reviewed.
  * [Implement authentication](https://github.com/bounswe/bounswe2024group10/pull/262 ), reviewed.
  * [Initialize Spring Boot project](https://github.com/bounswe/bounswe2024group10/pull/246 ), reviewed.
  
 
  ### Additional information
I was take notes during the customer 1 presentation. By utilizing these notes I have written the section “A summary of the customer feedback and reflections” part in the milestone-1 report. 
## 2.8 Yasin Atlı
### Responsibilities
  * Development on the frontend.
  * Revising Backend endpoints to provide better implementation.
  * Write Milestone-1 Report
  ### Main contributions
  * Implemented Authentication on the frontend.
  * Implemented Routing on the frontend
  * Implemented Validate token end point on backend. 
  * Created login page for frontend.
  * Created signup page for frontend.
  * Revised the backend codes.
  * Created Home page component.
  * Created feed on frontend.
  * Created Mock Data for frontend implementation.
  ### Code related issues
  | Task Name | Related issue | Related PR|
  | --- | --- | --- |
  | Implement Authentication Wrapper (AuthWrapper)| [#303](https://github.com/bounswe/bounswe2024group10/issues/303)|[ Implemented Authentication, Routing, and Forum Structure Enhancements ](https://github.com/bounswe/bounswe2024group10/pull/268) |
  | Create Login & Register Pages for Web | [#304](https://github.com/bounswe/bounswe2024group10/issues/304)|[ Implemented Authentication, Routing, and Forum Structure Enhancements ](https://github.com/bounswe/bounswe2024group10/pull/268) |
  | Create Forum Components | [#305](https://github.com/bounswe/bounswe2024group10/issues/305)|[ Implemented Authentication, Routing, and Forum Structure Enhancements ](https://github.com/bounswe/bounswe2024group10/pull/268) |
  | Implement Routing | [#306](https://github.com/bounswe/bounswe2024group10/issues/306)|[ Implemented Authentication, Routing, and Forum Structure Enhancements ](https://github.com/bounswe/bounswe2024group10/pull/268) |
  | Implement validate-token Endpoint | [#307](https://github.com/bounswe/bounswe2024group10/issues/307)| [ Implemented Authentication, Routing, and Forum Structure Enhancements ](https://github.com/bounswe/bounswe2024group10/pull/268)|

  ### Non-code related issues
  | Task Name | Related issue |
  | --- | --- |
  | Update Wiki pages| [#200](https://github.com/bounswe/bounswe2024group10/issues/200)|
  | Create 7'th MockUp scenario | [#223](https://github.com/bounswe/bounswe2024group10/issues/223)|
  | Create a glossary for our project requirements | [#227](https://github.com/bounswe/bounswe2024group10/issues/227)|
  | Rearrange Requirements and Divide into Subsequent Sections | [#228](https://github.com/bounswe/bounswe2024group10/issues/228)|
  | Correct User & System Requirements | [#234](https://github.com/bounswe/bounswe2024group10/issues/234)|
  | Revising Lab Report | [#242](https://github.com/bounswe/bounswe2024group10/issues/242)|
  | Create Use Case Diagram | [#256](https://github.com/bounswe/bounswe2024group10/issues/256)|
  | Write Milestone-1 Report | [#345](https://github.com/bounswe/bounswe2024group10/issues/345)|

  ### Pull requests ( created, merged, and reviewed)
  * [Revised initialization of the web project](https://github.com/bounswe/bounswe2024group10/pull/252)
  * [ Implemented Authentication, Routing, and Forum Structure Enhancements ](https://github.com/bounswe/bounswe2024group10/pull/268)
  ### Additional information
## 2.9 Onur Kafkas
### Responsibilities
  * Web
  * Attending Web meetings
  * Deploying docker
  * Contributing in use case diagram creation
  ### Main contributions
  *  My main contributions for Customer Milestone 1 are on the front-end part of the code. Together with my teammates we initialized the web project and wrote the necessary dockerfile. We also created page headers, navbars, feed page, posts and comments.
  ### Code related issues
  | Task Name | Related Issue |
  | --- | --- |
  | Create Post Page | [#343](https://github.com/bounswe/bounswe2024group10/issues/343) |
  | Create Comment Component | [#342](https://github.com/bounswe/bounswe2024group10/issues/342) |
  | Create pageHeader Component | [#340](https://github.com/bounswe/bounswe2024group10/issues/340) |
  ### Non-code related issues
  | Task Name | Related issue |
  | --- | --- |
  | Use Case Diagrams | [#256](https://github.com/bounswe/bounswe2024group10/issues/256) |
    | Lab 4 Report | [#253](https://github.com/bounswe/bounswe2024group10/issues/253) |
    






