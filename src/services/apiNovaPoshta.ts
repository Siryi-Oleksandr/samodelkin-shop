class ApiNovaPoshta {
  private KEY = "358c4c503ec9f8763e856bf03d874b0a";

  public getRequestSearchCity = (nameCity: string) => {
    return {
      apiKey: this.KEY,
      modelName: "Address",
      calledMethod: "searchSettlements",
      methodProperties: {
        CityName: nameCity,
        Limit: "10",
        Page: "1",
      },
    };
  };

  //   public async searchCity(nameCity: string) {
  //     const result = await axios.post(URL, this.getRequestSearchCity(nameCity));

  //     return result;
  //   }
}

const apiNovaPoshta = new ApiNovaPoshta();

export default apiNovaPoshta;
