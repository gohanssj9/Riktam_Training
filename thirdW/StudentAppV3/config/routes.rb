Rails.application.routes.draw do
	resources :departments do
	  get "delete"
	  resources :students do
	  	get "delete"
	  end
	end

	root to: "departments#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
