# Parent Node.js image
FROM node:13.8.0-alpine3.11

# Set the working directory
WORKDIR /frontend

# copy package.json and package-lock.json into the container working directory
COPY package*.json /frontend/

# install dependencies
RUN npm install

# Copy the current directory contents into the container working directory
COPY . /frontend/

# Port number that container should expose
EXPOSE 9001

# Run the app when the container launches
CMD ["npm", "start"]
