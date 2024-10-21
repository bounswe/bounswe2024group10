# Tradeverse Forum

Tradeverse is a web forum application focused on financial news, analyses, and discussions. Tradeverse allows users to participate in discussions about various financial assets and makes the discussion interactive by providing real-time data about assets.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Mobile Setup Instructions](#mobile-setup-instructions)
- [Contributing](#contributing)
- [License](#license)

## Features
- JWT-based authentication
- Secure password storage
- Real-time updates on financial assets
- News filtering based on financial assets

## Technologies Used
- Spring Boot (Java 17)
- React
- MySQL
- JWT (JSON Web Tokens)
- Docker

## Setup Instructions

### Prerequisites
- Ensure you have [Docker](https://www.docker.com/get-started) installed on your machine.
- Docker Compose is included with Docker Desktop installations.

### Clone the Repository
```bash
git clone https://github.com/bounswe/bounswe2024group10.git
cd bounswe2024group10
docker-compose up --build
```

### Configure Environment Variables
Change the db credentials at `docker-compose.yaml`
   ```env
   MYSQL_ROOT_PASSWORD=rootpassword
   MYSQL_DATABASE=tradeverse
   MYSQL_USER=tradeuser
   MYSQL_PASSWORD=tradepassword
   ```

### Build and Run with Docker
1. Build and run the Docker containers using Docker Compose:
   ```bash
   docker-compose up --build
   ```

2. This command will:
   - Build the application.
   - Start the MySQL database and the Spring Boot application.

### Access the Application
- Once the containers are running:
    - You can access the main page at `http://localhost:3000/`.
    - You can access the backend at `http://localhost:8080/api/`.
    - You can access the database at `http://localhost:3306/`.

## Mobile Setup Instructions

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
- Install Expo CLI globally:
   ```bash
   npm install -g expo-cli
   ```

### Clone the Mobile Repository
If you haven't already, clone the mobile project repository:
```bash
cd mobile
git clone <your-mobile-repo-url>
cd tradeverse
```

### Install Dependencies
Navigate to the mobile directory and install the required dependencies:
```bash
npm install
```

### Start the Development Server
You can start the Expo development server by running:
```bash
npm start
```
This will open a new tab in your browser with the Expo developer tools.

### Run on Android Emulator or Device
- **Using Android Emulator**: Make sure you have Android Studio installed and an emulator set up. In the Expo developer tools, click on "Run on Android device/emulator".
- **Using Physical Device**: Install the Expo Go app from the Google Play Store. Scan the QR code displayed in the Expo developer tools to run the app on your device.

### Build the APK
To create a standalone APK for your app, you can use the following command:
```bash
eas build --platform android
```
Make sure you have the EAS CLI installed. If you don't have it, install it using:
```bash
npm install -g eas-cli
```

### Follow the Prompts
The EAS build process will prompt you for various configurations. Follow the instructions to complete the build.

### Download the APK
Once the build is complete, you will receive a link to download the APK file. You can then install this APK on any Android device.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any changes or improvements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
