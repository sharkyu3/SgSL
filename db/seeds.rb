# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

words_list = [
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
  ["Z", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/Z.jpg"],
  ["1", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/1.jpg"],
  ["2", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/2.jpg"],
  ["3", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/3.jpg"],
  ["4", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/4.jpg"],
  ["5", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/5.jpg"],
  ["6", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/6.jpg"],
  ["7", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/7.jpg"],
  ["8", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/8.jpg"],
  ["9", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/9.jpg"],
  ["10", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/10-1.jpg"],
  ["All", "https://sadeafportal.org.sg/sgslbank/wp-content/uploads/2018/07/all.gif"]
]
words_list.each do |name, link|
  Word.create(name: name, link: link)
end