import CategoryComponent from "./CategoryComponent";
import "./css/LinksComponent.css";
import LogoComponent from "./LogoComponent";
const LinksComponent = () => {
  return (
    <div className="links">
      <div className="logo-header">
        <LogoComponent />
        <div className="description">
          Design amazing digital experiences that create more happy in the
          world.
        </div>
      </div>
      <div className="categories">
        {Array(5)
          .fill(0)
          .map((i, index) => (
            <CategoryComponent
              key={index}
              title={"Product"}
              items={[
                "Overview",
                "Features",
                "Solutions",
                "Tutorials",
                "Pricing",
                "Releases",
              ]}
            />
          ))}
      </div>
    </div>
  );
};
export default LinksComponent;
