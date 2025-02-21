declare global {
  interface Window {
    initialData: {
      itemsPerPage: number;
      products: any[];
    };
  }
}

export {};
