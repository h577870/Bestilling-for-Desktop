
export async function fetchLogin(userName, password) {
    const url = `${URL}bruker/logginn`
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            brukernavn: userName,
            passord: password
        })
    })
    return response
}

export async function fetchLogout(userName, token) {
    const url = `${URL}/bruker/loggut`
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userName)
    })
    return response
}

export async function get(url, token) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        }
    })
    return response
}

export async function post(url, token, value) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        },
        body: JSON.stringify(value)
    })
    return response
}

export async function put(url, token, value) {
    const response = await fetch(url, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        },
        body: JSON.stringify(value)
    })
    return response
}
