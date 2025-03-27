// Define an interface for an individual item
interface Item {
  name: string;
  value: number;
}

// Define an interface for the state
interface SelectItemState {
  items: string[];
}

// Export the interfaces
export type { Item, SelectItemState };
