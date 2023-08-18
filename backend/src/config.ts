export const config = {
    omdb: {
        apiKey: process.env.OMDB_API_KEY,
        cacheTTL: 60 * 60 * 1000,
    },
    host: process.env.HOST,
    port: +process.env.PORT,
    trustedHosts: process.env.TRUSTED_HOSTS.split(','),
} as const;
