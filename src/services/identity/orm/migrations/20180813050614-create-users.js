module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      username: {
        type: Sequelize.STRING(100),
        allowNull: false,
        field: 'username',
        unique: true,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: 'email',
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'password',
      },
      token: {
        type: Sequelize.STRING(1000),
        allowNull: true,
        field: 'token',
      },
      idCreator: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'id_creator',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      idEditor: {
        type: Sequelize.UUID,
        allowNull: true,
        field: 'id_editor',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: 'deleted_at',
      },
    });
  },
  down(queryInterface) {
    return queryInterface.dropTable('users');
  },
};
