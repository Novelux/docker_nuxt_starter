FROM node:16

# 앱 디렉토리 설정
WORKDIR /app
ADD . /app/

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./

RUN npm install

EXPOSE 4000

CMD [ "node", "bin/www" ]