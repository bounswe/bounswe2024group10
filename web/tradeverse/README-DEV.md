
# Tradeverse Web App


## Prerequisites

Make sure you have the following installed:

- **Node.js** (version 18)  
- **npm**  
- **Docker**

### **Check Node.js Version**

To ensure you have the correct version of Node.js installed, run:

```bash
node --version
```
or 
```bash
node -v
```


## How to Run the App

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bounswe/bounswe2024group10.git
   cd bounswe2024group10/web/tradeverse
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```
   or 
   ```bash
    npm i
    ```

3. **Run the app:**

   ```bash
   npm start
   ```

4. **Access the app:**  
   Open your browser and go to:  

   ```
   http://localhost:3000
   ```

---

## Run the App Using Docker

1. **Build the Docker image:**

   ```bash
   docker build -t tradeverse-web-app .
   ```

   -t flag is used to tag the image with a name.

2. **Run the Docker container:**

   ```bash
   docker run -p 3000:3000 tradeverse-web-app
   ```

   -p flag is used to map the port 3000 of the container to the port 3000 of the host machine.


3. **Access the app:**  
   Open your browser and go to:  

   ```
   http://localhost:3000
   ```

---

## Stopping the App

- **If running locally:**  
  Press `Ctrl + C` in the terminal to stop the app.

- **If running in Docker:**  
  List running containers:

  ```bash
  docker ps
  ```

  Stop the container:

  ```bash
  docker stop <container_id>
  ```

---

## Troubleshooting

- **Port conflicts:**  
  Ensure that port 3000 is not being used by another process.  
  If it is, kill the process that use the port by following the steps below:

    ```bash
    lsof -i :3000
    ```

    ```bash
    kill -9 <PID>
    ```




