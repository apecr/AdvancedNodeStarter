const redis = require('redis')
const redisURL = 'redis://127.0.0.1:6379'
const client = redis.createClient(redisURL)


client.flushall(() => console.log('Deleted'))