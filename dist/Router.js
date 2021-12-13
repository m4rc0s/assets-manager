"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HealthCheckResponse_1 = __importDefault(require("./HealthCheckResponse"));
exports.default = (0, express_1.Router)().get("/health-check", (request, response) => {
    response.json(new HealthCheckResponse_1.default());
});
