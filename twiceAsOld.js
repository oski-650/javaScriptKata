//fatherage−x=2×(sonage−x)
//x=2×sonage−fatherage
//if x is positive then its number of years ago
//else if x is negative than it is in the future
function twiceAsOld(dadYearsOld, sonYearsOld) {
  const total = 2 * sonYearsOld - dadYearsOld
  if (total > 0){
    return total
  }
  else{
    return Math.abs(total)
  }
}
