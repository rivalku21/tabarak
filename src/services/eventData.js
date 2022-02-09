import BaseService from "./baseService";
import API from '../config/rest';

const saveData = (saveData) => {
    return BaseService.post(API.EVENT, saveData);
}

const getAllData = () => {
    return BaseService.get(API.EVENT);
}

const getDataId = (id) => {
    console.log(BaseService.get(API.FILEDATA(id)));
    return BaseService.get(API.FILEDATA(id));
}

export default {saveData, getAllData, getDataId};