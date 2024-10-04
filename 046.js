const sum = (...args) => {
    const prm = [...args];
    let total = 0;
    for (let i = 0; i < prm.length; i++) {
      total += prm[i];
    }
    return total;
  }