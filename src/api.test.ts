import request from "supertest";
import { application } from "./api";

describe("API Endpoint Tests", () => {
    describe("GET /status", () => {
        it("should return status 200 and OK message", async () => {
            // Arrange
            const endpoint = "/status";

            // Act
            const response = await request(application).get(endpoint);

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toEqual({ status: "OK" });
        });
    });

    // Add more test cases for other endpoints if needed
});
