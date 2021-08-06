function choose(array: string[]): string {
  const length: number = array.length;
  const random: number = Math.floor(Math.random() * length);
  const item = array[random];
  return item;
}

const greetings: string[] = [
  "Hello", "Hi", "Hey", "Hola"
];

for(let i: number = 0; i < 10; i++) {
  console.log(choose(greetings));
}