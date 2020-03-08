# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "http"
require "json"

User.destroy_all

def search(tickers, type, api_key)
  url = "https://cloud.iexapis.com/stable/stock/market/batch/"
  params = {
    symbols: tickers,
    types: type,
    token: api_key,
  }
  response = HTTP.get(url, params: params)
  # .auth("Bearer #{ENV["API_TOKEN"]}").
  json_response = response.parse
  puts json_response
end

search("aapl, fb, msft, googl, amzn, snap, uber, tsla", "quote", ENV["API_TOKEN"])
