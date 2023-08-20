require("dotenv").config();


const options = {
  database: process.env.DATABASE_NAME || 'teste_uol',
  username: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "senha",
  host:  process.env.DATABASE_HOST || "localhost",
  port: 3306,
  dialect: "mysql",
  define: {
    timestamps: true,
    underscored: true
  }
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};
