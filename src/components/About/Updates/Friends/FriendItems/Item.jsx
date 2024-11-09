import './item.css'

export default function Item(props) {
  return (
    <>
      <div className="friend_item">
        <img className="ind-image" src={props.image} alt="" />
        <p className='individual_name'>{props.name}</p>
      </div>
    </>
  );
}
