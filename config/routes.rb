Rails.application.routes.draw do

  devise_for :users
  root 'homepage#index'

  resources :comments
  resources :requests
  resources :words
  resources :merdeaf_scores

  get '/games/index'
  get'/games/merdeaf'
  get '/games/wordsearch'
  get '/games/sudoku'

  get '/lessons/index'
  get '/lessons/alphabets'
  get '/lessons/numbers'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end