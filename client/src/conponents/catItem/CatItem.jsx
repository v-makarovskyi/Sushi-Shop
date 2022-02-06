import "./catItem.scss";

export const CatItem = ({ item }) => {
  
  return (
    <div className="catItem">
      <img src={item.img} alt="#" />
      <span>{item.title}</span>
    </div>
  );
};
