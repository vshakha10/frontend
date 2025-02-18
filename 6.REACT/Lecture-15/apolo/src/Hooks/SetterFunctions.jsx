export const HandleClickIncrement = () => {
  (prevItem) => {
    const newItem = [...prevItem];
    newItem[0] = { ...newItem, value: newItem[0].value + 1 };
    return newItem;
  };
};

export const HandleClickDecrement = () => {
  (prevItem) => {
    const newItem = [...prevItem];
    newItem[0] = { ...newItem, value: newItem[0].value - 1 };
    return newItem;
  };
};

export const HandleClickIncrement2 = () => {
  (prevItem) => {
    const newItem = [...prevItem];
    newItem[1] = { ...newItem, data: newItem[1].data + 1 };
    return newItem;
  };
};

export const HandleClickDecrement2 = () => {
  (prevItem) => {
    const newItem = [...prevItem];
    newItem[1] = { ...newItem, data: newItem[1].data - 1 };
    return newItem;
  };
};
