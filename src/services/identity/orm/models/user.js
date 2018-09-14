const userHooks = require('./../hooks');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'username',
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'email',
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password',
    },
    token: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'token',
    },
    idCreator: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'id_creator',
    },
    idEditor: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'id_editor',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at',
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at',
    },
  }, {
    hooks: userHooks,
  });
  return User;
};
