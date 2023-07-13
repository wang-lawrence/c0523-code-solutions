type props = {
  image: String,
};

export default function Banner({ image }: props) {
  return (
    <div class="row align-center justify-right image">
      <img src={`/images/${image}.png`} alt={`pokemon id ${image}`} />
    </div>
  );
}
