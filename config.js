const env = process.env

export default {
    port: env.PORT || '8080'
}

export const nodeEnv = env.NODE_ENV || 'development'