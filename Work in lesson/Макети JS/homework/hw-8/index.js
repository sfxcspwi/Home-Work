const friend = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (const members of friend)
{
    string += members + " ";
}
console.log(string);
console.log(friend.join(" "));

const cards = [ "Карточка-1", "Карточка-2", "Карточка-3", "Карточка-4", "Карточка-5"];
const cardToRemove = cards.splice(2, 1);
const cardToInsert = cards.splice(5, 1, "Карточка-6");
const cardToUpdate = cards.splice(2, 1, "Карточка-3+1")
console.log(cards)