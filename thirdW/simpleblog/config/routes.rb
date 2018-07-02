Rails.application.routes.draw do
  root 'classes#index'
  get 'about' => 'pages#about'
  resources :classes do
  	resources :students
  end
end
