import axios from "axios";

const apikey = process.env.NEXT_PUBLIC_REACT_BASE_URL

export const getDriverList = async() => {
    const driver = await axios.get(`${apikey}drivers?session_key=9158`)
    //console.log(apikey)
    console.log({driver})
    return driver
}
