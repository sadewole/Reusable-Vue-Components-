export function useId(size = 3): string {
  let randomId = "";
  const dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < size; i++) {
    randomId += dictionary.charAt(
      Math.floor(Math.random() * dictionary.length)
    );
  }

  return randomId;
}
