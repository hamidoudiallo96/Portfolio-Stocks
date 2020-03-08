class TransactionsController < ApplicationController
  before_action :set_transactions, only: [:show, :update, :destroy]

  def index
    @transactions = Transaction.all
    render json: @transactions
  end

  def show
  end

  def create
    @transaction = Transaction.create(transaction_params)

    if @transaction.valid?
      render json: @transaction
    else
      render json: { errors: @transaction.errors.full_messages }
    end
  end

  def update
    @transaction.update(transaction_params)
    render json: @transaction
  end

  def destroy
    @transaction.destroy
  end

  private

  def set_transactions
    @transaction = Transaction.find(params[:id])
  end

  def transaction_params
    params.permit(:price, :quantity, :user_id, :stock_id)
  end
end
