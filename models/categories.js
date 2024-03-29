const { Schema, model } = require("mongoose");

const categorieSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
    unique: true,
  },
  estado: {
    type: Boolean,
    default: true,
    required: true,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

categorieSchema.methods.toJSON = function () {
  const { __v, estado, ...remainingCategory } = this.toObject();

  return remainingCategory;
};

module.exports = model("Categorie", categorieSchema);
