// Runtime configuration fetched from server
let cachedConfig: RuntimeConfig | null = null;

interface RuntimeConfig {
  storeName: string;
  currency: string;
  ENABLE_CHECKOUT: boolean;
  SHOW_COMING_SOON: boolean;
}

export async function fetchRuntimeConfig(): Promise<RuntimeConfig> {
  if (cachedConfig) {
    return cachedConfig;
  }

  try {
    const response = await fetch('/api/runtime');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    cachedConfig = await response.json();
    return cachedConfig!;
  } catch (error) {
    console.error('Failed to fetch runtime config:', error);
    
    // Return safe defaults if API fails
    return {
      storeName: "YourBrand",
      currency: "USD",
      ENABLE_CHECKOUT: false,
      SHOW_COMING_SOON: true
    };
  }
}

// Export individual config values
export const getRuntimeConfig = () => cachedConfig;

// Helper to refresh config (useful for testing)
export const refreshConfig = () => {
  cachedConfig = null;
  return fetchRuntimeConfig();
};

// Named exports for convenience
export const getCheckoutEnabled = async () => {
  const config = await fetchRuntimeConfig();
  return config.ENABLE_CHECKOUT;
};

export const getShowComingSoon = async () => {
  const config = await fetchRuntimeConfig();
  return config.SHOW_COMING_SOON;
};

export const getStoreName = async () => {
  const config = await fetchRuntimeConfig();
  return config.storeName;
};

export const getCurrency = async () => {
  const config = await fetchRuntimeConfig();
  return config.currency;
};