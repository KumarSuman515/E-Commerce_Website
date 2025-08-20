import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Product {
  slug: string;
  name: string;
  brand: string;
  price: number;
  stock: number;
  rating: number;
  images: string[];
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow rounded-2xl overflow-hidden">
      <CardHeader className="p-0">
        <Link href={`/products/${product.slug}`} className="block">
          <Image
            src={product.images?.[0] || "/placeholder.png"}
            alt={product.name}
            width={300}
            height={300}
            priority
            className="w-full h-60 object-cover"
          />
        </Link>
      </CardHeader>

      <CardContent className="p-4 grid gap-2">
        <p className="text-xs text-gray-500">{product.brand}</p>

        <Link href={`/products/${product.slug}`}>
          <h2 className="text-sm font-medium hover:underline line-clamp-2">
            {product.name}
          </h2>
        </Link>

        <div className="flex items-center justify-between text-sm">
          <span className="text-yellow-500">⭐ {product.rating}</span>
          {product.stock > 0 ? (
            <span className="font-bold text-green-600">${product.price}</span>
          ) : (
            <span className="text-red-600 font-semibold">Out of Stock</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
