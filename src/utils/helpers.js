function sortByOrder(arr) {
  return [...arr].sort(
    (a, b) => Number(a.orderPosition) - Number(b.orderPosition),
  );
}

export { sortByOrder };
