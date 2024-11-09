import "./ImageRoll.css";
import ImageProducts from "../../../components/About/ImageRoll/imageproducts";
import ImageItems from "./ImageItems/ImageItems";


export default function ImageRoll() {
  return (
    <>
      <div className="related">
        <h2>Outside of Coding</h2>
      <h4 className='related__headline'>When I'm not coding, I like to spend as much time as I can away from my laptop. Most of my time is spent in the gym, going to plant shops and eating ice cream. Here is a collection of pics I have taken in the past few months. </h4>
    
      </div>
      <div className="relatedproducts">

        <div className="relatedproducts-item">
          {ImageProducts.map((item, i) => {
            return (
              <ImageItems
                key={i}
                id={item.id}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
