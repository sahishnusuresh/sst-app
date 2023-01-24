import handler from "../utils/handler"
import dynamodb from "../utils/dynamodb"
export const main=handler(async(event)=>{
    const params={
        TableName:process.env.TABLE_NAME,
        KeyConditionExpression:
            "userId=:userId",
        ExpressionAttributeValues:{
            ":userId":"1",
    }
    }
    const result= await dynamodb.query(params)
    return result.Items    
})