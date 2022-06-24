import { Asset } from "./../interfaceTS/interface";

export const Products: Asset[] = [
  {
    id: 1,
    name: "sumsung s10",
    price: 1000,
    description: "sumsung s10 is a smart phone",
    image:
      "https://ant-shop.ru/image/cache/catalog/samsung/galaxy-s10-plus/samsung-galaxy-s10-plus-akvamarin-1-600x600.jpg",
    category: "phone",
    color: "black",
    comment: [],
    years: 2020,
    sale: 30,
    count: 1,
  },
  {
    id: 2,
    name: "Nike T-Shirt",
    price: 100,
    description: "Nike T-Shirt is a buatiful T-Shirt",
    image:
      "https://images.bike24.net/i/mb/e1/e2/4d/328978-00-d-689172-861094.jpg",
    category: "clothing",
    color: "blue",
    comment: [],
    years: 2020,
    sale: 30,
    count: 1,
  },
  {
    id: 3,
    name: "Trousers addidas",
    price: 140,
    description: "Trousers addidas is a buatiful T-Shirt",
    image:
      "https://static3.nordic.pictures/4979478-thickbox_default/trousers-adidas-tiro-15-m-m64042.jpg",
    category: "clothing",
    color: "black",
    comment: [],
    years: 2010,
    sale: 40,
    count: 1,
  },
  {
    id: 4,
    name: "In search of Alaska",
    price: 1300,
    description: "In search of Alaska is a buatiful book",
    image:
      "https://avatars.mds.yandex.net/i?id=462ef0e1fe83190ddf0294bcbdd9bf47-5916170-images-thumbs&n=13",
    category: "book",
    color: "purple",
    comment: [],
    years: 2013,
    sale: 9,
    count: 1,
  },
  {
    id: 5,
    name: "Nike T-Shirt",
    price: 100,
    description: "Nike T-Shirt is a buatiful T-Shirt",
    image:
      "https://images.by.prom.st/97009142_w640_h640_futbolka-ace-zhenskaya.jpg",
    category: "clothing",
    color: "blue",
    comment: [],
    years: 2020,
    sale: 30,
    count: 1,
  },
  {
    id: 6,
    name: "Trousers addidas",
    price: 140,
    description: "Trousers addidas is a buatiful T-Shirt",
    image:
      "https://ae01.alicdn.com/kf/HTB1adVYq5CYBuNkHFCcq6AHtVXay/Korting-koop-vrouwen-tops-korte-mouw-meisjes-tees-2015-fashion-ontwerp-vrouwelijke-t-shirt-nieuwe-collectie.jpg",
    category: "clothing",
    color: "black",
    comment: [],
    years: 2010,
    sale: 40,
    count: 1,
  },
  {
    id: 7,
    name: "Nike T-Shirt",
    price: 100,
    description: "Nike T-Shirt is a buatiful T-Shirt",
    image: "https://ae01.alicdn.com/kf/HTB1AcRKPXXXXXcpaFXXq6xXFXXXg/-.jpg",
    category: "clothing",
    color: "blue",
    comment: [],
    years: 2020,
    sale: 30,
    count: 1,
  },
  {
    id: 8,
    name: "Trousers addidas",
    price: 140,
    description: "Trousers addidas is a buatiful T-Shirt",
    image:
      "https://ae01.alicdn.com/kf/HTB1seTmXOnrK1RjSsziq6xptpXaG/2018-new-unicorn-T-shirt-women-s-T-shirt-short-sleeved-T-shirt-O-neck-shirt.jpg",
    category: "clothing",
    color: "black",
    comment: [],
    years: 2010,
    sale: 40,
    count: 1,
  },
];

export interface checkboxTS {
  color: string;
  checked: boolean;
}
export const checkbox: checkboxTS[] = [
  { color: "black", checked: false },
  { color: "purple", checked: false },
  { color: "blue", checked: false },
];
