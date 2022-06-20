const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_policy', {
    policy_number: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    policy_submit_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    premium: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    commision: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    client_number: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 't_client',
        key: 'client_number'
      }
    },
    agent_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 't_agent',
        key: 'agent_code'
      }
    },
    policy_status: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    policy_due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_policy',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "t_policy_pkey",
        unique: true,
        fields: [
          { name: "policy_number" },
        ]
      },
    ]
  });
};
