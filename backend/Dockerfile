# Parent Node.js image
FROM node:13.8.0-alpine3.11

# Set the working directory
WORKDIR /backend

# copy package.json into the container working directory
COPY package*.json /backend/

# install dependencies
RUN npm install

# Copy the current directory contents into the container working directory
COPY . /backend/

# Port number that container should expose
EXPOSE 4000

# Run the app when the container launches
CMD ["npm", "start"]
