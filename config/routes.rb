Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :podcasts, only: %i(index show) do
      resources :episodes, only: %i(index)
    end
  end
end
