import Sequelize, { Model } from 'sequelize';

class Purchase extends Model {
  static init(sequelize) {
    super.init(
      {
        payment_method: Sequelize.STRING,
        date: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
    // this.belongsTo(models.PurchasesItems, { foreignKey: 'purchase_id', as: 'purchase' });
  }

}

export default Purchase;
