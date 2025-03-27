import { Item } from "@/models/dataTypes";

// Create an array of items that conforms to the interface
const itemsArray: Item[] = Array.from({ length: 300 }, (_, i) => ({
  name: `Element ${i + 1}`,
  value: i + 1, // Add the required 'value' property
}));
export { itemsArray };
