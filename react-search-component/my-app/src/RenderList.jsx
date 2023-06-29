export default function RenderList ({list}) {
  const quotes = list.map((quote, index) => <li key={index}>{quote}</li>);
  return list.length > 0 ? <ul>{quotes}</ul> : <ul><li className="no-bullet">No items match the filter.</li></ul>
}
