class Api::V1::MessagesController < ApplicationController
  def index
    @messages = Message.all
    render json: @messages.sample
  end
end
