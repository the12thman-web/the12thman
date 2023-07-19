FROM node:18 as dependencies
WORKDIR /twelth-man
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:18 as builder
WORKDIR /twelth-man
COPY . .
COPY --from=dependencies /twelth-man/node_modules ./node_modules
RUN npm run build

FROM node:18 as runner
WORKDIR /twelth-man
COPY --from=builder /twelth-man/public ./public
COPY --from=builder /twelth-man/.next ./.next
COPY --from=builder /twelth-man/node_modules ./node_modules
COPY --from=builder /twelth-man/package.json ./package.json
COPY --from=builder /twelth-man/next.config.js ./next.config.js
COPY --from=builder /twelth-man/.env ./.env

EXPOSE 3000
CMD ["npm", "start"]
