/*
Copyright (C) 2024 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
*/

export default {
  async get(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
};
