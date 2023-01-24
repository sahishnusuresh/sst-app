import handler from "../utils/handler"
import dynamodb from "../utils/dynamodb"
export const main=handler(async(event)=>{
    const params={
        TableName:process.env.TABLE_NAME,
        Key:{
            userId:"1",
            noteId:event.pathParameters.id
        }
    }
    await dynamodb.delete(params)
    return {status:true}
})