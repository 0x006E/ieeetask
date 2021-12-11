import "./css/CategoryComponent.css";
const CategoryComponent = ({ title, items }) => {
  return (
    <div className="links-container">
      <div className="heading">{title}</div>
      <div className="items">
        {items &&
          items.map((item, index) => (
            <span key={index} className="href">
              {item}
            </span>
          ))}
      </div>
    </div>
  );
};
export default CategoryComponent;
