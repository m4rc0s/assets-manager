"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Router_1 = __importDefault(require("./Router"));
dotenv_1.default.config();
const PORT = Number(process.env.PORT) || 9000;
const PROTOCOL = process.env.PROTOCOL || 'http';
const DOMAIN = process.env.DOMAIN || 'localhost';
const HOSTNAME = `${PROTOCOL}://${DOMAIN}`;
const BASE_URL = `${HOSTNAME}:${PORT}`;
const SERVICE_NAME = process.env.SERVICE_NAME;
const PROFILES_ACTIVE = process.env.PROFILES_ACTIVE;
const app = (0, express_1.default)();
console.log(`Initializing ${SERVICE_NAME} service.`);
app.use(Router_1.default);
app.listen(PORT, DOMAIN, () => {
    console.log(`Service started with active profile ${PROFILES_ACTIVE}.`);
    console.log(`Listen on ${BASE_URL}`);
});
