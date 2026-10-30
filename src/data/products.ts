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

// Note: `products[].category` now stores the kebab-case slug directly (e.g.
// `air-filters`), matching `categories[].slug`. The `_meta.categories` map keys are
// legacy snake_case codes (`air_filter`); all helpers below therefore resolve by
// kebab slug first and fall back to a snake_code key lookup for robustness.

function metaBySlug(slug: string): CategoryMeta | undefined {
  for (const meta of Object.values(productsMeta.categories)) {
    if (meta.slug === slug) return meta;
  }
  return undefined;
}

/** Map a category code (snake) or slug (kebab) to its kebab slug (for URL building). */
export function categorySlug(codeOrSlug: string): string {
  return productsMeta.categories[codeOrSlug]?.slug ?? codeOrSlug;
}

/**
 * Resolve a category slug to the value stored on `products[].category`.
 * Since the category field is now the kebab slug itself, this is an identity
 * mapping; retained as a named helper so the category page reads clearly.
 */
export function codeFromSlug(slug: string): string {
  return slug;
}

/** Map a category code (snake) or slug (kebab) to its display name. */
export function categoryName(codeOrSlug: string): string {
  const direct = productsMeta.categories[codeOrSlug];
  if (direct) return direct.name;
  return metaBySlug(codeOrSlug)?.name ?? codeOrSlug;
}

/** SKUs belonging to one category slug (kebab). */
export function productsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

/** Look up a product by its exact SKU code (case-sensitive). */
export function productBySku(sku: string): Product | undefined {
  return products.find((p) => p.sku === sku);
}

/** Number of SKUs per category slug (single data source for the homepage count). */
export function categoryCount(slug: string): number {
  return productsByCategory(slug).length;
}

/** Total SKU count. */
export const totalProducts = products.length;

/** Count of categories (of 13) covered by at least one SKU. */
export const coveredCategories = Object.values(productsMeta.categories).filter(
  (meta) => productsByCategory(meta.slug).length > 0
).length;

/** URL-safe slug from a SKU/OE number. */
export function skuSlug(sku: string): string {
  return sku.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
