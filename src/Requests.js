
export async function fetchLogin(userName, password) {
    const url = "http://localhost:8080/bruker/logginn"
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