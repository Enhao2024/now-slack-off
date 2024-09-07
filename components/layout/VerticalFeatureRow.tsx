interface Props {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

function VerticalFeatureRow({
  title, description, image, imageAlt, reverse,
}: Props) {
  return (
    <div className={`${reverse ? 'flex-row-reverse' : ''} mt-20 flex flex-wrap items-center justify-evenly`}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
        <div className="mt-6 text-xl leading-9 text-left">{description}</div>
      </div>

      <div className="w-full flex justify-center p-6 sm:w-1/2">
        <div className="avatar">
          <div className="w-64 rounded-full">
            <img src={image} alt={imageAlt} />
          </div>
        </div>
      </div>
    </div>
  );
}

VerticalFeatureRow.defaultProps = {
  reverse: false,
};

export default VerticalFeatureRow;
