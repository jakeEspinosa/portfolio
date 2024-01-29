/*
Copyright (C) 2024 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
*/

/**
 * @function get
 * @description performs a GET request to the provided URL. This function works with
 * query parameters or path parameters.
 * @param {string} url
 */
export default {
  async get(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
};
