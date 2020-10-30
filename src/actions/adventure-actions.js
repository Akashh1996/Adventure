import dispatcher from '../dispatcher/dispatcher'

export async function loadDataFromMaps() {
    const response = await fetch('')
    const data = await response.json()

    dispatcher.dispatch({
        type: 'LOAD_MAP',
        payload: data
    });
}