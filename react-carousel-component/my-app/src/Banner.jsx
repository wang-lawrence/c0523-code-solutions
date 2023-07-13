export default function Banner({ image }) {
  return (
    <div class="row align-center justify-right image">
      <img src={`/images/${image}.png`} alt={`pokemon id ${image}`} />
    </div>
  );
}
