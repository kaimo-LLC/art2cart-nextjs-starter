import axios from "axios";

class Art2CartApi {
  api = axios.create({
    baseURL: "https://api.art2cart.com",
    timeout: 10000,
    headers: {
      Authorization: process.env.NEXT_PUBLIC_ART2CART,
    },
  });

  getCatalog(cursor?: number, limit?: number) {
    let path = "/catalog";
    if (cursor || limit) {
      path += "?";
    }
    if (cursor) {
      path += `cursor=${cursor}`;
    }
    if (limit) {
      path += `limit=${limit}`;
    }
    return this.api
      .get(path)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log("error", error);
        return [];
      });
  }

  getPrinters(cursor?: number, limit?: number) {
    let path = "/printer";
    if (cursor || limit) {
      path += "?";
    }
    if (cursor) {
      path += `cursor=${cursor}`;
    }
    if (limit) {
      path += `limit=${limit}`;
    }
    return this.api
      .get(path)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log("error", error);
        return [];
      });
  }

  getChannels(cursor?: number, limit?: number) {
    let path = "/channel";
    if (cursor || limit) {
      path += "?";
    }
    if (cursor) {
      path += `cursor=${cursor}`;
    }
    if (limit) {
      path += `limit=${limit}`;
    }
    return this.api
      .get(path)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log("error", error);
        return [];
      });
  }

  getDesigns(cursor?: number, limit?: number) {
    let path = "/design";
    if (cursor || limit) {
      path += "?";
    }
    if (cursor) {
      path += `cursor=${cursor}`;
    }
    if (limit) {
      path += `limit=${limit}`;
    }
    return this.api
      .get(path)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log("error", error);
        return [];
      });
  }

  getImposition(cursor?: number, limit?: number) {
    let path = "/imposition";
    if (cursor || limit) {
      path += "?";
    }
    if (cursor) {
      path += `cursor=${cursor}`;
    }
    if (limit) {
      path += `limit=${limit}`;
    }
    return this.api
      .get(path)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log("error", error);
        return [];
      });
  }

  getPersonalizationCategories(cursor?: number, limit?: number) {
    let path = "/personalize/category";
    if (cursor || limit) {
      path += "?";
    }
    if (cursor) {
      path += `cursor=${cursor}`;
    }
    if (limit) {
      path += `limit=${limit}`;
    }
    return this.api
      .get(path)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log("error", error);
        return [];
      });
  }

  getJobs(cursor?: number, limit?: number) {
    let path = "/job";
    if (cursor || limit) {
      path += "?";
    }
    if (cursor) {
      path += `cursor=${cursor}`;
    }
    if (limit) {
      path += `limit=${limit}`;
    }
    return this.api
      .get(path)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log("error", error);
        return [];
      });
  }

  getListing(cursor?: number, limit?: number) {
    let path = "/listing";
    if (cursor || limit) {
      path += "?";
    }
    if (cursor) {
      path += `cursor=${cursor}`;
    }
    if (limit) {
      path += `limit=${limit}`;
    }
    return this.api
      .get(path)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log("error", error);
        return [];
      });
  }
}

const api = new Art2CartApi();

export default api;
