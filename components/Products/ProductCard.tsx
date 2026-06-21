import { Product } from "@/types/product";
import { getImagePath } from "@/lib/utils";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }: { product: Product }) => {
  const imagePath = product.images[0] || "/images/products/placeholder.jpg";

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-stroke bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl dark:border-dark-3 dark:bg-dark dark:shadow-card">
      <Link href={`/products/${product.category.toLowerCase()}/${product.id}`}>
        <div className="relative h-72 overflow-hidden bg-gray-light dark:bg-dark-2 flex items-center justify-center p-4">
          <div
            className="h-full w-full bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `url('${getImagePath(imagePath)}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {product.subcategory}
            </span>
            <span className="text-sm text-body-color dark:text-body-color-dark">
              {product.brand}
            </span>
          </div>

          <h3 className="mb-3 text-xl font-bold text-black transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
            {product.name}
          </h3>

          <p className="mb-4 line-clamp-2 text-base text-body-color dark:text-body-color-dark">
            {product.description}
          </p>

          <div className="flex items-center justify-end">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
