const { DataBrew } = require('aws-sdk')
const AWS = require('aws-sdk')

const ddb = new AWS.DynamoDB.DocumentClient({
  region: 'us-west-2',
  apiVersion: '2012-08-10',
  endpoint: 'http://db:8000',
  credentials: {
    accessKeyId: 'fake-key',
    secretAccessKey: 'fake-secret'
  }
})

run()

async function run() {
  console.time('Timer')
  console.log('Running... ')

  resp = await scanItems('TestDB')
  // resp = await scanItemsWithFilter('TestDB')
  // resp = await queryItem('TestDB')
  // resp = await queryItemWithFilter('TestDB')
  // resp = await putItem('TestDB')
  // resp = await batchWriteItems()
  // resp = await updateItem('TestDB')

  console.log(resp)
  console.timeEnd('Timer')
  console.log('Done. ')
}

// Get all items from table
async function scanItems(tableName) {
  try {
    var resp = await ddb.scan({
      TableName: tableName
    }).promise()
    return resp
  } catch (err) {
    return err
  }
}

// Get items with filter from table
async function scanItemsWithFilter(tableName) {
  try {
    var resp = await ddb.scan({
      TableName: tableName,
      FilterExpression: 'Id = :idParam',
      ExpressionAttributeValues: { ':idParam': '1' }
    }).promise()
    return resp
  } catch (err) {
    return err
  }
}

// Get a single item from table
async function queryItem(tableName) {
  try {
    var resp = await ddb.query({
      TableName: tableName,
      KeyConditionExpression: 'Id = :idParam',
      ExpressionAttributeValues: { ':idParam': '1' }
    }).promise()
    return resp
  } catch (err) {
    return err
  }
}

// Get a single item with filter from table
async function queryItemWithFilter(tableName) {
  try {
    var resp = await ddb.query({
      TableName: tableName,
      KeyConditionExpression: 'Id = :idParam',
      FilterExpression: 'contains (Message, :message)',
      ExpressionAttributeValues: { ':idParam': '2', ':message': 'second' }
    }).promise()
    return resp
  } catch (err) {
    return err
  }
}

// Add item to table
async function putItem(tableName, item) {
  try {
    var resp = await ddb.put({
      TableName: tableName,
      Item: { 'Id': '3', 'DateCreated': '300', 'DateModified': '301', 'Message': 'This is the third message' }
    }).promise()
    return resp
  } catch (err) {
    return err
  }
}

// Add multi items to table
async function batchWriteItems(tableName) {
  try {
    var resp = await ddb.batchWrite({
      RequestItems: {
        'TestDB': [
          { PutRequest:{'Item':{
              'Id':'4',
              'DateCreated':'400',
              'DateModified':'401',
              'Message':'This is the fourth message'
            }}
          },
          { PutRequest:{'Item':{
              'Id':'5',
              'DateCreated':'500',
              'DateModified':'501',
              'Message':'This is the fifth message'
            }} 
          },
          { PutRequest:{'Item':{
              'Id':'6',
              'DateCreated':'600',
              'DateModified':'601',
              'Message':'This is the sixth message'
            }} 
          }
        ]
      }
    }).promise()
    return resp
  } catch (err) {
    return err
  }
}

// Update existing item on table
async function updateItem(tableName) {
  try {
    var resp = await ddb.update({
      TableName: tableName,
      Key: { 'Id': '3' },
      UpdateExpression: 'set DateModified = :dateModifiedParam',
      ExpressionAttributeValues: { ':dateModifiedParam': '302' }
    }).promise()
    return resp
  } catch (err) {
    return err
  }
}