const formatString = function (string) {
  const amount = string.split(" ").length;
    let res
    if (string.length >= 40) {
        let newStr = string.substring(0, 40) + "..."
        res = newStr
    } else {
        res = string
    }
    return res
  };
  
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // повернеться оригінальний рядок
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // повернеться форматований рядок
  
  console.log(formatString('Curabitur ligula sapien.'));
  // повернеться оригінальний рядок
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // повернеться форматований рядок