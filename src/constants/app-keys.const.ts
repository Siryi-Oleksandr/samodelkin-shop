// Local storage keys
export const STORAGE_KEYS = {
  JWT_TOKEN_AUTH: "SAMODELKIN_JWT_TOKEN_AUTH",
  // JWT_TOKEN_INSTRUCTOR: "SAMODELKIN_JWT_TOKEN_INSTRUCTOR",
  // ADDRESS: "ADDRESS",
  // TOKEN: "TOKEN",
};

// Backend Routes
export const BACKEND_ROUTES = {
  LOGIN: "/api/auth/local",
  CURRENT_USER: "/api/users/me",
  REGISTER: "/api/auth/local/register",
  // LOGOUT: "/user/logout",
  CATEGORIES: "/api/categories",
  PRODUCTS: "/api/products",
  COLORS: "/api/colors",
  DELIVERY_SERVICES: "/api/delivery-services",
  ORDERS: "/api/orders",
};

// Frontend routes
export const FRONTEND_ROUTES = {
  HOME: "/",
  PRODUCTS: "/",
  PRODUCT: "/product",
  CART: "/cart",
  CHECKOUT: "/checkout",
};

export const ADD_SEARCH_PARAMS = {
  "order.data": {
    "populate[0]": "products",
    "populate[1]": "products.product.*",
    "populate[2]": "products.product.images.*",
    "populate[3]": "adresDelivery",
    "populate[4]": "adresDelivery.delivery_service",
  },
  "product.data": {
    "populate[categories]": "*",
    "populate[images]": "*",
    "populate[propertys][populate]": "*",
  },
};
