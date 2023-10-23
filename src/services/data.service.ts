import apiService from "./api.service";

const dataService = {
  get: async (dataType: string) => {
    const { data } = await apiService.get(dataType);
    return data;
  },
};

export default dataService;