export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        readonly OMDB_API_KEY: string;
        readonly HOST: string;
        readonly PORT: string;
        readonly TRUSTED_HOSTS: string;
    }
  }
}