const getToken = () => {
    return localStorage.getItem('token');
}

const getUserLevel = () => {
    if (isAuthenticated()) {
        const user = parseJwt(getToken());
        return user.role;
    }
}

const isAuthenticated = () => {
    if (getToken() == null) {
        return false;
    } else {
        return true;
    }
}


const isAdminLogged = () => {

    if (localStorage.getItem('userType') === "admin") {
        return true;
    }
    else {
        return false;
    }


}

const getUsername = () => {
    let name = null;

    name = localStorage.getItem('userName');
    return name;


}

const getEmail = () => {
    let email = null;

    email = localStorage.getItem('email');
    return email;


}

const getAddress = () => {
    let address = null;

    address = localStorage.getItem('address');
    return address;


}


const getUserId = () => {
    let uId = null;
    const user = parseJwt(getToken());

    uId = user.id;

    return uId;
}



const parseJwt = (token) => {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

const logout = () => {
    if (isAuthenticated()) {
        localStorage.removeItem('token');
        console.log("User Logged Out")
    }
}
module.exports = {
    getToken,
    getUserLevel,
    isAuthenticated,
    isAdminLogged,
    getUserId,
    getUsername,
    getEmail,
    getAddress,
    logout
}