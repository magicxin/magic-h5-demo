import config from '../../config'

export default {
  hostname: config[config.env].hostname + config[config.env].port
}
