export enum Provider {
  Udemy = "https://www.udemy.com/",
  Coursera = "https://www.coursera.org/",
}

export function RandomProvider(): Provider {
  const directions = Object.values(Provider);
  const randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
}