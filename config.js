const host = 'https://www.v2ex.com'

const config = {
  hotUrl: `${host}/api/topics/hot.json`,
  latestUrl: `${host}/api/topics/latest.json`,
  nodesUrl: `${host}/api/nodes/show.json`,
  topicUrl: `${host}/api/topics/show.json?id=`,
  repliesUrl: `${host}/api/replies/show.json?topic_id=`
}

module.exports = config