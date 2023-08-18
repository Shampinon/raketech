import axios from "axios";
import { setupCache } from 'axios-cache-interceptor';
import { config } from "../../const/config";

export const client = setupCache(axios.create({
    baseURL: config.apiUrl,
}));
