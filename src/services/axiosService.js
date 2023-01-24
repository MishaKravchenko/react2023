import axios from "axios";

import {baseURL} from "../configs_constants";

const axiosService = axios.create({baseURL});

export {
    axiosService
}