source 'https://rubygems.org'

gem 'rails', '4.2.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'pg'

# front-end
gem 'react-rails', '~> 1.0'
gem 'slim-rails'


group :development do
  gem 'byebug'
  gem 'web-console', '~> 2.0'
  gem 'spring'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry-rails'
  gem 'quiet_assets'
end


group :development, :test do
  gem 'dotenv-rails'
  gem 'rspec-rails', '~> 3.0'
  gem 'rspec-activemodel-mocks'
end

group :test do
  gem 'capybara'
  gem 'database_cleaner', '~> 1.0.1'
  gem 'shoulda-matchers'
  gem 'factory_girl_rails'
  gem 'faker'
end

group :staging, :production do
  gem 'passenger'
  gem 'rails_12factor'
end
