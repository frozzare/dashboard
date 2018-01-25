FROM jitesoft/node-base:latest
ADD . .
ENV NODE_ENV production
ENV PORT 80
RUN apk add --no-cache yarn
RUN yarn install --frozen-lockfile --no-cache --production
RUN npm run build
CMD ["node", "build/server/index.js"]
EXPOSE 80
