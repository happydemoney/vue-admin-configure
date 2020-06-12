/**
 * sleep during time
 * @param {Number} time
 */
export async function sleep(time: number) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
