const soldier = {
  name: "John Rembo",
  health: 10,
  weapon: {
    name: "bow",
    arrows: 30,
  },
  supplies: 3,
  shoot: function () {
    if (this.weapon.arrows > 0) {
      this.weapon.arrows--;
      console.log("Свист");
    } else {
      console.log("Колчан пуст!");
    }
  },
  reload: function () {
    if (this.supplies > 0) {
      this.supplies--;
      this.weapon.arrows = 30;
      console.log("Смена колчана");
    } else {
      console.log("не осталось припасов");
    }
  },
  hurt: function () {
    if (this.health > 0) {
      this.health--;
    }
    if (this.health <= 0) {
      console.log("Ты проиграл");
    }
  },
};
console.log(soldier);
