'use strict'

exports.config = {
  app_name: ['testApp'],
  license_key: 'eu01xxe1dd101a29250ee3be70c794f4FFFFNRAL',
  distributed_tracing: {
    enabled: true
  },
  logging: {
    level: 'info'
  },
  allow_all_headers: true,
  attributes: {
    exclude: [
      'request.headers.cookie',
      'request.headers.authorization',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*',
      'response.headers.cookie',
      'response.headers.authorization',
      'response.headers.proxyAuthorization',
      'response.headers.setCookie*',
      'response.headers.x*'
    ]
  }
}