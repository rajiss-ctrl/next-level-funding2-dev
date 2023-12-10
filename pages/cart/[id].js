// pages/items/[id].js
import { PriceLists } from '@/lib/data';
import { useRouter } from 'next/router';

const CartDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch data based on the id
  // Example: You might fetch data from an API
  // const itemData = fetchItemData(id);
  const selectedItem = PriceLists.find(item => item.id === parseInt(id, 10));
  return (
    <div>
      <h1>Item Detail</h1>
      <p>ID: {id}</p>
      {/* Render item details using fetched data */}


      {selectedItem ? (
        <div>
          <p>ID: {selectedItem.id}</p>
          <p>Name: {selectedItem.pack}</p>
          {/* Render other details of the selected item */}
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
};

export default CartDetails;
