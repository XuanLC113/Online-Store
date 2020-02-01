import { IProductData, ICart } from "../data/Interfaces";

function openDB(): IDBOpenDBRequest {
  if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB");
  }

  let db;
  let request = indexedDB.open("cart_db", 1);

  request.onupgradeneeded = (e: any) => {
    db = e.target.result;
    db.createObjectStore("cart");
  };
  return request;
}

function modifyItem(product: IProductData, color: string, count: number): void {
  let request = openDB();
  request.onsuccess = () => {
    let db = request.result;
    let tx = db.transaction(["cart"], "readwrite");
    let store = tx.objectStore("cart");
    let updateRequest = store.get(product.sku + color);
    updateRequest.onerror = () => {
      console.log("Error updating cart");
    };
    updateRequest.onsuccess = (e: any) => {
      if (e.target.result == null) {
        let item: ICart = { product: product, color: color, qty: 1 };
        store.put(item, product.sku + color);
      } else {
        let data: ICart = e.target.result;
        data.qty += count;
        store.put(data, product.sku + color);
      }
    };
  };
}

function deleteItem(product: IProductData, color: string): void {
  let request = openDB();
  request.onsuccess = () => {
    let db = request.result;
    let deleteRequest = db
      .transaction(["cart"], "readwrite")
      .objectStore("cart")
      .delete(product.sku + color);
    deleteRequest.onerror = e => {
      console.log(e);
    };
  };
}

export { openDB, modifyItem, deleteItem };
