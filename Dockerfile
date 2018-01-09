FROM jitesoft/node-base:latest
ADD build .
ENV NODE_ENV production
RUN apk add --no-cache yarn
RUN yarn --prod
CMD ["node", "server/index.js"]
EXPOSE 3000