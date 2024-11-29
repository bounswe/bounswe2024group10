# 1. Executive Summary

## 1.1 Requirements addressed in this milestone

In this milestone, our general aim is to improve our delivered application at Customer Presentation 1, mainly by adding required endpoints, writing some of our missing pages and implementing required frontend-backend connections inside our application; while turning our mock data to a real one. Also, we have decided on a W3C standard for our application and established a general plan for the testing process.

## 1.2 Deliverables

### 1.2.1 List and status of deliverables

| Deliverable                            | Status      | Link                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pre-release of our software            | Completed   | [Pre-release of our software](https://github.com/bounswe/bounswe2024group10/releases/tag/customer-milestone-2)                                                                                                                                                                                                                      |
| UX Decisions                           | In progress | [UX Decisions](https://github.com/bounswe/bounswe2024group10/wiki/User-Experience-Decisions)                                                                                                                                                                                                                                        |
| W3C Standard Decision & Implementation | In progress | [W3C Standard Decision & Implementation](https://github.com/bounswe/bounswe2024group10/wiki/W3C-Standard-%E2%80%90-Annotation)                                                                                                                                                                                                      |
| User Group Scenarios                   | Completed   | [Scenario 1](https://github.com/bounswe/bounswe2024group10/wiki/User-Group-Story-1), [Scenario 2](https://github.com/bounswe/bounswe2024group10/wiki/User-Group-Story-2)                                                                                                                                                            |
| Lab PRs & Meeting Notes                | Completed   | [Lab 5 Meeting Notes](https://github.com/bounswe/bounswe2024group10/wiki/Lab-5-Meeting-Note), [Lab 6 Meeting Notes](https://github.com/bounswe/bounswe2024group10/wiki/Lab-6-Meeting-Notes), [Lab 6 PR](https://github.com/bounswe/bounswe2024group10/pull/367), [Lab 7 PR](https://github.com/bounswe/bounswe2024group10/pull/380) |

### 1.2.2 UX design

For the UX design, our main principles are as follows; providing a cross-compatible environment between various devices, creating a scalable UX design, while also providing fundamental privacy and security measurements. It should be easily usable for users who are not familiar to our application, and should provide quick access for main features, such as profile access, search functionality access, etc.

About the domain-specific parts of our UX design, we designed our application-specific parts' UX designs in a proper manner. For example, at the "Public Portfolio Browsing" part, our decision is to allow users to view public portfolios, including asset choices and performance metrics. Another example can be the "Personalized News Feed", where we decided to design a personalized news feed that aggregates trending articles based on user-selected financial assets. Other domain-specific UX design decisions include:

- Portfolio Performance Monitoring -> Providing real-time performance updates and notifications for public portfolios and related comments
- User Tags and Networking -> Enabling selection of user tags (e.g., Day Trader, Financial Analyst) to personalize the experience and connect with users of similar interests
- Advanced Search with Tagging -> Develop an advanced search that prioritizes results based on tags like "emerging markets" and "tech stocks"
- Tag System for Scannability -> Highlighting tags such as "Trending" or "Top Performers" within public portfolios

More details are provided in [User Experience (UX) Decisions](https://github.com/bounswe/bounswe2024group10/wiki/User-Experience-Decisions) where we have considered two basic application usage scenarios and wrote corresponding UX decisions, both general and domain-specific ones.

### 1.2.3 Description of the standard being utilized

For our project, we planned to use the "W3C Web Annotation Data Model" as our main standard. This standard allows users to annotate specific parts of a document or multimedia content on the web, such as highlighting text, adding comments, or attaching external resources. It defines a structured format for annotations, making them interoperable across platforms and tools. For more details, see [W3C Standard ‐ Annotation](https://github.com/bounswe/bounswe2024group10/wiki/W3C-Standard-%E2%80%90-Annotation)

### 1.2.4 API Documentation

(will be written)

## 1.3 Testing

### 1.3.1 General test plan

About our general testing plan, we divided it into subparts, which will be explained below:

1-) Unit testing: Unit testing is essential for software development because it ensures the quality, reliability, and maintainability of our codebase. As a team, we are planning to write unit tests for all sensitive areas inside our code. Also, each team member will write at least one unit test for our application. Some important parts about the unit test include:

- Account Management System
- Posts System
  - Search Functionality
  - Subforum Management System
  - Privacy and Personalization
  - Financial Asset Integration
  - Portfolio Endpoints

2-) Integration testing: Integration testing is also a crucial part of our software, as it verifies that different modules or components of an application work together as expected. While unit tests focus on individual components in isolation, integration tests ensure the harmony and functionality of interconnected parts. We are also planning to separate the integration tests among our team members as well. Some important parts about the unit test include:

- Account and Authentication System
- Portfolio Sharing and Privacy
- Posts and Comments
- Financial Asset Integration
- Subforum Management System

3-) Mock data: In order to demonstrate our application's backend connections in Customer Presentation 2, we have written a basic mock data for our application. For the Final Milestone, we are planning to expand our mock data (implemented in our backend server, not in frontend) and making it more sophisticated; including many users, their posts, comments, assets, followings and followers, etc.

More details can be found in [Unit Test Plan](https://github.com/bounswe/bounswe2024group10/wiki/Milestone-2-plan#unit-test-plan), [Integration Test Plan](https://github.com/bounswe/bounswe2024group10/wiki/Milestone-2-plan#integration-test-plan)

### 1.3.2 Generated unit test report

- Unfortunately, we were not able to generate a unit test report for Customer Presentation 2, so we are planning to generate all necessary unit test reports until the Final Presentation.

## 1.4 Planning and Team Process

### 1.4.1 Changes made or will be made (after Milestone 1)

Until Milestone 1, our main focus was on implementing necessary pages for frontend, as we weren't have to use our mock data from the backend. Accordingly, as the frontend teams (web and mobile) have finished most of their pages until Customer Presentation 1, our focus was shifted to implementing the necessary backend endpoints and providing necessary frontend-backend connections at the time between Customer Presentation 1 and 2. However, due to some time management and communication issues, we were not able to either implement all endpoints properly, or connect corresponding pages to related endpoints correctly. Consequently, we still have some missing parts both at the backend and at the frontend. For the final customer presentation, our main goal is to close up our missing parts at the implementation part (both backend and frontend), and implement our decided web standard (W3C Annotation)

### 1.4.2 Plan for completing our project

As explained in 1.4.1, we still have some missing parts at the backend as well as the frontend. Our first plan is to understand our mistakes and take lessons from them. As explained in 1.4.1, we had both time and communication related issues, and to provide a solution, we are planning to spread our work into time instead of leaving all tasks at the very last minute; while also providing better frontend-backend communication during the implementation stage. An idea for this is to instead of letting frontend and backend doing their tas in a "discrete" mannner (eg. backend implements an endpoint, informs the frontend, frontend takes the endpoint and tries to connect it to a page, gets an error, informs the backend, then backend tries to debug it, informs the frontend after debugging, the frontend checks it once again, and so on...), we can somehow join their tasks by letting (at least) one person from backend and frontend do their related tasks in parallel under a better communication environment (either face to face, or in an online meeting, etc.); which might drastically improve our task completion speed as well as compatability between frontend and backend.

About the web standard implementation part, it is also as task which is related to both backend and frontend teams. Consequently, a possible approach is to assign 2-3 people (at least 1 person from frontend and backend) from our team to the "web standard implementation" task; where they will first understand the core mechanism of the related standard, then go to the imlementation stage. With better time management and communication, we believe that all these plans will come true and we would be able to successfully finalize our application with all the necessary requirements.

### 1.4.3 Link for our detailed project plan

[Project plan-2](https://github.com/bounswe/bounswe2024group10/blob/main/Tradeverse-App%20Project%20Plan-2.pod)

## 1.5 Evaluation

### 1.5.1 Summary of the customer feedback and reflections

During our Customer Presentation 2, we had some valuable feedbacks from both our professor as well as our teaching assistants. It was told that our presentation was overall good, however we had some missing parts. First of all, we had not done anything about the web standard part, so we have to complete necessary parts about the web standard implementation until the Final Presentation. Also, while showing our assets page, our professor told that instead of only showing the company name abbreviations at the related page, we can also show a brief introduction text for each company listed as well as what each company abbreviation stands for; which would provide the customer an ease of use with a better understanding about these companies. Specifically about the web standard part, our professor told that we first have to really understand the core mechanism of the related web standard, how it should work in principle, and how it can be adapted to our application; and only after understanding that mechanism very well we should implement it with our application (our web standard should be somewhat independent from our application as it is a general standard rather than an application-specific one). We took notes during the Customer Feedback 2 and our plan is to imply the points mentioned during our presentation into our application accordingly.

### 1.5.2 Evaluation of the status of deliverables

Excluding our "User Group Scenarios" and "Lab PRs & Meeting Notes", the status of our main three deliverables are explained below:
1-) Our software: As explained before, our current software has some missing parts both at the backend and frontend, as well as not having anything about the web standard except the choice and plan for the web standard. Until the Final Presentation, we are planning to complete the missing parts at the frontend and backend, while also understanding and implementing the related web standard for our application.

2-) UX Decisions: During the frontend implementation stage, we tried to follow the basic UX decisions explained [here](https://github.com/bounswe/bounswe2024group10/wiki/User-Experience-Decisions), however there might be some missing parts. Until the Final Presentation, our plan is to completely follow our explained UX guidelines and provide a smooth user experience in our application.

3-) W3C Standard Decision & Implementation : As said above, we only have made the decision about which standard will be implemented, explained some general properties about the related standard, and a basic plan for the implementation stage. Until the Final Milestone, our plan is to deeply understand the main mechanism of our standard, and after that properly implement the standard for our application.

### 1.5.3 Evaluation of tools and processes used

1.5.1 Diagrams
For creating the sequence diagrams we used the Mermaid language. Learning it was quite easy since the [tutorial](https://mermaid.js.org/syntax/sequenceDiagram.html) for creating sequence diagrams with it is really clear. Also the language itself is optimal for creating the sequence diagrams because the creator writes the codes downwards in the same order as the messages and replies as the diagram thus making it easy to follow the flow.

However, for creating the use case diagram and the class diagram we used draw.io since it was easier to handle the many connections/relations between elements by drawing it by hand, moreover creating more complex connection based diagrams is easier if the creator can see the big picture while creating the diagram because they can avoid mistakes better.

1.5.2. Communication
Our main communication channel was Whatsapp because everyone can immediately see a message, which helps in urgent scenerios. We also used independent subgroup Whatsapp channels to communicate subgroup related things. Moreover, by listening to the feedback, we started using issues more actively, using them for discussion spaces helped us focus on topics clearly and follow the progress of each task.

1.5.3. Project Plan
For the project plan we used ProjectLibre. ProjectLibre makes adding tasks and interdependencies and seeing the order of tasks really easy. Moreover, being able to add tasks while seeing the chart itself makes it easier to follow the flow while creating it.

Teammates can easily review their old works, worked with whom and how much time spent while doing the work. Here is the [link](https://github.com/bounswe/bounswe2024group10/wiki/Project-Plan-%E2%80%90-Tradeverse) for screenshots of the plan, here is the [link](https://github.com/bounswe/bounswe2024group10/blob/main/Tradeverse-App%20Project%20Plan.pod) for the code.

1.5.4. Backend Framework
We used Java Spring for our backend framework, decision was almost unanimous, because most members were more experienced in Java's class structure rather than Python's. Also the team members who are knowledgable in Java Spring were able to teach the other backend subgroup members' the ropes effectively.

1.5.5. Database
For the database MySQL was chosen unanimously over PostgreSQL thanks to its ease of use. Moreover, most members were more familiar with MySQL making operating with it better for the group.

1.5.6. Frontend
We used React for developing our web application's frontend. Our main reason for using React is its user-friendly developing environment .Moreover, React is supported by a large community, providing developers with extensive documentation, guides, and helpful resources. Additionally, numerous third-party libraries and tools further facilitate the development of React projects. Finally, React's JSX syntax offers an HTML-like structure, enhancing code readability and comprehensibility. This boosted our productivity and ensured consistent coding practices throughout the project.

1.5.7. Mobile
Also, we used react-native for our mobile application. React Native is a powerful framework for building cross-platform mobile applications, supported by a vast community and major industry players, resulting in a dynamic ecosystem and regularly updated libraries. Its component-based architecture allows for the modular development of mobile apps, ensuring reusability of components for cleaner and more maintainable code. This feauters of react-native have helped us a lot during the coding part of our mobile application.

1.5.8. Cloud Computer
We used DigitalOcean for our cloud computer. Thanks to DigitalOcean's 200$ gift card, we were able to rent a relatively good computer for running our application.

# 2. Individual Contributions

## 2.1 Mesut Melih Akpınar

### Responsibilities

- Led the backend development efforts for the project as the Backend Lead.
- Ensured the quality and scalability of the backend architecture using Spring Boot and Java.
- Designed and implemented the API endpoints required for seamless communication between the frontend and backend.
- Reviewed team members' pull requests, ensuring adherence to coding standards and project guidelines.
- Conducted weekly meetings to discuss backend progress, blockers, and future goals.

### Main contributions

- Designed and developed the core backend infrastructure of the application using Spring Boot.
- Implemented critical backend features such as user authentication, asset management, and portfolio APIs.
- Contributed to database schema design, ensuring optimized queries and robust data models.
- Integrated external APIs (e.g., YahooFinance) to enhance the functionality of the system.
- Actively participated in debugging and resolving high-priority bugs to maintain system stability.

### API contributions

- Implemented APIs for user registration and login with token-based authentication.
- Created endpoints for asset management, including adding, updating, and retrieving financial assets.
- Developed the follow mechanism, enabling users to interact with one another.
- Designed and implemented endpoints for fetching user and portfolio details, ensuring efficient data handling.

### Code related issues

| Task Name                        | Related issue                                                    | Related PRs                                                       |
| -------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| Implement asset model            | [#408](https://github.com/bounswe/bounswe2024group10/issues/408) | [PR #409](https://github.com/bounswe/bounswe2024group10/pull/409) |
| Fix adding comment to DB         | [#362](https://github.com/bounswe/bounswe2024group10/issues/362) | [PR #428](https://github.com/bounswe/bounswe2024group10/pull/428) |
| Implement YahooFinance endpoints | [#360](https://github.com/bounswe/bounswe2024group10/issues/360) | [PR #386](https://github.com/bounswe/bounswe2024group10/pull/386) |
| Implement follow mechanism       | [#331](https://github.com/bounswe/bounswe2024group10/issues/331) | [PR #333](https://github.com/bounswe/bounswe2024group10/pull/333) |

### Management related issues

| Task Name                          | Related issue                                                    | Related PRs |
| ---------------------------------- | ---------------------------------------------------------------- | ----------- |
| Distribute backend tasks           | [#359](https://github.com/bounswe/bounswe2024group10/issues/359) | None        |
| Organize user stories and UI tasks | [#361](https://github.com/bounswe/bounswe2024group10/issues/361) | None        |

### PRs

| Task Name                        | Related PR                                                        |
| -------------------------------- | ----------------------------------------------------------------- |
| Implement asset model            | [PR #409](https://github.com/bounswe/bounswe2024group10/pull/409) |
| Fix adding comment to DB         | [PR #428](https://github.com/bounswe/bounswe2024group10/pull/428) |
| Implement YahooFinance endpoints | [PR #386](https://github.com/bounswe/bounswe2024group10/pull/386) |
| Implement follow mechanism       | [PR #333](https://github.com/bounswe/bounswe2024group10/pull/333) |

### Additional Information

- Mentored team members in Spring Boot and Java development.
- Worked collaboratively with the frontend team to define API requirements.
- Actively tracked and resolved issues related to backend performance and functionality.

## 2.2 Yusuf Kağan Çiçekdağ

### Responsibilities

- Helping team members during Lab sessions
- Creating mock data for our backend server
- Writing the Customer Presentation 2 Report

### Main contributions

- Documenting the requirements of our determined standard
- Added related mobile mockups to our created basic user stories
- Writing a basic user scenario for the Customer Presentation 2
- Creating mock data for our backend server
- Writing the Customer Presentation 2 Report

### API contributions

- None

### Code related issues

- None

### Management related issues

- None

### PRs

| Task Name                      | Related PR                                                     |
| ------------------------------ | -------------------------------------------------------------- |
| Mock Data Creation for Backend | [#449](https://github.com/bounswe/bounswe2024group10/pull/449) |

### Additional Information

- During our Lab sessions (Lab 5,6, and 7) between two customer presentations, I documented the [requirements of our determined standard](https://github.com/bounswe/bounswe2024group10/wiki/W3C-Standard-%E2%80%90-Annotation) with Oğuzhan Tuncer and Melih Akpınar at Lab 5 (Issue: [#352](https://github.com/bounswe/bounswe2024group10/issues/352)). At Lab 6, I have added related mobile mockups for our basic user stories ([User Group Story 1](https://github.com/bounswe/bounswe2024group10/wiki/User-Group-Story-1#related-mobile-mockups), [User Group Story 2](https://github.com/bounswe/bounswe2024group10/wiki/User-Group-Story-2#related-mobile-mockups)). At Lab 7, I helped Gülşen Sabak and Hüseyin Karataş for [User Experience Decision Documentation](https://github.com/bounswe/bounswe2024group10/wiki/User-Experience-Decisions) and wrote a [basic user scenario](https://github.com/bounswe/bounswe2024group10/wiki/Milestone-2-plan#what-we-plan-to-present-as-a-scenario) for the Customer Presentation 2. Apart from these, I have also [created mock data for our backend server](https://github.com/bounswe/bounswe2024group10/pull/449) and wrote the Customer Presentation 2 Report.

## 2.3 Oğuzhan Tuncer

### Responsibilities

- Organized the front-end team meetings
- Added the user type selection part in the sign-in flow. Updated the related api request.
- Revised the overall user interface of the sign-in and log-in pages.
- Created the sidebar for the navigation and better user experience.
- Revised the postHeader component and the feed page.
- Connected the related endpoints for the feed page.
- Revised the comment component for the nested comment structure.
- Added comment creation and reply interfaces.
- Connected the like and dislike related endpoints
- Connected the related the endpoints with the comment creation, reply and the nested render mechanism for the comments.
- Created the modularized CSS resolve previous CSS conflicts by scoping styles to individual components.
- Created a `services` folder, where each namespace, such as `auth`, has its own dedicated folder containing endpoint definitions for better organization and maintainability.
- Created some users and updated the profile photos for the demo.
- Created some realistic posts for the demo.

### Main contributions

- Revised postHeader component and the feed page.
- Revised comment component, made it suitable for the nested comments.
- Created modularized CSS to prevent conflicts.
- Added sidebar.
- Revised the sign-in flow, added the user type selection process.
- Revised the user interface of the sign-in and the log-in pages.
- Connected /like, /dislike, /unlike, /undislike endpoints in the post page.
-

### API contributions

- Created a `services` folder, where each namespace, such as `auth`, has its own dedicated folder containing endpoint definitions for better organization and maintainability.
- Connected the /feed and /explore endpoints for the feed page.
- Connected /get-post endpoint to render a specific post.
- Connected /like, /dislike, /unlike, /undislike endpoints in the post page.

### Code related issues

| Task Name                                            | Related issue                                                    | Related PRs                                                                                                                        |
| ---------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Add Create User Flow                                 | [#374](https://github.com/bounswe/bounswe2024group10/issues/374) | [PR 414](https://github.com/bounswe/bounswe2024group10/pull/414)                                                                   |
| Implement Comment, Like, and Dislike functionalities | [#373](https://github.com/bounswe/bounswe2024group10/issues/373) | [PR 433](https://github.com/bounswe/bounswe2024group10/pull/433)                                                                   |
| Redesign Web Homepage                                | [#371](https://github.com/bounswe/bounswe2024group10/issues/371) | [PR 433](https://github.com/bounswe/bounswe2024group10/pull/433), [PR 395](https://github.com/bounswe/bounswe2024group10/pull/395) |
| Create Sidebar                                       | [#369](https://github.com/bounswe/bounswe2024group10/issues/369) | [PR 397](https://github.com/bounswe/bounswe2024group10/pull/397)                                                                   |
| Create comment component                             | [#342](https://github.com/bounswe/bounswe2024group10/issues/342) | [PR 433](https://github.com/bounswe/bounswe2024group10/pull/433)                                                                   |
| Web API Services                                     |                                                                  | [PR 422](https://github.com/bounswe/bounswe2024group10/pull/422)                                                                   |

### Management related issues

| Task Name              | Related issue                                                    | Related PRs |
| ---------------------- | ---------------------------------------------------------------- | ----------- |
| Web Update Meting      | [#375](https://github.com/bounswe/bounswe2024group10/issues/375) |             |
| W3 Standard Discussion | [#353](https://github.com/bounswe/bounswe2024group10/issues/353) |             |

### PRs

| Task Name                                            | Related PR                                                                                                                         |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Add Create User Flow                                 | [PR 414](https://github.com/bounswe/bounswe2024group10/pull/414)                                                                   |
| Implement Comment, Like, and Dislike functionalities | [PR 433](https://github.com/bounswe/bounswe2024group10/pull/433)                                                                   |
| Redesign Web Homepage                                | [PR 433](https://github.com/bounswe/bounswe2024group10/pull/433), [PR 395](https://github.com/bounswe/bounswe2024group10/pull/395) |
| Create Sidebar                                       | [PR 397](https://github.com/bounswe/bounswe2024group10/pull/397)                                                                   |
| Create comment component                             | [PR 433](https://github.com/bounswe/bounswe2024group10/pull/433)                                                                   |
| Web API Services                                     | [PR 422](https://github.com/bounswe/bounswe2024group10/pull/422)                                                                   |

## 2.4 Gülşen Sabak

### Responsibilities

- Present the customer milestone 2.
- Improving the mobile application for the milestone 2.
- Connecting backend endpoints to the mobile application.

### Main contributions

- Present the customer milestone 2.
- Connected assigned backend endpoints to mobile application.
- Created user group story 2 on a lab pr.
- Single page storage handling.
- Fixed syntax errors and bugs on mobile.

### Code related issues

| Task Name                                                      | Related issue                                                    | Related PRs                                                                                                                   |
| -------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Implement Follow, Unfollow Endpoints on Mobile                 | [#383](https://github.com/bounswe/bounswe2024group10/issues/383) | [#425](https://github.com/bounswe/bounswe2024group10/pull/425) [#426](https://github.com/bounswe/bounswe2024group10/pull/426) |
| Implement Like, Unlike, Dislike, Undislike functions on Mobile | [#382](https://github.com/bounswe/bounswe2024group10/issues/382) | [#412](https://github.com/bounswe/bounswe2024group10/pull/412)                                                                |

### Management related issues

| Task Name                                                                               | Related issue                                                    | Related PRs |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------- |
| Document the determined standard                                                        | [#351](https://github.com/bounswe/bounswe2024group10/issues/351) |             |
| Outline the software quality plan, including unit test coverage and integration testing | [#379](https://github.com/bounswe/bounswe2024group10/issues/379) |             |
| Second Milestone Planing                                                                | [#377](https://github.com/bounswe/bounswe2024group10/issues/377) |

### PRs

| Task Name                                            | Related PR                                                                                                                    |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Implement Like, Unlike, Dislike, Undislike endpoints | [#412](https://github.com/bounswe/bounswe2024group10/pull/412)                                                                |
| Implement Follow, Unfollow endpoints                 | [#425](https://github.com/bounswe/bounswe2024group10/pull/425) [#426](https://github.com/bounswe/bounswe2024group10/pull/426) |
| Document user group story                            | [#361](https://github.com/bounswe/bounswe2024group10/pull/361)                                                                |
| Single page storage handling                         | [#400](https://github.com/bounswe/bounswe2024group10/pull/400)                                                                |
| Fix syntax errors                                    | [#432](https://github.com/bounswe/bounswe2024group10/pull/432) [#431](https://github.com/bounswe/bounswe2024group10/pull/431) |

## 2.5 Hüseyin Karataş

### Responsibilities

- Managing and improving the mobile application for the milestone 2.
- Connecting new backend endpoints to the mobile application.

### Main contributions

- Connected new backend endpoints to the mobile application.
- Fixed bugs on mobile and improved the existing features.
- Gave a decision on how to store posts for different type of contents.
- Created user group story 1 during lab.

### Code related issues

| Task Name                | Related issue                                                    | Related PRs                                                      |
| ------------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Update auth logic        | [#381](https://github.com/bounswe/bounswe2024group10/issues/381) | [PR 384](https://github.com/bounswe/bounswe2024group10/pull/384) |
| Animated Tabbar          | [#275](https://github.com/bounswe/bounswe2024group10/issues/275) | [PR 348](https://github.com/bounswe/bounswe2024group10/pull/348) |
| Create Post              | [453](https://github.com/bounswe/bounswe2024group10/issues/453)  | [PR 396](https://github.com/bounswe/bounswe2024group10/pull/396) |
| Add Asset to Portfolio   | [451](https://github.com/bounswe/bounswe2024group10/issues/451)  | [PR 447](https://github.com/bounswe/bounswe2024group10/pull/447) |
| Explore Screen Endpoints | [452](https://github.com/bounswe/bounswe2024group10/issues/452)  | [PR 429](https://github.com/bounswe/bounswe2024group10/pull/429) |

### Management related issues

| Task Name              | Related issue                                                    | Related PRs |
| ---------------------- | ---------------------------------------------------------------- | ----------- |
| W3 Standard Discussion | [#353](https://github.com/bounswe/bounswe2024group10/issues/353) |             |
| Post Content Structure | [#363](https://github.com/bounswe/bounswe2024group10/issues/363) |             |

### PRs

| Task Name                   | Related PR                                                       |
| --------------------------- | ---------------------------------------------------------------- |
| Improve Auth Logic          | [PR 384](https://github.com/bounswe/bounswe2024group10/pull/384) |
| Create Custom Tabbar        | [PR 348](https://github.com/bounswe/bounswe2024group10/pull/348) |
| Set Up Linter               | [PR 349](https://github.com/bounswe/bounswe2024group10/pull/349) |
| User Group Story            | [PR 361](https://github.com/bounswe/bounswe2024group10/pull/361) |
| Create Post                 | [PR 396](https://github.com/bounswe/bounswe2024group10/pull/396) |
| Connect Explore endpoints   | [PR 429](https://github.com/bounswe/bounswe2024group10/pull/429) |
| Connect Portfolio endpoints | [PR 447](https://github.com/bounswe/bounswe2024group10/pull/447) |

## 2.6 Ömer Faruk Erzurumluoğlu

### Responsibilities

- Generating the database which would hold sub-forums/posts/comments
- Writing the endpoints which have sub-forum/post/comment data
- Implementing the back-end of annotation standard

### Main contributions

- Wrote the model, repository of "posts" and "follow sub-forum".
- Wrote endpoints for getting, setting, deleting endpoints for "posts"
- Wrote endpoints for following, unfollowing and get followed sub-forums endpoints
- Wrote a data initializer
- Wrote explore & feed endpoints
- Researched about web annotation data model

### API contributions

- Wrote the back-end of /get-subforums
- Wrote the back-end of /get-subforums/non-recursive
- Wrote the back-end of /get-posts-of-subforum
- Wrote the back-end of /get-posts-of-subforum/non-recursive
- Wrote the back-end of /get-comments-of-post-or-comment
- Wrote the back-end of /get-comments-of-post-or-comment/non-recursive
- Wrote the back-end of /get-post
- Wrote the back-end of /get-post/non-recursive
- Wrote the back-end of /create-post
- Wrote the back-end of /create-subforum
- Wrote the back-end of /create-comment
- Wrote the back-end of /edit-comment
- Wrote the back-end of /edit-post
- Wrote the back-end of /edit-subforum
- Wrote the back-end of /delete-post
- Wrote the back-end of /delete-subforum
- Wrote the back-end of /delete-comment
- Wrote the back-end of /general-get-post
- Wrote the back-end of /general-get-post\non-recursive
- Wrote the back-end of /general-get-childeren
- Wrote the back-end of /general-delete
- Wrote the back-end of /explore
- Wrote the back-end of /explore/non-recursive
- Wrote the back-end of /feed
- Wrote the back-end of /feed/non-recursive
- Wrote the back-end of /explore/search
- Wrote the back-end of /explore/search/non-recursive
- Wrote the back-end of /follow-subforum
- Wrote the back-end of /unfollow-subforum
- Wrote the back-end of /get-followings

### Code related issues

| Task Name                                              | Related issue                                                    | Related PRs |
| ------------------------------------------------------ | ---------------------------------------------------------------- | ----------- |
| Fix some bugs                                          | [#388](https://github.com/bounswe/bounswe2024group10/issues/388) |             |
| Implement Search Endpoint                              | [#391](https://github.com/bounswe/bounswe2024group10/issues/391) |             |
| Get Endpoints with the Liked-Disliked data of the User | [#392](https://github.com/bounswe/bounswe2024group10/issues/392) |             |
| Create Search Subforum endpoint                        | [#393](https://github.com/bounswe/bounswe2024group10/issues/393) |             |
| Return subforum Id on post                             | [#394](https://github.com/bounswe/bounswe2024group10/issues/394) |             |

### Management related issues

| Task Name                    | Related issue                                                    | Related PRs |
| ---------------------------- | ---------------------------------------------------------------- | ----------- |
| W3 Standard Discussion       | [#353](https://github.com/bounswe/bounswe2024group10/issues/353) |             |
| Post Content Structure       | [#363](https://github.com/bounswe/bounswe2024group10/issues/363) |             |
| Planing for Second Milestone | [#377](https://github.com/bounswe/bounswe2024group10/issues/377) |             |

### PRs

| Task Name               | Related PR                                                       |
| ----------------------- | ---------------------------------------------------------------- |
| New data initializer    | [#449](https://github.com/bounswe/bounswe2024group10/issues/449) |
| Add post unit test      | [#441](https://github.com/bounswe/bounswe2024group10/issues/441) |
| Write backend for posts | [#385](https://github.com/bounswe/bounswe2024group10/issues/385) |
| Fix bugs                | [#389](https://github.com/bounswe/bounswe2024group10/issues/389) |
| Follow subforum         | [#407](https://github.com/bounswe/bounswe2024group10/issues/407) |
| Feed endpoint           | [#410](https://github.com/bounswe/bounswe2024group10/issues/410) |
| Fixing endpoints        | [#413](https://github.com/bounswe/bounswe2024group10/issues/413) |

## 2.7 Nazlıcan Aka

### Responsibilities

- Document the determined standard. [See](https://github.com/bounswe/bounswe2024group10/issues/351)
- Planing backend process. [See](https://github.com/bounswe/bounswe2024group10/issues/359)
- Create project plan for the milestone-2, add .pom file to the codes. [See](https://github.com/bounswe/bounswe2024group10/issues/450), [PR 454](https://github.com/bounswe/bounswe2024group10/pull/454)
- Outline the software quality plan, including unit test coverage and integration testing. [See](https://github.com/bounswe/bounswe2024group10/wiki/Milestone-2-plan)
- Write Unit test for Portfolio endpoints. [See](https://github.com/bounswe/bounswe2024group10/issues/443), [PR](https://github.com/bounswe/bounswe2024group10/pull/445)
- Implement portfolio endpoints. [See](https://github.com/bounswe/bounswe2024group10/issues/360)
- Edit portfolio endpoints according to reviews. [See](https://github.com/bounswe/bounswe2024group10/issues/401)
- Do tests for portfolio endpoints in Postman. [See](https://github.com/bounswe/bounswe2024group10/issues/403)
- Write unit tests for portfolio endpoints. [See](https://github.com/bounswe/bounswe2024group10/issues/443)
- Planning of second milestone. [See](https://github.com/bounswe/bounswe2024group10/issues/377)
- Document annotation standart. [See](https://github.com/bounswe/bounswe2024group10/issues/351)
- Add user details endpoints. [See](https://github.com/bounswe/bounswe2024group10/issues/328)

### Main contributions

- Backend Process Planning
  - Led the planning of the backend processes, ensuring efficient structure and workflows.
  - [Issue](https://github.com/bounswe/bounswe2024group10/issues/359)
- Project and Milestone Planning
  _ Created a comprehensive project plan for Milestone-2, including adding the .pom file for project configuration.
  _ [Issue 1](https://github.com/bounswe/bounswe2024group10/issues/450) | [Milestone Plan](https://github.com/bounswe/bounswe2024group10/wiki/Milestone-2-plan)
  _Portfolio Endpoints Development
  _ Implemented and iteratively improved portfolio endpoints based on code reviews.
  * [Implementation Issue](https://github.com/bounswe/bounswe2024group10/issues/360) | [Edit Issue](https://github.com/bounswe/bounswe2024group10/issues/401)
  *Testing and Validation
  _ Conducted extensive testing of portfolio endpoints using Postman.
  _ Developed and executed unit tests for portfolio functionality.
  * [Postman Testing](https://github.com/bounswe/bounswe2024group10/issues/403) | [Unit Testing Issue](https://github.com/bounswe/bounswe2024group10/issues/443)
  *Annotation Standard Documentation
  _ Documented and standardized the annotation process for the project.
  _ [Annotation Standard](https://github.com/bounswe/bounswe2024group10/issues/351)
  _User Details Endpoints
  _ Added and configured user details endpoints to enhance user data management.
  * [Issue](https://github.com/bounswe/bounswe2024group10/issues/328)
  *Portfolio Endpoints
  _ Added portfolio endpoints for enhancement of our project.
  _ [Issue](https://github.com/bounswe/bounswe2024group10/issues/328)

### API contributions

- API endpoints from user details:
  "/api/user/get-user-details"
  Example call and response:
  Call:
  Username is used while calling the API as a path variable

/api/user/get-user-details/{Nazlıcan Aka}

Response:
{
"email": “[nazlican.aka@std.bogazici.edu](mailto:nazlican.aka@bogazici.edu).tr”,
"username": "Nazlıcan Aka",
"name": “Nazlıcan”,
"profilePhoto": “none”,
“Tag”: “3”,
“Bio”: “none”
}

    "/api/user/set-user-details"

Example call and response:
Call:
{
"email": “[nazlican.aka@std.bogazici.edu](mailto:nazlican.aka@bogazici.edu).tr”,
"profilePhoto": “none”,
“Bio”: “nano”,
“Tag”: “1”
}

Response:
{
"email": “[nazlican.aka@bogazici.edu](mailto:nazlican.aka@bogazici.edu).tr”,
"username": "Nazlıcan Aka",
"name": “Nazlıcan”,
"profilePhoto": “none”,
“Tag”: “0”,
“Bio”: “none”
}

- Places API used in project:
  Get-user-details, and set user details are used in user personal pages.
  Scenario:
  Nazlıcan see Tradeverse forum and want to learn more about finance. Enter the forum, to like, dislike and comment to post, she sign-in. She entered her e-mail, username, name, don’ t put a profile photo, she chose “Financial Enthusiasts” as a tag. And, enter the Tradeverse. A couple of days later, she found financereually interesting and started to investing more getting influenced by other users. Therefore, she changed her tag to “Day Traders”.

- API endpoints from portfolio:
  "/api/portfolio/create“
  Example call and response:
  Call:
  {
  "username": "Nazlıcan Aka",
  "name": "BIST",
  "amount": "100"
  }

Response:
{
"id": 10,
"username": "Nazlıcan Aka",
"name": "BIST",
"message": "Portfolio created successfully",
"successful": true
}

    "/api/portfolio/get-portfolio“

Example call and response:
Call:
{
"username": "Nazlıcan Aka"
}

Response:
{
"isSuccessful": true,
"message": "Portfolios retrieved successfully",
"portfolios": [
{
"id": 10,
"username": “Nazlıcan Aka”,
"name": "BIST",
"amount": 100.00
}
]
}

    "/api/portfolio/update“

Example call and response:
Call:
{
"username": “Nazlıcan Aka”,
"name": "ABC",
"amount": 0
}

Response:
{
"isSuccessful": true,
"id": 10,
"message": "Portfolio updated successfully"
}

- Places API used in project:
  Portfolio endpoints are used in users’ profiles. Every user can have a portfolio, can add assets to their portfolios, update assets.
  Scenario:
  Nazlıcan wants to add a portfolio to her profile. She added “BIST” 100 pieces. She has added “ABC” to her portfolio, but she sold all ABC, so she changed its piece as 0.

### Code related issues

| Task Name                                                                                                    | Related issue                                                    | Related PRs                                                      |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Move get-user-details endpoint from /api/auth to /api/user.                                                  | [#328](https://github.com/bounswe/bounswe2024group10/issues/328) | [PR 350](https://github.com/bounswe/bounswe2024group10/pull/350) |
| Change request type of get-user-details from POST to GET.                                                    | [#328](https://github.com/bounswe/bounswe2024group10/issues/328) | [PR 350](https://github.com/bounswe/bounswe2024group10/pull/350) |
| Implement the set-user-details endpoint to allow users to update their email, profile picture, bio, and tag. | [#328](https://github.com/bounswe/bounswe2024group10/issues/328) | [PR 350](https://github.com/bounswe/bounswe2024group10/pull/350) |
| Design portfolio database and create Portfolio model.                                                        | [#360](https://github.com/bounswe/bounswe2024group10/issues/360) | [PR 387](https://github.com/bounswe/bounswe2024group10/pull/387) |
| Implement /api/portfolio controllers.                                                                        | [#360](https://github.com/bounswe/bounswe2024group10/issues/360) | [PR 406](https://github.com/bounswe/bounswe2024group10/pull/406) |
| Implement the logic.                                                                                         | [#360](https://github.com/bounswe/bounswe2024group10/issues/360) | [PR 406](https://github.com/bounswe/bounswe2024group10/pull/406) |
| Test the endpoints.                                                                                          | [#360](https://github.com/bounswe/bounswe2024group10/issues/360) | [PR 406](https://github.com/bounswe/bounswe2024group10/pull/406) |
| Do test in Postman for portfolio end-points                                                                  | [#403](https://github.com/bounswe/bounswe2024group10/issues/403) | none                                                             |
| Write Unit test for Portfolio endpoints                                                                      | [#443](https://github.com/bounswe/bounswe2024group10/issues/443) | [PR 445](https://github.com/bounswe/bounswe2024group10/pull/445) |
| Create project plan for the milestone-2, add .pom file to the codes.                                         | [#450](https://github.com/bounswe/bounswe2024group10/issues/450) | [PR 454](https://github.com/bounswe/bounswe2024group10/pull/454) |

### Management related issues

| Task Name                                                                                | Related issue                                                    | Related PRs                                                                 |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------- |
| User stories and UI                                                                      | [#359](https://github.com/bounswe/bounswe2024group10/issues/359) | [PR 361](https://github.com/bounswe/bounswe2024group10/pull/361)            |
| Document the determined standard                                                         | [#351](https://github.com/bounswe/bounswe2024group10/issues/351) | none                                                                        |
| Create project plan for the milestone-2, add .pom file to the codes.                     | [#450](https://github.com/bounswe/bounswe2024group10/issues/450) | none                                                                        |
| Outline the software quality plan, including unit test coverage and integration testing. | [#379](https://github.com/bounswe/bounswe2024group10/issues/379) | [Page](https://github.com/bounswe/bounswe2024group10/wiki/Milestone-2-plan) |
| Planing backend process.                                                                 | [#359](https://github.com/bounswe/bounswe2024group10/issues/359) | none                                                                        |
| Planning of second milestone.                                                            | [#377](https://github.com/bounswe/bounswe2024group10/issues/377) | none                                                                        |

### PRs

| Task Name                                                            | Related PR                                                       |
| -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Backend user detail endpoints                                        | [PR 350](https://github.com/bounswe/bounswe2024group10/pull/350) |
| Create portfolio table and repository class                          | [PR 387](https://github.com/bounswe/bounswe2024group10/pull/387) |
| Implement portfolio endpoints                                        | [PR 406](https://github.com/bounswe/bounswe2024group10/pull/406) |
| Write Unit test for Portfolio endpoints                              | [PR 445](https://github.com/bounswe/bounswe2024group10/pull/445) |
| Create project plan for the milestone-2, add .pom file to the codes. | [PR 454](https://github.com/bounswe/bounswe2024group10/pull/454) |

While merging [PR 406](https://github.com/bounswe/bounswe2024group10/pull/406) to the main, I have changed also table and repository class of portfolio, so there are conflicts because of the [PR 387](https://github.com/bounswe/bounswe2024group10/pull/387). I have solved the conflict from GitHub. Basically, choose the last changes and discard the older ones, and when convicts resolved, I have merged it with the main.

### Additional Information

- I have collaborated with Mesut Melih Akpınar and Ömer Faruk Erzurumluoğlu so many times. They are quite helpful because I have learned the tools, such as spring boot, or postman recently.
- I have firstly created the [PR 390](https://github.com/bounswe/bounswe2024group10/pull/390) but Melih merged it accidentally, so we have created a new [PR 406](https://github.com/bounswe/bounswe2024group10/pull/406)d with the same commits I have done in the [PR 390](https://github.com/bounswe/bounswe2024group10/pull/390) so that don’ t confused about PR’ s and the person who actually worked on it.
- For the portfolio endpoints, portfolio does not shown in the demo because at the last minute there was a connection error between frontend. So, it will be shown in the third milestone.
- I have learned a lot of useful tools and collaborate with my teammates. I have worked really hard but it worth.

## 2.8 Yasin Atlı

### Responsibilities

- I was responsible for the Front-End part of the project.
- I was responsible for implementing pages.
- I was responsible for creating components.
- I was responsible for connecting backend endpoints.
- I was responsible for using some third party apis like TradingView and Yahoo Finance.
- I was responsible for reviewing PR's.
- I was responsible for testing backend API's and giving feedback.

### Main contributions

- Creating NewsView component for assets.
- Creating Chart component for assets.
- Creating Create Post component and attaching Subforums and Asset charts in it.
- Creating Search page.
- Rendering Subforums on the Header component.
- Implementing Post,Subforum,Tag,Assets search connected to Backend.
- Testing backend API's and providing feedback.
- Implementing assets and their chart symbols both on front-end and backend.
- Reviewing my teammates pr's and giving them feedback.
- Favicon and web Title change

### API contributions

- TradingView scripts implemented on the Chart Component.
- TradingView scripts implemented on the News Component.
- I implemented assets and their chart symbols and provided them to backend. Then, backend embeedded them in the database.

### Code related issues

| Task Name                                                                      | Related issue                                                    | Related PRs                                                                                                                        |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Creating NewsView component for assets.                                        | [#368](https://github.com/bounswe/bounswe2024group10/issues/368) | [PR 402](https://github.com/bounswe/bounswe2024group10/pull/402)                                                                   |
| Creating Chart component for assets.                                           | [#368](https://github.com/bounswe/bounswe2024group10/issues/368) | [PR 402](https://github.com/bounswe/bounswe2024group10/pull/402)                                                                   |
| Creating Create Post component and attaching Subforums and Asset charts in it. | [#368](https://github.com/bounswe/bounswe2024group10/issues/368) | [PR 411](https://github.com/bounswe/bounswe2024group10/pull/411)                                                                   |
| Creating Search page.                                                          | [#365](https://github.com/bounswe/bounswe2024group10/issues/365) | [PR 436](https://github.com/bounswe/bounswe2024group10/pull/436), [PR 440](https://github.com/bounswe/bounswe2024group10/pull/440) |
| Favicon and web Title change                                                   | N/A                                                              | [PR380 ](https://github.com/bounswe/bounswe2024group10/pull/380)                                                                   |
| Rendering Subforums on the Header component.                                   | N/A                                                              | [PR 446](https://github.com/bounswe/bounswe2024group10/pull/446)                                                                   |
| Implementing assets and their chart symbols both on front-end and backend.     | N/A                                                              | [PR 402](https://github.com/bounswe/bounswe2024group10/pull/402)                                                                   |
| Web UI improvements                                                            | [#357](https://github.com/bounswe/bounswe2024group10/issues/357) | [PR 367](https://github.com/bounswe/bounswe2024group10/pull/367)                                                                   |

### Management related issues

| Task Name                                             | Related issue | Related PRs                                                       |
| ----------------------------------------------------- | ------------- | ----------------------------------------------------------------- |
| Testing Backend API's and providing feedback          | N/A           | N/A                                                               |
| Reviewing The realted PR and providing feedback       | N/A           | [PR 390 ](https://github.com/bounswe/bounswe2024group10/pull/390) |
| Reviewing The realted PR and providing feedback       | N/A           | [PR 395 ](https://github.com/bounswe/bounswe2024group10/pull/395) |
| Reviewing The realted PR and providing feedback       | N/A           | [PR 397 ](https://github.com/bounswe/bounswe2024group10/pull/397) |
| Reviewing The realted PR and providing feedback       | N/A           | [PR 414 ](https://github.com/bounswe/bounswe2024group10/pull/414) |
| Third party API research(Yahoo Finance , TradingView) | N/A           | [PR 402](https://github.com/bounswe/bounswe2024group10/pull/402)  |

### PRs

| Task Name                                     | Related PR                                                       |
| --------------------------------------------- | ---------------------------------------------------------------- |
| Search functionality & mock data improvements | [PR 376](https://github.com/bounswe/bounswe2024group10/pull/376) |
| Chart component and asset datas               | [PR 402](https://github.com/bounswe/bounswe2024group10/pull/402) |
| Create post functionality                     | [PR 411](https://github.com/bounswe/bounswe2024group10/pull/411) |
| Search functions                              | [PR 436](https://github.com/bounswe/bounswe2024group10/pull/436) |
| Popular search fix                            | [PR 440](https://github.com/bounswe/bounswe2024group10/pull/440) |
| Header-subforums                              | [PR 446](https://github.com/bounswe/bounswe2024group10/pull/446) |

### Additional Information

- In this project, I ensured the successful implementation of all tasks assigned to me, prioritizing timely and high-quality delivery. However, some challenges were encountered due to delays from the backend team in providing the required endpoints. Despite these setbacks, I proactively tested available APIs, provided detailed feedback to the backend team to facilitate their development process, and adapted my work to accommodate these delays without compromising the overall project timeline.

- I also played a key role in integrating third-party APIs like TradingView and Yahoo Finance, which were essential for the application's core functionalities. My responsibilities included not only front-end development but also effective communication and coordination with the backend team to ensure seamless integration of features.

- Additionally, I consistently reviewed pull requests from teammates, offering constructive feedback to improve code quality and maintain consistency throughout the project. My involvement extended beyond implementation, as I contributed to refining UI/UX elements, enhancing the user experience, and ensuring that the product met the project requirements and goals.

## 2.9 Onur Kafkas

### Responsibilities

- As I am on the web-frontend team, I was mostly responsible for frontend related issues.
- We communicated with the team daily, catching up on each others works and planning ahead.

### Main contributions

- User page for viewing other users' profile pages.
- Account page with editing functionality for a users own profile page.
- Filling these pages with mock data.
- Connecting the user page and the account page with the backend endpoints.
- Creating links on the relevant link points for pages.
- Subforums bar UX changes
- Added shadow to the selected subforums background to improve user experience.
- Sidebar UX changes.
- Imported a default profile picture icon to display both on our mock user pages and for further use on users with no profile picture.

### Code related issues

| Task Name                                   | Related issue                                                    | Related PRs                                                                                                                        |
| ------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Web Color Palette                           | [#357](https://github.com/bounswe/bounswe2024group10/issues/357) | -                                                                                                                                  |
| Web Account Page                            | [#370](https://github.com/bounswe/bounswe2024group10/issues/370) | [PR 418](https://github.com/bounswe/bounswe2024group10/pull/418)                                                                   |
| Web User Page                               | [#372](https://github.com/bounswe/bounswe2024group10/issues/372) | [PR 427](https://github.com/bounswe/bounswe2024group10/pull/427), [PR 438](https://github.com/bounswe/bounswe2024group10/pull/438) |
| Link Account Page to Sidebar                | [#416](https://github.com/bounswe/bounswe2024group10/issues/416) | [PR 418](https://github.com/bounswe/bounswe2024group10/pull/418)                                                                   |
| Add Post Component to Account and User page | [#417](https://github.com/bounswe/bounswe2024group10/issues/417) | [PR 418](https://github.com/bounswe/bounswe2024group10/pull/418)                                                                   |
| Right Menu Button Fix                       | [#423](https://github.com/bounswe/bounswe2024group10/issues/423) | [PR 424](https://github.com/bounswe/bounswe2024group10/pull/424)                                                                   |
| Navbar Shadowing                            | [#439](https://github.com/bounswe/bounswe2024group10/issues/439) | [PR 442](https://github.com/bounswe/bounswe2024group10/pull/442)                                                                   |

### Management related issues

| Task Name                         | Related issue                                                    | Related PRs |
| --------------------------------- | ---------------------------------------------------------------- | ----------- |
| Choose Post Language              | [#363](https://github.com/bounswe/bounswe2024group10/issues/363) | -           |
| Document W3C Standard Enforcement | [#353](https://github.com/bounswe/bounswe2024group10/issues/353) | -           |
| Second Milestone Planning         | [#377](https://github.com/bounswe/bounswe2024group10/issues/377) | -           |

### PRs

| Task Name               | Related PR                                                       |
| ----------------------- | ---------------------------------------------------------------- |
| Web Account Page        | [PR 418](https://github.com/bounswe/bounswe2024group10/pull/418) |
| Right Menu Button Fix   | [PR 424](https://github.com/bounswe/bounswe2024group10/pull/424) |
| User Page               | [PR 427](https://github.com/bounswe/bounswe2024group10/pull/427) |
| Default Profile Picture | [PR 438](https://github.com/bounswe/bounswe2024group10/pull/438) |
| Navbar Shadowing        | [PR 442](https://github.com/bounswe/bounswe2024group10/pull/442) |
