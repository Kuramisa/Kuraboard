export const invUrl = "https://discord.gg/e2u6rQUJ9C";
export const authUrl = process.env.NODE_ENV === "production"
    ? "https://discord.com/api/oauth2/authorize?client_id=969414951292788766&redirect_uri=https%3A%2F%2Fkuramisa.com%2Flogin&response_type=code&scope=guilds%20identify"
    : "https://discord.com/api/oauth2/authorize?client_id=969414951292788766&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Flogin&response_type=code&scope=guilds%20identify";