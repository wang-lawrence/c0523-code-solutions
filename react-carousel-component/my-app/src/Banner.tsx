type Props = {
  image: string;
};

export default function Banner({ image }: Props) {
  return (
    <div className="row align-center justify-right image">
      <img src={`/images/${image}.png`} alt={`pokemon id ${image}`} />
    </div>
  );
}
