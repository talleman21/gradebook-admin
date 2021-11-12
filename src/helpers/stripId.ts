export const stripId = (data: { id?: string }): {} => {
  if (data.hasOwnProperty("id")) {
    delete data.id;
  }
  return data;
};
