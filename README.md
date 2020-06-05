# upwork-rss

1. pull project from repo
2. `cd server`
3. create `.env` file in root and paste:
  `UPWORK_RSS_URL=https://www.upwork.com/ab/feed/topics/rss?securityToken=a26b2f053564f04e09d88926fca664d19262c27b2908b1bd3ac7d19310930160673877b14fc7a307f7c06c54043452d0a4acbb4db98c8d1b097928f7fc9d1cfd&userUid=933994186965417984&orgUid=933994186969612289
  FETCH_INTERVAL_MINUTES=1
  JWT_KEY=secret`

  note* replace rss url or you can continue with that

4. https://www.jsonwebtoken.io/  sign jwt with empty payload
5. run `docker build -t upwork-rss . && docker-compose up`
6. you can use postman for check API. Just add Bearer token