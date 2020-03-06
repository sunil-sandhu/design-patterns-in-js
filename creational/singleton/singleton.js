class API {
  async getData(data) {
    console.log("fetching data from website API for", data);

    const fictionalApiResponse = {
      status: 200,
      data: {
        whatever: "your",
        api: "data looks like"
      }
    };
    return fictionalApiResponse;
  }
  async postData(data) {
    console.log("posting data to website for", data);
    return true;
  }
}

const api = new API();

api.getData({ name: "Sunil" });
api.postData({ message: "Hi!" });
