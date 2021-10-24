const AWS = require('aws-sdk')

const ddb = new AWS.DynamoDB({
  region: 'us-west-2',
  apiVersion: '2012-08-10',
  endpoint: 'http://data:8000',
  credentials: {
    accessKeyId: 'fake-key',
    secretAccessKey: 'fake-secret'
  }
})

run()

async function run() {
  console.time('Timer')
  console.log('Running... ')

  await listTables()
  // await createTable('TestTable')
  // await describeTable('TestTable')

  console.timeEnd('Timer')
  console.log('Done. ')
}

// List tables
async function listTables() {
  try {
    var resp = await ddb.listTables().promise()
    console.log(resp)
    return resp
  } catch (err) {
    console.log('Error: ', err)
    return err
  }
}

// Create a table
async function createTable(tableName) {
  try {
    var resp = await ddb.createTable({
      TableName: tableName,
      AttributeDefinitions: [{ AttributeName: 'Id', AttributeType: 'S' }],
      KeySchema: [{ AttributeName: 'Id', KeyType: 'HASH' }],
      ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
    }).promise()
    console.log(resp)
    return resp
  } catch (err) {
    console.log('Error: ', err)
    return err
  }
}

// Describe a table
async function describeTable(tableName) {
  try {
    var resp = await ddb.describeTable({
      TableName: tableName
    }).promise()
    console.log(resp)
    return resp
  } catch (err) {
    console.log('Error: ', err)
    return err
  }
}