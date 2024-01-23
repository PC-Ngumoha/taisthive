

const ItemsList = ({ items }: {
  items: Array<string>,
  [otherProps: string]: any
}) => {
  return (
    <>
      {
        items.map((item: string, index: number) => {
          return (
            <li key={index}>{item}</li>
          );
        })
      }
    </>
  );
};

export default ItemsList;