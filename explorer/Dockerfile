# Install dependencies only when needed
FROM --platform=linux/arm64 node:16.19-buster AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# https://github.com/imagemin/mozjpeg-bin/issues/47 needed to compile mozjpeg.
# RUN apt-get update && apt-get install -y \
#     autoconf \
#     automake \
#     file \
#     g++ \
#     gcc \
#     jpeg \ 
#     libc6-compat \
#     libtool \
#     libpng-dev \
#     make \
#     musl-dev \
#     nasm \
#     pkgconf \
#     tiff \


WORKDIR /app


# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . /app

RUN pwd

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

# If using npm comment out above and use below instead
RUN npm run build-docker:altos-labs-catalog

