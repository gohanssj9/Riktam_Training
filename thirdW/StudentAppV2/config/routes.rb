Rails.application.routes.draw do
  resources :students do
  	get "delete"
  end

  root to: "students#index"
  # get 'students/index'
  # get 'students/new'
  # get 'students/edit'
  # # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
