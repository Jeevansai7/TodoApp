export async function getData(instance) {
    try {

    let response = await instance.get('todo/taskrecords')

        return response.data.rows
    }
    catch (error) {
        console.error(error);
        throw 'Unable to fetch the data'
    }
}