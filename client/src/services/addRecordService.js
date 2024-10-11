export async function addRecordService(instance,task) {
    try {

    let response = await instance.post('todo/addrecord',{task})

        return response
    }
    catch (error) {
        console.error(error);
        throw 'Unable to fetch the data'
    }
}