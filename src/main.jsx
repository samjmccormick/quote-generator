async function fetchData() {
  try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      console.log(data);
  } catch (err) {
      console.log(err);
  }
};

