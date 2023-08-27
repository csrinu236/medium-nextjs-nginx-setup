FROM node:20.4.0 AS builder

# Set working directory
WORKDIR /temp

RUN npm config set strict-ssl false
RUN npm config set registry http://registry.npmjs.org/

# Copy all files
COPY . .

RUN npm install

# Build app
RUN npm run build

FROM node:20.4.0 AS server

# Set working directory
WORKDIR /app

COPY --from=builder /temp/next.config.js ./
COPY --from=builder /temp/public ./public
COPY --from=builder /temp/build ./build
COPY --from=builder /temp/node_modules ./node_modules
COPY --from=builder /temp/package.json ./package.json


# CMD [ "npm", "run", "start" ]