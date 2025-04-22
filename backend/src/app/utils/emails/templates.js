const verificationEmailTemplate = (username, verificationURL) => {
    return {
        body: {
            name: username,
            intro: "Welcome to LeetLab! We're thrilled to have you join our community of coding enthusiasts.",
            action: {
                instructions: "To get started with LeetLab, please verify your email by clicking the button below:",
                button: {
                    color: "#22BC66", // Optional action button color
                    text: "Verify your email!",
                    link: verificationURL,
                },
            },
            outro:
                "Need help or have questions? Just reply to this email, and our support team will assist you.",
        },
    };
};

const forgotPasswordEmailTemplate = (username, verificationURL) => {
    return {
        body: {
            name: username,
            intro: "Forgot your password? No worries, we've got you covered at LeetLab.",
            action: {
                instructions: "To reset your password, please click the button below:",
                button: {
                    color: "#FF5733", // Optional action button color
                    text: "Reset your password",
                    link: verificationURL,
                },
            },
            outro:
                "If you did not request a password reset, please ignore this email. For further assistance, feel free to contact our support team.",
        },
    };
};

export { verificationEmailTemplate, forgotPasswordEmailTemplate };
