import "./ImageItems.css";

export default function ImageItems({ image, id }) {
  return (
    <>
      <div className="item1">
          <img className="individual-image" src={image} alt="" />
      </div>
    </>
  );
}