FROM node:22
RUN groupadd -r appgroup && useradd -r -g appgroup -m appuser
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc
RUN chown -R appuser:appgroup /app
EXPOSE 3000
USER appuser
CMD ["node", "build/index.js"]
