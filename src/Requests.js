
export async function fetchLogin(userName, password) {
    const url = `http://localhost:8080/bruker/logginn`
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
    const url = `http://localhost:8080/bruker/loggut`
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

export async function get(url) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json'
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
