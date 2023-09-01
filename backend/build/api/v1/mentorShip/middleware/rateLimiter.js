import rateLimiter from "express-rate-limit";
export const limiter = rateLimiter({
    max: 3,
    windowMs: 60000,
    standardHeaders: false,
    message: {
        status: 429,
        message: "We cant take anymore requests at the moment - Please try again in a few minutes",
        type: "error"
    }
});
