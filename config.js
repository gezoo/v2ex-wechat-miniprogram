const host = 'https://www.v2ex.com'

const config = {
  hotUrl: `${host}/api/topics/hot.json`,
  latestUrl: `${host}/api/topics/latest.json`,
  nodesUrl: `${host}/api/nodes/all.json`,
  nodeTopicsUrl: `${host}/api/topics/show.json?node_id=`,
  topicUrl: `${host}/api/topics/show.json?id=`,
  repliesUrl: `${host}/api/replies/show.json?topic_id=`,
  nodesHtmlUrl: `${host}/?tab=members`
}

module.exports = config