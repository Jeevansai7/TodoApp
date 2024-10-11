export async function deleteRecord(instance,id) {
    try {

    let response = await instance.post('todo/deleterecords',{'id':id})

        return response
    }
    catch (error) {
        console.error(error);
        throw 'Unable to fetch the data'
    }
}