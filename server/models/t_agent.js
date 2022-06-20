const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_agent', {
    agent_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    agent_name: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    agent_office: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    basic_comission: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_agent',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "t_agent_pkey",
        unique: true,
        fields: [
          { name: "agent_code" },
        ]
      },
    ]
  });
};
