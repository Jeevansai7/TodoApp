export async function editRecord(instance,id,task,) {
    try {

    let response = await instance.post('todo/editrecords',{id,task})

        return response
    }
    catch (error) {
        console.error(error);
        throw 'Unable to fetch the data'
    }
}