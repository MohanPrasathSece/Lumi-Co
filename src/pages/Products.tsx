import { useState } from "react";
import { Button } from "@/components/ui/button";

// Import all product images
import earring1 from "@/assets/products/earring-1.jpg";
import earring2 from "@/assets/products/earring-2.jpg";
import earring3 from "@/assets/products/earring-3.jpg";
import earring4 from "@/assets/products/earring-4.jpg";
import earring5 from "@/assets/products/earring-5.jpg";
import necklace1 from "@/assets/products/necklace-1.jpg";
import necklace2 from "@/assets/products/necklace-2.jpg";
import necklace3 from "@/assets/products/necklace-3.jpg";
import necklace4 from "@/assets/products/necklace-4.jpg";
import necklace5 from "@/assets/products/necklace-5.jpg";
import bracelet1 from "@/assets/products/bracelet-1.jpg";
import bracelet2 from "@/assets/products/bracelet-2.jpg";
import bracelet3 from "@/assets/products/bracelet-3.jpg";
import bracelet4 from "@/assets/products/bracelet-4.jpg";
import bracelet5 from "@/assets/products/bracelet-5.jpg";
import ring1 from "@/assets/products/ring-1.jpg";
import ring2 from "@/assets/products/ring-2.jpg";
import ring3 from "@/assets/products/ring-3.jpg";
import ring4 from "@/assets/products/ring-4.jpg";
import ring5 from "@/assets/products/ring-5.jpg";
import anklet1 from "@/assets/products/anklet-1.jpg";
import anklet2 from "@/assets/products/anklet-2.jpg";
import anklet3 from "@/assets/products/anklet-3.jpg";
import anklet4 from "@/assets/products/anklet-4.jpg";
import anklet5 from "@/assets/products/anklet-5.jpg";
import set1 from "@/assets/products/set-1.jpg";
import set2 from "@/assets/products/set-2.jpg";
import set3 from "@/assets/products/set-3.jpg";
import set4 from "@/assets/products/set-4.jpg";
import set5 from "@/assets/products/set-5.jpg";

type Category = "All" | "Earrings" | "Necklaces" | "Bracelets" | "Rings" | "Anklets" | "Jewelry Sets";

interface Product {
  id: number;
  name: string;
  price: string;
  category: Category;
  image: string;
}

const products: Product[] = [
  // Earrings
  { id: 1, name: "Teardrop Elegance", price: "₹3,499", category: "Earrings", image: earring1 },
  { id: 2, name: "Crystal Chandelier", price: "₹5,999", category: "Earrings", image: earring2 },
  { id: 3, name: "Diamond Huggie Hoops", price: "₹4,299", category: "Earrings", image: earring3 },
  { id: 4, name: "Pearl Drops", price: "₹3,799", category: "Earrings", image: earring4 },
  { id: 5, name: "Geometric Studs", price: "₹2,799", category: "Earrings", image: earring5 },
  
  // Necklaces
  { id: 6, name: "Engraved Bar Necklace", price: "₹4,499", category: "Necklaces", image: necklace1 },
  { id: 7, name: "Gemstone Choker", price: "₹5,299", category: "Necklaces", image: necklace2 },
  { id: 8, name: "Y-Shape Lariat", price: "₹4,799", category: "Necklaces", image: necklace3 },
  { id: 9, name: "Infinity Symbol", price: "₹3,999", category: "Necklaces", image: necklace4 },
  { id: 10, name: "Diamond Heart Pendant", price: "₹5,499", category: "Necklaces", image: necklace5 },
  
  // Bracelets
  { id: 11, name: "Tennis Bracelet", price: "₹6,999", category: "Bracelets", image: bracelet1 },
  { id: 12, name: "Engraved Bangle", price: "₹4,999", category: "Bracelets", image: bracelet2 },
  { id: 13, name: "Charm Bracelet", price: "₹5,799", category: "Bracelets", image: bracelet3 },
  { id: 14, name: "Geometric Cuff", price: "₹4,299", category: "Bracelets", image: bracelet4 },
  { id: 15, name: "Beaded Gemstone", price: "₹3,499", category: "Bracelets", image: bracelet5 },
  
  // Rings
  { id: 16, name: "Solitaire Statement", price: "₹8,999", category: "Rings", image: ring1 },
  { id: 17, name: "Stackable Trio", price: "₹4,799", category: "Rings", image: ring2 },
  { id: 18, name: "Pavé Band", price: "₹5,299", category: "Rings", image: ring3 },
  { id: 19, name: "Oval Cocktail Ring", price: "₹6,499", category: "Rings", image: ring4 },
  { id: 20, name: "Delicate Midi Ring", price: "₹2,499", category: "Rings", image: ring5 },
  
  // Anklets
  { id: 21, name: "Charm Anklet", price: "₹2,799", category: "Anklets", image: anklet1 },
  { id: 22, name: "Crystal Chain", price: "₹3,299", category: "Anklets", image: anklet2 },
  { id: 23, name: "Layered Bohemian", price: "₹3,799", category: "Anklets", image: anklet3 },
  { id: 24, name: "Coin Charm Anklet", price: "₹3,499", category: "Anklets", image: anklet4 },
  { id: 25, name: "Minimalist Single Gem", price: "₹2,299", category: "Anklets", image: anklet5 },
  
  // Jewelry Sets
  { id: 26, name: "Classic Matching Set", price: "₹9,999", category: "Jewelry Sets", image: set1 },
  { id: 27, name: "Bridal Collection", price: "₹14,999", category: "Jewelry Sets", image: set2 },
  { id: 28, name: "Pearl Elegance Set", price: "₹11,499", category: "Jewelry Sets", image: set3 },
  { id: 29, name: "Layered Statement Set", price: "₹12,999", category: "Jewelry Sets", image: set4 },
  { id: 30, name: "Delicate Romance Set", price: "₹10,499", category: "Jewelry Sets", image: set5 },
];

const categories: Category[] = ["All", "Earrings", "Necklaces", "Bracelets", "Rings", "Anklets", "Jewelry Sets"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (productName: string) => {
    const message = encodeURIComponent(
      `Hi, I'd like to order the ${productName} from Lumi & Co.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-champagne">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient-rose">Collection</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover timeless pieces crafted with love, designed to celebrate your unique beauty.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b border-border/50 sticky top-20 md:top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-rose hover:shadow-glow transition-all duration-500"
                    : "border-primary/30 text-foreground hover:border-primary hover:bg-accent transition-all duration-300"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow hover-lift transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-playfair text-lg font-medium mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.category}
                  </p>
                  <p className="text-primary text-xl font-medium mb-4">
                    {product.price}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-gradient-rose hover:text-primary-foreground hover:border-transparent transition-all duration-300"
                    onClick={() => handleAddToCart(product.name)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
