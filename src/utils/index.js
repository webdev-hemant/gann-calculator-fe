function formatIndianRupees(number) {
  // Convert number to string to add commas
  const formattedNumber = Number(number).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return formattedNumber;
}

export { formatIndianRupees };
