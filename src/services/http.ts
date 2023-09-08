import { cookies } from "next/headers";

import {
  STORAGE_KEYS,
  BACKEND_KEYS,
  ADD_SEARCH_PARAMS,
} from "@/constants/app-keys.const";

class HttpService {
  private accessToken: string = "";
  private baseUrl: string = "";
  private countPageOnPage: string = "16";

  constructor() {
    this.baseUrl = process.env.BACKEND_URL || "";
    this.countPageOnPage = process.env.COUNT_PRODUCT_ON_PAGE || "16";

    this.setAuthHeader(this.readTokenFromLocalStorage());
  }

  private readTokenFromLocalStorage(): string {
    try {
      const data: string = "";
      // const cookieStore = cookies();

      // cookies().set(STORAGE_KEYS.JWT_TOKEN_AUTH, "token", { secure: true });

      // const dataCoock = cookieStore.get(STORAGE_KEYS.JWT_TOKEN_AUTH);
      // console.log("🚀 ~ dataCoock:", dataCoock);

      // const data: string =
      //   localStorage.getItem(STORAGE_KEYS.JWT_TOKEN_AUTH) || "";
      return data;
    } catch {
      return "";
    }
  }

  private async saveTokenToLocalStorage(token: string) {
    // localStorage.setItem(STORAGE_KEYS.JWT_TOKEN_AUTH, token);
    // cookies().set(STORAGE_KEYS.JWT_TOKEN_AUTH, "token", { secure: true });
  }

  setAuthHeader = async (accessToken: string) => {
    this.accessToken = accessToken;
    await this.saveTokenToLocalStorage(this.accessToken);
  };

  async getProducts({ page = 1 }: { page: number }): Promise<IResponseProduct> {
    // &pagination[pageSize]=${this.countPageOnPage}
    // pagination[page]=${page}

    let url = `${this.baseUrl}${BACKEND_KEYS.PRODUCTS}`;
    url += `?${ADD_SEARCH_PARAMS["product.data"]}`;
    url += `&pagination[pageSize]=${this.countPageOnPage}`;
    url += `&pagination[page]=${page}`;

    const res = await fetch(url);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
}
const httpServices = new HttpService();

export default httpServices;
