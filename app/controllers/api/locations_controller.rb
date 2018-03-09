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

  def destroy
    Location.find(params[:id]).destroy
    render json: { message: 'Location deleted' }
  end 
  
  private 

  def set_trip 
    @trip = Trip.find(params[:trip_id])
  end 

end
