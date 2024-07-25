import { useEffect, useState } from "react";

function useLocalstorage(initialVal, key) {
  const [value, setValue] = useState(function () {
    const store = localStorage.getItem(key);
    return store ? JSON.parse(store) : initialVal; //early return
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}

export default useLocalstorage;
