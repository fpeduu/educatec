import api from '../../services/api.js'

async function getData() {
    const data = await api.get('');
    var result = []

    for (var i in data.data) {
        result.push(data.data[i])
    }

    result = [...result, ...result, ...result, ...result, ...result] // making the number of elements above 50 (60 more precisely)

    result = result.slice(0, 50);

    return result
}

export default getData;