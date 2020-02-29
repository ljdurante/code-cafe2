

module.exports = function (sequelize, DataTypes) {
  var Meet = sequelize.define("Meet", {
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    users: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Meet.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Meet.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Meet;
};
