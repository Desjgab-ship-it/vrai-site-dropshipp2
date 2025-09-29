import { z } from "zod";

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number; // Exchange rate relative to USD
  isZeroDecimal: boolean; // Currencies like JPY don't use fractional units
}

export const supportedCurrencies: Currency[] = [
  { code: "USD", symbol: "$", name: "US Dollar", rate: 1.0, isZeroDecimal: false },
  { code: "EUR", symbol: "€", name: "Euro", rate: 0.85, isZeroDecimal: false },
  { code: "GBP", symbol: "£", name: "British Pound", rate: 0.73, isZeroDecimal: false },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar", rate: 1.25, isZeroDecimal: false },
  { code: "AUD", symbol: "A$", name: "Australian Dollar", rate: 1.35, isZeroDecimal: false },
  { code: "JPY", symbol: "¥", name: "Japanese Yen", rate: 110.0, isZeroDecimal: true },
  { code: "CHF", symbol: "Fr", name: "Swiss Franc", rate: 0.88, isZeroDecimal: false },
  { code: "SEK", symbol: "kr", name: "Swedish Krona", rate: 9.75, isZeroDecimal: false },
  { code: "NOK", symbol: "kr", name: "Norwegian Krone", rate: 8.85, isZeroDecimal: false },
  { code: "DKK", symbol: "kr", name: "Danish Krone", rate: 6.35, isZeroDecimal: false },
];

// Create currency lookup map for fast access
export const currencyMap = new Map(
  supportedCurrencies.map(currency => [currency.code, currency])
);

// Zod enum for strict validation
export const currencyCodeSchema = z.enum(
  supportedCurrencies.map(c => c.code) as [string, ...string[]]
);

export type CurrencyCode = z.infer<typeof currencyCodeSchema>;

/**
 * Convert USD price in cents to target currency amount in correct units
 * @param usdCents - Price in USD cents (e.g., 2999 for $29.99)
 * @param targetCurrency - Target currency code
 * @returns Amount in target currency's correct units
 */
export function convertPrice(usdCents: number, targetCurrency: CurrencyCode): number {
  const currency = currencyMap.get(targetCurrency);
  if (!currency) {
    throw new Error(`Unsupported currency: ${targetCurrency}`);
  }

  if (currency.isZeroDecimal) {
    // For zero-decimal currencies like JPY, convert USD cents to major units first,
    // then apply exchange rate (no need to multiply by 100)
    return Math.round((usdCents / 100) * currency.rate);
  } else {
    // For regular currencies, apply exchange rate to cents
    return Math.round(usdCents * currency.rate);
  }
}

/**
 * Format price for display in the specified currency
 * @param usdCents - Price in USD cents
 * @param targetCurrency - Target currency code
 * @returns Formatted price string with currency symbol
 */
export function formatPrice(usdCents: number, targetCurrency: CurrencyCode): string {
  const currency = currencyMap.get(targetCurrency);
  if (!currency) {
    throw new Error(`Unsupported currency: ${targetCurrency}`);
  }

  const convertedAmount = convertPrice(usdCents, targetCurrency);

  if (currency.isZeroDecimal) {
    // Zero-decimal currencies show whole numbers
    return `${currency.symbol}${convertedAmount.toLocaleString()}`;
  } else {
    // Regular currencies show decimal places
    return `${currency.symbol}${(convertedAmount / 100).toFixed(2)}`;
  }
}

/**
 * Get currency by code
 * @param code - Currency code
 * @returns Currency object or undefined
 */
export function getCurrency(code: string): Currency | undefined {
  return currencyMap.get(code);
}