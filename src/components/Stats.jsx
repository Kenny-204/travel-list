export function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Start adding items to your packing lists 🚀</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything! Ready to go ✈"
          : `

        💼 You have ${numItems} items on your list, and you have packed
        ${numPacked} (${percent}%)
`}
      </em>
    </footer>
  );
}
