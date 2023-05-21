import { Polygon, Localhost, Goerli } from "@thirdweb-dev/chains";

export const IS_DEV_ENV = process.env.NODE_ENV === "development";

export const PRODUCTION_CHAIN = Goerli;
export const DEVELOPMENT_CHAIN = Localhost;
export const CHAIN = IS_DEV_ENV ? Localhost : Polygon;
