# Install dependencies only when needed
FROM node:24-alpine as builder

# set working directory
WORKDIR /usr/app

# copy package.json and package-lock.json
COPY package*.json /usr/app/

# Install dependencies
RUN npm ci --omit=dev

# Build the source code
FROM node:24-alpine as runner

# Set working directory
WORKDIR /usr/app

# Set environment variables
ENV MONGO_URI=uriPlaceholder
ENV MONGO_USERNAME=usernamePlaceholder
ENV MONGO_PASSWORD=passwordPlaceholder

# copy node_modules and built source code from the previous stage
COPY --from=builder /usr/app/node_modules ./node_modules

# copy all source files
COPY --chown=node:node  . .

USER node

EXPOSE 3000

CMD [ "npm", "start" ]