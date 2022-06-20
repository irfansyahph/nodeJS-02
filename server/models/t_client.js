const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_client', {
    client_number: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    client_name: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 't_client',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "t_client_pkey",
        unique: true,
        fields: [
          { name: "client_number" },
        ]
      },
    ]
  });
};
