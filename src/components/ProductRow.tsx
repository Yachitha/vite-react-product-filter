interface Product {
  name: string;
  price: string;
  stocked: boolean;
}

export default function ProductRow({ product }: { product: Product }) {
  return (
    <tr>
      <td>
        {product.stocked ? (
          product.name
        ) : (
          <span style={{ color: "red" }}>{product.name}</span>
        )}
      </td>
      <td>{product.price}</td>
    </tr>
  );
}
