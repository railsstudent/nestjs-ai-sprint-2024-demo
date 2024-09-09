export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  groq: {
    apiKey: process.env.GROQ_API_KEY || '',
    model: process.env.GROQ_MODEL || 'gemma2-9b-it',
  },
  swaggier: {
    title: process.env.SWAGGER_TITLE || '',
    description: process.env.SWAGGER_DESCRIPTION || '',
    version: process.env.SWAGGER_VERSION || '1.0',
    tag: process.env.SWAGGER_TAG || '',
  },
});
