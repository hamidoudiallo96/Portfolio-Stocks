class StocksController < ApplicationController
  before_action :set_stocks, only: [:show, :update]

  def index
    @stocks = Stock.all
    render json: @stocks
  end

  def show
    render json: @stock
  end

  def update
    @stock.update(stock_params)
    render json: @stock
  end

  private

  def set_stocks
    @stock = Stock.find(params[:id])
  end

  def stock_params
    params.permit(:ticker, :open_price, :current_price, :shares)
  end
end
