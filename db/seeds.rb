# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

alphabets_list = [
  ["A", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/A.jpg"],
  ["B", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/B.jpg"],
  ["C", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/C.jpg"],
  ["D", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/D.jpg"],
  ["E", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/E.jpg"],
  ["F", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/F.jpg"],
  ["G", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/G.jpg"],
  ["H", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/H.jpg"],
  ["I", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/I.jpg"],
  ["J", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/J.png"],
  ["K", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/K.jpg"],
  ["L", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/L.jpg"],
  ["M", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/M.jpg"],
  ["N", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/N.jpg"],
  ["O", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/O.jpg"],
  ["P", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/P.jpg"],
  ["Q", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/Q.jpg"],
  ["R", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/R.jpg"],
  ["S", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/S.jpg"],
  ["T", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/T.jpg"],
  ["U", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/U.jpg"],
  ["V", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/V.jpg"],
  ["W", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/W.jpg"],
  ["X", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/X.jpg"],
  ["Y", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/Y.jpg"],
  ["Z", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/Z.jpg"]
]

numbers_list = [
  ["1", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/1.jpg"],
  ["2", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/2.jpg"],
  ["3", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/3.jpg"],
  ["4", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/4.jpg"],
  ["5", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/5.jpg"],
  ["6", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/6.jpg"],
  ["7", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/7.jpg"],
  ["8", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/8.jpg"],
  ["9", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/9.jpg"],
  ["10", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/10-1.jpg"]
]

words_list = [
  ["All", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/all.gif", 1],
  ["Animal", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/animal.gif", 1],
  ["Brother", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/brother.gif", 1],
  ["Blood", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/blood.gif", 1],
  ["Black", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/black.gif", 1],
  ["Bad", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/bad.gif", 1],
  ["Because", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/because.gif", 1],
  ["Bird", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/bird.gif", 1],
  ["Child", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/child.gif", 1],
  ["Count", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/count-1.gif", 1],
  ["Cat", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/cat.gif", 1],
  ["Dust", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/dusty.gif", 1],
  ["Dull", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/dull.gif", 1],
  ["Dry", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/dry.gif", 1],
  ["Dirty", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/dirty.gif", 1],
  ["Dog", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/dog.gif", 1],
  ["Die", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/die.gif", 1],
  ["Day", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/day.gif", 1],
  ["Egg", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/egg-2.gif", 1],
  ["Earth", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/earth.gif", 1],
  ["Flower", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/flower.gif", 1],
  ["Full", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/full.gif", 1],
  ["Fish", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/fish.gif", 1],
  ["Fire", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/fire.gif", 1],
  ["Father", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/father.gif", 1],
  ["Feather", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/feather.gif", 1],
  ["Grass", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/grass.gif", 1],
  ["Green", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/green.gif", 1],
  ["Good", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/good.gif", 1],
  ["Husband", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/husband.gif", 1],
  ["How", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/heavy.gif", 1],
  ["Hunt", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/hunt.gif", 1],
  ["Heavy", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/heavy.gif", 1],
  ["Ice", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/ice.gif", 1],
  ["If", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/if.gif", 1],
  ["Kill", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/kill-1.gif", 1],
  ["Louse", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/louse.gif", 1],
  ["Live", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/live.gif", 1],
  ["Long", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/long-1.gif", 1],
  ["Lie", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/lie.gif", 1],
  ["Laugh", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/laugh.gif", 1],
  ["Leaf", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/leaf.gif", 1],
  ["Moon", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/moon.gif", 1],
  ["Mother", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/mother.gif", 1],
  ["Mountain", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/mountain.gif", 1],
  ["Man", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/man.gif", 1],
  ["Meat", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/meat.gif", 1],
  ["Night", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/night.gif", 1],
  ["Not", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/not-1.gif", 1],
  ["New", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/new.gif", 1],
  ["Narrow", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/narrow.gif", 1],
  ["Name", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/name.gif", 1],
  ["Other", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/other.gif", 1],
  ["Old", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/old.gif", 1],
  ["Play", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/play.gif", 1],
  ["Person", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/person.gif", 1],
  ["Pig", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/pig.gif", 1],
  ["River", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/river.gif", 1],
  ["Rope", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/rope.gif", 1],
  ["Rain", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/rain.gif", 1],
  ["Red", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/red.gif", 1],
  ["Right (Correct)", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/right.gif", 1],
  ["Stone", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/stone.gif", 1],
  ["Sun", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/sun.gif", 1],
  ["Star", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/star.gif", 1],
  ["Snake", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/snake.gif", 1],
  ["Snow", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/snow.gif", 1],
  ["Stand (To be standing)", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/stand.gif", 1],
  ["Smooth", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/smooth.gif", 1],
  ["Sit", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/sit.gif", 1],
  ["Sing", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/sing.gif", 1],
  ["Sister", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/sister.gif", 1],
  ["Sea", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/sea.gif", 1],
  ["Sharp", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/sharp.gif", 1],
  ["Short", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/short.gif", 1],
  ["Salt", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/salt.gif", 1],
  ["Tree", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/tree.gif", 1],
  ["Tail", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/tail.gif", 1],
  ["Thin", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/thin.gif", 1],
  ["Vomit", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/vomit.gif", 1],
  ["When", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/when.gif", 1],
  ["Where", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/where.gif", 1],
  ["White", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/white.gif", 1],
  ["Who", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/who.gif", 1],
  ["Wide", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/wide.gif", 1],
  ["Wife", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/wife.gif", 1],
  ["Wind", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/wind.gif", 1],
  ["With", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/with.gif", 1],
  ["Woman", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/woman.gif", 1],
  ["Wood", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/wood.gif", 1],
  ["Worm", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/worm.gif", 1],
  ["Work", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/work.gif", 1],
  ["What", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/what.gif", 1],
  ["Water", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/water.gif", 1],
  ["Wet", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/wet.gif", 1],
  ["Warm", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/warm.gif", 1],
  ["Year", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/year.gif", 1],
  ["Yellow", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/yellow.gif", 1]
]

lessons_list = [
  ["Alphabets", "https://www.youtube.com/embed/Xx3fgCP_5sk", 1],
  ["Numbers", "https://www.youtube.com/embed/TtTtGEpZyjM", 1]
]

lessons_list.each do |name, link, user_id|
  Lesson.create(name: name, link: link, user_id: user_id)
end

words_list.each do |name, link, user_id|
  Word.create(name: name, link: link, user_id: user_id)
end

alphabets_list.each do |name, link|
  Alphabet.create(name: name, link: link)
end

numbers_list.each do |name, link|
  Number.create(name: name, link: link)
end