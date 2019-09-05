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
  ["J", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/J.jpg"],
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
  ["Bird", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/bird.gif", 1]
]

words_list.each do |name, link, user_id|
  Word.create(name: name, link: link, user_id: user_id)
end

# alphabets_list.each do |name, link|
#   Alphabet.create(name: name, link: link)
# end

# numbers_list.each do |name, link|
#   Number.create(name: name, link: link)
# end