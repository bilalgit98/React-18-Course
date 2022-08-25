const NewsListItem = (props) => {
  return (
    <div>
      <h3> {props.item.title}</h3>
      <div>{props.item.feed}</div>
    </div>
  );
};

export default NewsListItem;
