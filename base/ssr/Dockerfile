# Dockerfile
# for NGINX
# Step1. Build stage
FROM node:16 as builder
# build 디렉토리 생성
RUN mkdir /build
WORKDIR /build
# 의존성 모듈 설치
# 소스가 변경되도 의존성 모듈을 다시 설치하지 않도록 먼저 캐싱시킨다.
COPY ./package*.json ./
RUN npm install

# 소스 COPY
COPY ./ ./
# 소스 build
RUN npm run generate

# Deploy stage
FROM nginx:1.18.0
# 임시 컨테이너에서 빌드한 자원들을 nginx document root로 이동
COPY --from=builder /build/dist /usr/share/nginx/html
# nginx 설정 file 복사
#COPY ./docker/nginx.conf /etc/nginx/nginx.conf
# 프로젝트 루트 밑에 docker폴더, default.conf 생성
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf