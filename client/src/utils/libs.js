export function prepareEditPayloadForSending(editedData, savedData) {
  const payload = { id: editedData.id };

  Object.keys(editedData).forEach((key) => {
    if (editedData[key] !== savedData[key]) {
      payload[key] = editedData[key];
    }
  });

  return payload;
}

export function prepareCreatedPayloadForSending(createdData) {
  return Object.keys(createdData).reduce((acc, key) => {
    if (createdData[key]) acc[key] = createdData[key];
    return acc;
  }, {});
}
