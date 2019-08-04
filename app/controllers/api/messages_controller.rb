class Api::MessagesController < ApplicationController
  def index
    @messages = Message.where(group_id: params[:group_id]).where('id > ?', params[:id]).includes(:user)
  end
end