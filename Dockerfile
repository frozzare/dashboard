FROM jitesoft/node-base:latest
ADD build .
ENV NODE_ENV production
ENV PORT 80
RUN apk add --no-cache yarn
RUN yarn install --frozen-lockfile --no-cache --production
CMD ["node", "server/index.js"]
EXPOSE 80
