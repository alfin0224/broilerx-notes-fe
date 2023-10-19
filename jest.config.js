module.exports = {  
  transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
}