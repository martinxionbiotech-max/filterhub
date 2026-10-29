// Typed access to the canonical SKU dataset (src/data/products.json).
// This JSON is the single source of truth; data.filterhub/data/products.json is the
// byte-identical sync copy (see scripts/generate-products.py).

import raw from './products.json';

export interface OEReference {
  oe_number: string;
  brand: string | null;
  equipment_type: string | null;
  data_status: string;
}

export interface Spec {
  spec_key: string;
  spec_value: string;
  unit: string | null;
  data_status: string;
}

export interface Material {
  part: string;
  material_value: string;
  data_status: string;
}

export interface FilterMedia {
  type: string;
  efficiency_class: string | null;
  grammage: string | null;
  data_status: string;
}

export interface Application {
  code: string;
  medium: string;
  data_status: string;
}

export interface Moq {
  moq_value: number | null;
  moq_unit: string | null;
  data_status: string;
}

export interface Product {
  sku: string;
  name: string;
  category: string;
  company: string;
  description: string | null;
  source_url: string;
  data_status: string;
  efficiency_class: string | null;
  oe_reference: OEReference[];
  spec: Spec[];
  material: Material[];
  filter_media: FilterMedia[];
  application: Application[];
  moq: Moq;
  subcategory?: string;
}

interface CategoryMeta {
  slug: string;
  name: string;
  nameZh: string;
}

interface ProductsMeta {
  description: string;
  crawl_date: string;
  sources: string[];
  data_status_system: string[];
  categories: Record<string, CategoryMeta>;
  note: string;
}

interface ProductsFile {
  _meta: ProductsMeta;
  products: Product[];
}

const data = raw as ProductsFile;

export const products: Product[] = data.products;
export const productsMeta: ProductsMeta = data._meta;

/** Map a category code to its 13-main-category slug (for URL building). */
export function categorySlug(code: string): string {
  return productsMeta.categories[code]?.slug ?? code;
}

/** Reverse lookup: category slug (kebab-case) → category code (snake_case). */
export function codeFromSlug(slug: string): string {
  for (const [code, meta] of Object.entries(productsMeta.categories)) {
    if (meta.slug === slug) return code;
  }
  return slug;
}

/** Map a category code to its display name. */
export function categoryName(code: string): string {
  return productsMeta.categories[code]?.name ?? code;
}

/** SKUs belonging to one category code. */
export function productsByCategory(code: string): Product[] {
  return products.filter((p) => p.category === code);
}

/** Number of SKUs per category code (single data source for the homepage count). */
export function categoryCount(code: string): number {
  return productsByCategory(code).length;
}

/** Total SKU count. */
export const totalProducts = products.length;

/** Count of categories (of 13) covered by at least one SKU. */
export const coveredCategories = Object.keys(productsMeta.categories).filter(
  (code) => productsByCategory(code).length > 0
).length;

/** URL-safe slug from a SKU/OE number. */
export function skuSlug(sku: string): string {
  return sku.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
