class Api::LocationsController < ApplicationController
  before_action :set_trip

  def index
    @locations = @trip.locations.all 
    render json: @locations 
  end 

  def show
  end 

  def update 
  end 

  def create
  end 
  
  private 

  def set_trip 
    @trip = Trip.find(params[:trip_id])
  end 

end