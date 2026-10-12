export default function About() {
  const fibonacci = (n: number): number => {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  return (
    <div>
      <h1 className="text-3xl">About</h1>
      {fibonacci(45)}
    </div>
  );
}
